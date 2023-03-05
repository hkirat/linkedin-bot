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
&ensp;3.a) MacOS/Linux <br />
&emsp;> export USERNAME="Replace this with your linkedin username without quotes)" <br />
&emsp;> export PASSWORD="Replace this with your linkedin password without quotes)" <br />
&ensp;3.b) Windows-CMD <br />
&emsp;> setx USERNAME "Replace this with your linkedin username without quotes" <br />
&emsp;> setx PASSWORD "Replace this with your linkedin password without quotes" <br />
&ensp;3.c) Powershell <br />
&emsp;> $Env:USERNAME="Replace this with your linkedin username" <br />
&emsp;> $Env:PASSWORD="Replace this with your linkedin password" <br />
4) Install node, chrome-driver and selenium.
5) Run the application.
