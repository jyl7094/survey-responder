const puppeteer = require("puppeteer");

exports.getMcdonalds = (req, res, next) => {
  res.render("survey-code", {
    name: "McDonald's",
  });
};

exports.postMcdonaldsLoading = (req, res, next) => {
  res.render('loading', {
    field1: req.body.field1,
    field2: req.body.field2,
    field3: req.body.field3,
    field4: req.body.field4,
    field5: req.body.field5,
    field6: req.body.field6,
  });
};

exports.postMcdonaldsResult = (req, res, next) => {
  console.log(req.body.field1);
  console.log(req.body.field2);
  console.log(req.body.field3);
  console.log(req.body.field4);
  console.log(req.body.field5);
  console.log(req.body.field6);
  // res.render('index');
  // async function responder() {
  //   const browser = await puppeteer.launch({
  //     args: ['--no-sandbox', '--disable-setuid-sandbox'],
  //   });
  //   const page = await browser.newPage();
  //   await page.goto('https://www.mcdvoice.com/');
  //   await page.type('#CN1', req.body.field1);
  //   await page.type('#CN2', req.body.field2);
  //   await page.type('#CN3', req.body.field3);
  //   await page.type('#CN4', req.body.field4);
  //   await page.type('#CN5', req.body.field5);
  //   await page.type('#CN6', req.body.field6);
  //   await page.click('#NextButton');
  //   await page.waitForSelector('#R000455\\.2');
  //   await page.evaluate(() => {
  //     document.querySelector('#R000455\\.2').click();
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R004000\\.3');
  //   await page.evaluate(() => {
  //     document.querySelector('#R004000\\.3').click();
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R001000\\.5');
  //   await page.evaluate(() => {
  //     document.querySelector('#R001000\\.5').click();
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R000444\\.2');
  //   await page.evaluate(() => {
  //     document.querySelector('#R000444\\.2').click();
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForNavigation();
  //   let options = await page.$$('input[value="5"]');
  //   const slashes = '\\'
  //   let ids = [];
  //   for (let el of options) {
  //     let substring = el._remoteObject.description.match(/#[R]\d{6}\.\d/g)[0];
  //     let substringWithSlashes = [substring.slice(0, 8), slashes, substring.slice(8)].join('');
  //     ids.push(substringWithSlashes);
  //   }
  //   await page.$eval(ids[0], el => el.click());
  //   await page.$eval(ids[1], el => el.click());
  //   await page.$eval(ids[2], el => el.click());
  //   await page.$eval(ids[3], el => el.click());
  //   await page.$eval(ids[4], el => el.click());
  //   await page.$eval(ids[5], el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForNavigation();
  //   options = await page.$$('input[value="5"]');
  //   ids = [];
  //   for (let el of options) {
  //     let substring = el._remoteObject.description.match(/#[R]\d{6}\.\d/g)[0];
  //     let substringWithSlashes = [substring.slice(0, 8), slashes, substring.slice(8)].join('');
  //     ids.push(substringWithSlashes);
  //   }
  //   await page.$eval(ids[0], el => el.click());
  //   await page.$eval(ids[1], el => el.click());
  //   await page.$eval(ids[2], el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForNavigation();
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R016000\\.2');
  //   await page.$eval('#R016000\\.2', el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForNavigation();
  //   await page.$eval('#R018000\\.5', el => el.click());
  //   await page.$eval('#R019000\\.5', el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForNavigation();
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R020000\\.1');
  //   await page.$eval('#R020000\\.1', el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R000387\\.4');
  //   await page.$eval('#R000387\\.4', el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   await page.waitForSelector('#R000482\\.5');
  //   await page.$eval('#R000482\\.5', el => el.click());
  //   await page.evaluate(() => {
  //     document.querySelector('#NextButton').click();
  //   });
  //   try {
  //     await page.waitForSelector('p.ValCode', {timeout: 3000});
  //   } catch (e) {
  //       // In case when an optional survey page comes up instead of the page with the validation code is available
  //       await page.waitForSelector('#NextButton');
  //       await page.evaluate(() => {
  //         document.querySelector('#NextButton').click();
  //       });
  //       await page.waitForSelector('p.ValCode');
  //   }
  //   const validationCode = await page.$('p.ValCode');
  //   const value = await page.evaluate(el => el.textContent.split(': ')[1], validationCode);
  //   await browser.close();
  //   return Promise.resolve(value);
  // }
  // try {
  //   responder().then(result => {
      res.render('result', {
        // vc: result
        vc: '123456'
      });
  //   });
  // } catch (e) {
  //   res.status(408).render('408');
  // }
};
