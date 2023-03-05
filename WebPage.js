require("dotenv").config();
const { Builder, By, until } = require("selenium-webdriver");

const chrome = require("selenium-webdriver/chrome");

function initOptions(o) {
  //   o.addArguments("headless");
  o.addArguments("disable-infobars");
  o.addArguments("no-sandbox");
  o.addArguments(
    "user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 RuxitSynthetic/1.0 v6419931773 t38550 ath9b965f92 altpub"
  );
  o.setUserPreferences({
    credential_enable_service: false,
  });
}

const BasePage = function (customAudio = null) {
  let o = new chrome.Options();
  initOptions(o);

  this.driver = new Builder()
    .withCapabilities({ acceptSslCerts: true, acceptInsecureCerts: true })
    .setChromeOptions(o)
    .forBrowser("chrome")
    .build();

  this.visit = async function (theUrl) {
    return await this.driver.get(theUrl);
  };

  this.findById = async function (id) {
    await this.driver.wait(
      until.elementLocated(By.id(id)),
      15000,
      "Looking for element"
    );
    return await this.driver.findElement(By.id(id));
  };

  this.findByClassName = async function (name) {
    const els = await this.driver.wait(
      until.elementsLocated(By.className(name)),
      15000,
      "Looking for element"
    );
    return els[els.length - 1];
    return await this.driver.findElement(By.className(name));
  };

  this.signin = async function () {
    let name = process.env.USERNAME || "";
    let password = process.env.PASSWORD || "";
    let input = await this.findById("session_key");
    await input.sendKeys(name);
    let input2 = await this.findById("session_password");
    await input2.sendKeys(password);
    let button = await this.findByClassName(
      "sign-in-form__submit-btn--full-width"
    );
    console.log(button);
    await button.click();
  };

  this.pressAcceptButton = async function () {
    let buttons = await this.findByClassName(
      "artdeco-button--secondary invitation-card__action-btn"
    );

    // The filter method is called on the resulting array of buttons, and is passed a callback function that checks each button's class list. If a class with the name "conversations-quick-replies__reply-button" exists, the button is filtered out of the array.

    let filteredButtons = await Promise.all(
      buttons.filter(async (button) => {
        const classList = await button.getAttribute("class");
        return !classList.includes("conversations-quick-replies__reply-button");
      })
    );

    const MAX_BUTTONS_PER_MINUTE = 10;
    const INTERVAL_IN_MS = 60 * 1000 / MAX_BUTTONS_PER_MINUTE;
  
    for(let i=0; i<filteredButtons.length;i++){
      await filteredButtons[i].click();
      await new Promise((resolve) => setTimeout(resolve, INTERVAL_IN_MS));
    }
  };

  this.scrollToBottom = async function () {
    this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
  };
};

module.exports = BasePage;
