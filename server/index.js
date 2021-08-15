const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

app.get('/books', async (req, res) => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });
    const page = await browser.newPage();

    const findAndBuyBook = async () => {
        await page.goto(`https://www.goodreads.com/shelf/show/${req.query.genre}`);

        const booksLength = await page.evaluate(() => document.getElementsByClassName("bookTitle").length);
        await page.waitForTimeout(1000);
        const randomBookNumber = Math.floor(Math.random() * (booksLength + 1));

        const bookName = await page.evaluate(({randomBookNumber}) =>
                document.getElementsByClassName("bookTitle")[randomBookNumber].textContent,
            {randomBookNumber});

        await page.goto('https://www.amazon.com/');

        await page.focus('#twotabsearchtextbox');

        await page.type('#twotabsearchtextbox', bookName);

        await page.keyboard.press('Enter');

        await page.waitForNavigation();

        await page.evaluate(() => {
            document.getElementsByClassName("s-image")[0].click();
        });

        await page.waitForNavigation();

        const isBuyNowAvailable = await page.evaluate(() => !!document.getElementById("buy-now-button"));
        const buyOneClick = await page.evaluate(() => !!document.getElementById("one-click-button"));
        const notAvailableForBuy = !isBuyNowAvailable && !buyOneClick;

        if (isBuyNowAvailable) {
            await page.evaluate(() => {
                document.getElementById("buy-now-button").click();
            });
        }

        if (buyOneClick) {
            await page.evaluate(() => {
                document.getElementById("one-click-button").click();
            });
        }
        if (notAvailableForBuy) {
            await findAndBuyBook();
        }
    }
    await findAndBuyBook();
})

app.listen(4001);
