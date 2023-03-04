const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const BasePage = require("./WebPage")

async function sleep(timeInS) {
	await new Promise((resolve) => setTimeout(resolve, timeInS * 1000))
}

async function startBot() {
	const page = new BasePage();
	let site = "https://www.linkedin.com";
        await page.visit(site);

        await sleep(5)

	await page.signin();
        await sleep(20) 
        
	site = "https://www.linkedin.com/mynetwork/invitation-manager";
        await sleep(5)
	await page.visit(site);

	for (let i = 3; i< 10000; i++) {
		if (i % 10 === 9) {
			page.visit(site);
			await sleep(8)
			page.scrollToBottom();
			await sleep(2)
		}
		try {
            		await page.pressAcceptButton();
            		await new Promise((resolve) => setTimeout(resolve, 1000))
	    		page.scrollToBottom();	
	       		await sleep(3)
		} catch(e) {
		 	console.error(e)
		}
	}
        await new Promise((resolve) => setTimeout(resolve, 5000))
}


(async () => {
	await startBot()
})()
