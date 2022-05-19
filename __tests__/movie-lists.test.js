const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const {addMovie} = require('../functions')

const {deleteMovie} = require('../functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('add movie functionality', async () => {
    await addMovie(driver)
})

test('Delete movie', async () => {
    await deleteMovie(driver)
})

// test('Message pop up', async () => {
//     await messagePopUp(driver)
// })