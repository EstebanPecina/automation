const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('Multiverse of Madness')

    await driver.findElement(By.xpath(`//button[text()='Add']`)).click()

    const movie = await driver.findElement(By.xpath(`//li/span[text()='Multiverse of Madness']`))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const messagePopUp = async (driver) => {
    await driver.findElement(By.xpath(`//*[@id="message"]`))
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.id('Multiverse of Madness')).click()
}

module.exports = {
    addMovie,
    // messagePopUp,
    deleteMovie
}