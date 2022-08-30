const { Builder, Capabilities, By } = require("selenium-webdriver")

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () =>{
    await driver.quit()
})


test('click button', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Speed Racer')

    await driver.findElement(By.xpath('//button')).click()

   const movie = await driver.findElement(By.xpath('//li'))

    await driver.sleep(2000)

})

test('delete movie', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Speed Racer')

    await driver.findElement(By.xpath('//button')).click()

   const movie = await driver.findElement(By.xpath('//li'))

    await driver.sleep(2000)

    const deleteBtn = await driver.findElement(By.xpath('//button[text()="x"]'))

    const displayed = deleteBtn.isDisplayed

    await deleteBtn.click()

    expect(displayed).not.toBe(true)

    await driver.sleep(3000)
})

test('Cross off Movie', async () => {
    await driver.findElement(By.xpath('//input')).sendKeys('Speed Racer')

    await driver.findElement(By.xpath('//button')).click()

   const movie = await driver.findElement(By.xpath('//li'))

    await driver.sleep(2000)

   const crossedOff = await driver.findElement(By.xpath('//span[text()="Speed Racer"]'))

    const displayed = crossedOff.isDisplayed

    await crossedOff.click()

    const clickedTitle = await driver.findElement(By.xpath("//span[contains(@class, 'checked')]"))

    expect(clickedTitle).toBeTruthy

    expect(displayed).toBeTruthy

    await driver.sleep(3000)
})

