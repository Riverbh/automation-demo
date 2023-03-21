const { Builder, Capabilities } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, deleteMovie } = require("../testFunctions/addMovie")

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5500/movie-list/index.html");
})

afterAll(async () => {
    await driver.quit()
})

describe("movie list funnctionality ", () => {
    it("add a movie", async () => {
        await addMovie(driver);
    })

    it("deletes movie", async () => {
        await deleteMovie(driver)
        await driver.sleep(3000)
    })
})