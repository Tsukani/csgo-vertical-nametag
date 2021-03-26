const config = require("./account.json");
const SteamUser = require('steam-user');
const GlobalOffensive = require('globaloffensive');
let user = new SteamUser();
user.logOn({accountName: config.username, password: config.password});
let csgo = new GlobalOffensive(user);

const colors = {
    red: "\x1b[31m%s\x1b[0m",
    green: "\x1b[32m%s\x1b[0m",
    cyan: "\x1b[36m%s\x1b[0m",
}

console.log(colors.cyan, "Make sure to read through the guide on the GitHub repository!");

if (!config.username || !config.password) return console.log(colors.red, "Please enter your account credentials in the account.json file and restart the application!");

user.on('error', (d) => {
    console.log(colors.red, `Failed to login: ${d.toString().split("Error: ")[1]}\nPlease confirm your account.json file...`);
});

user.on('loggedOn', () => {
    user.gamesPlayed([730]);
    console.log(colors.green, "Logged into account");
    const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
    function main() {

        //Name tag ID
        readline.question(`Enter name tag URL (/inventory/#730_2_XXXXXXXXX) (Type 0 if you're renaming a storage unit):\n`, (tagURL) => {
            if (!(tagURL.includes("#730_2_")) && tagURL != "0") {
                console.log(colors.red, "Invalid name tag URL");
                return main();
            } 
            if (tagURL.includes("#730_2_")) tagID = tagURL.split("#730_2_")[1];
            else tagID = tagURL;
            if (!/^\d+$/.test(tagID)) {
                console.log(colors.red, "Invalid name tag URL");
                return main();
            }
            console.log(colors.cyan, `Got name tag ID ${tagID}`);

            //Skin ID
            readline.question(`Enter skin URL (/inventory/#730_2_XXXXXXXXX):\n`, (skinURL) => {
                if (!(skinURL.includes("#730_2_"))) {
                    console.log(colors.red, "Invalid skin URL");
                    return main();
                }
                skinID = skinURL.split("#730_2_")[1];
                if (!/^\d+$/.test(skinID)) {
                    console.log(colors.red, "Invalid skin URL");
                    return main();
                }
                console.log(colors.cyan, `Got skin ID ${skinID}`);
    
                //Skin name
                readline.question(`Enter skin name:\n`, (skinName) => {
                    newSkinName = " ";
                    for (var i = 0; i < skinName.length; i++) {
                        newSkinName += skinName.charAt(i) + " ";
                    }
                    console.log(colors.cyan, `Got skin name ${skinName}`);
                    
                    console.log(`Verify the following skin name:\nSkin name tag: ${newSkinName}\nIn-game name tag:`);
                    for (var i = 0; i < skinName.length; i++) {
                        console.log(skinName.charAt(i));
                    }

                    if (skinName.length > 9) console.log(colors.red, `The maximum confirmed supported name tag length is 9 characters (${skinName} is ${skinName.length}). Applying this name tag may result in an undesirable result!`);

                    function confirmName() {
                        readline.question(`Proceed? (y/n):\n`, (answer) => {
                            if (answer.toLowerCase() == "y") {
                                csgo.nameItem(tagID, skinID, newSkinName);
                                console.log(colors.green, "Done!");
                                readline.close()
                            } else if (answer.toLowerCase() == "n") {
                                main();
                            } else {
                                console.log(colors.red, "Invalid input");
                                confirmName();
                            }
                        });
                    }
                    confirmName();
                });
            });
        });
    }
    main();
});