LinkedIn Invitation Bot
This is a web automation script that uses Selenium WebDriver to automatically accept LinkedIn connection requests.

Getting Started
To use this bot, you need to have Node.js and npm installed on your system. Clone this repository and run the following command to install the required dependencies:

npm install
Next, create a .env file in the project directory and add your LinkedIn username and password:

USERNAME=your_username
PASSWORD=your_password
Usage
To start the bot, run the following command:

node index.js
The bot will automatically sign in to your LinkedIn account, navigate to the invitation manager page, and start accepting connection requests.

Customization
You can customize the behavior of the bot by modifying the BasePage class in the WebPage.js file. For example, you can change the time delay between each request, the number of requests to process, or add additional functionality.