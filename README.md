# LINKEDIN-BOT
A linkedin-bot which automatically accepts all the connection invitations. 

## Running it locally on your machine
1) Clone this repo and add .env file with your username and password.
2) Make sure node is installed on your system.
3) Install chrome-driver on your system.
4) Install selenium and dotenv using "npm i selenium dotenv"
5) Run "index.js"

## Running it on cloud instance like AWS
1) SSH into your cloud instance.
2) Clone this repo.
3) Configure your environment variables.
<br />
    3.a) MacOS/Linux
        > export USERNAME="Replace this with your linkedin username without quotes)"
        > export PASSWORD="Replace this with your linkedin password without quotes)"
    3.b) Windows-CMD
        > setx USERNAME "Replace this with your linkedin username without quotes"
        > setx PASSWORD "Replace this with your linkedin password without quotes"
    3.c) Powershell
        > $Env:USERNAME="Replace this with your linkedin username"
        > $Env:PASSWORD="Replace this with your linkedin password"       
<br /> 
4) Install node, chrome-driver and selenium.
5) Run the application.
