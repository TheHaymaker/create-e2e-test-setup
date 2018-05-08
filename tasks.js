const fs = require("fs-extra");
const chalk = require("chalk");
const log = console.log;

// With Promises:
fs
  .readJSON("./package.json")
  .then(packageObj => {
    packageObj.scripts.pree2e = "echo TEST";
    packageObj.scripts.e2e = "node index.js";
    packageObj.scripts.poste2e = "echo test";
    fs
      .writeJSON("./package.json", packageObj, { spaces: 2 })
      .then(() => {
        log(
          chalk.green(
            "Successfully adds tasks for e2e test-suite to package.json "
          )
        );
      })
      .catch(err => {
        log(chalk.red("Error:  %s ! "), err);
      });
  })
  .catch(err => {
    log(chalk.red("Error:  %s ! "), err);
  });
