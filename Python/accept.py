#Importing Libraries
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

#User Inputs
username = "ENTER_YOUR_EMAIL_ID"
password = "ENTER_YOUR_PASSWORD"
NUMBER_OF_INVITATIONS = 1  #Enter the number of invitations you want to accept


#Create a new instance of the Chrome driver and service object to remove extra logs
serv_obj = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=serv_obj)
driver.maximize_window()


#Function Defnitions
def login():
    try:
        driver.find_element(By.ID,'session_key').send_keys(username)
        time.sleep(1)
        driver.find_element(By.ID,'session_password').send_keys(password)
        time.sleep(1)
        driver.find_element(By.XPATH,'//button[@type="submit"]').click()
    except:
        print("Login Failed")

def accept():
    try:
        driver.find_element(By.XPATH,'//button[@class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view invitation-card__action-btn"]').click()
    except:
        print("No more invitations to accept")

def main():
    driver.get('https://www.linkedin.com')
    time.sleep(3)

    #Login using email and password
    login()
    time.sleep(2)

    #Open the invitations page
    driver.get('https://www.linkedin.com/mynetwork/invitation-manager/')
    time.sleep(2)

    #Accept all invitations
    for i in range(NUMBER_OF_INVITATIONS):
        
        #scroll to botton of page before clicking accept
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        #Accept the invitation
        accept()
        time.sleep(1)

    #Close the browser
    driver.close()


if __name__ == "__main__":
    main()