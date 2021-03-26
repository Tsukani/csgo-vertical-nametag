# CS:GO Vertical Name tag
##### Allows you to rename CS:GO skins with a vertical name tag. Written in JavaScript (requires [Node.js](https://nodejs.org/en/))

## Installation
* Make sure you have [Node.js](https://nodejs.org/en/) installed.
* Download this repository by clicking the green `Code` button and selecting `Download ZIP`.
* Extract the ZIP file and open the folder.
* Open account.json and enter your account username and password. [Why?](#why-is-my-account-credentials-required-and-how-does-it-work)
* Open a terminal in the folder.
* Install the required dependencies by typing `npm i`.
* Once done, type `node .` to start the script.

## Usage
Start by making sure that the game isn't running. Once the application is launched (and you've entered your Steam Guard Code if enabled) you will be prompted to fill in 3 things:
* Name tag URL
* Skin URL
* Skin name
 
The URLs are found by entering your [CS:GO inventory](https://steamcommunity.com/my/inventory/#730) in a web browser, clicking on the item you want to select in the inventory, right-clicking that item and selecting `Copy link address` like shown:

![Copy URL example](https://i.imgur.com/CnxNtTL.png)

Paste the name tag URL first and afterwards the skin URL (Right click to paste). Lastly enter the name which you would like to use for your skin. 
#### SKIN NAMES BELOW 9 CHARACTERS HAVE ONLY BEEN PROVED TO WORK USING THIS METHOD. TO MAKE SURE YOU GET THE DESIRED RESULT, PLEASE ONLY NAME YOUR SKIN A MAXIMUM OF 9 CHARACTERS!
You'll be prompted to confirm the name tag and will see a preview of the result. Type `y` to use the name tag-

## Why is my account credentials required? (And how does it work?)
Your credentials are required to establish a connection to the CS:GO GameCordinator.
When launching the application your account automatically starts CS:GO and connects to the so called "GameCordinator". The GameCordinator has many uses such as displaying profile information, and in our case, inventories. This application emulates a request sent to the GameCordinator when you rename an item in-game but using special characters not normally typeable in the CS:GO.
More information about how this works can be seen in the [node-globaloffensive](https://github.com/DoctorMcKay/node-globaloffensive) module.


## Examples
![Inventory preview](https://steamuserimages-a.akamaihd.net/ugc/1732170977021541534/F6757412137CCD6E4746878A8651B2F1DAEF724C/)
![In-game preview](https://steamuserimages-a.akamaihd.net/ugc/1732170977024469826/6C980E2E181BFD4319151B0960B799769F91C942/)

## Used Modules
* [node-steam-user](https://github.com/DoctorMcKay/node-steam-user)
* [node-globaloffensive](https://github.com/DoctorMcKay/node-globaloffensive)
* [readline](https://github.com/nodejs/node/blob/v15.12.0/lib/readline.js)

## Issues
Any issues or suggestions can be written as an issue on this repository or be sent straight to me on Discord: **Tsukani#0001** 
