const fs = require("fs-extra");
const chalk = require("chalk");
const log = console.log;

const dir = "./__screenshots__";
const childDir = ["__local__", "__deploy__"];
const childChildDir = ["__baseline__", "__actual__", "diff"];

// With Promises:
fs
  .ensureDir(dir)
  .then(() => {
    // log(chalk.green("Created %s"), dir);
    childDir.forEach(child => {
      fs
        .ensureDir(`${dir}/${child}`)
        .then(() => {
          //   log(chalk.green("Created %s"), `${dir}/${child}`);
          childChildDir.forEach(childChild => {
            fs
              .ensureDir(`${dir}/${child}/${childChild}`)
              .then(() => {
                log(chalk.green("Created %s"), `${dir}/${child}/${childChild}`);
              })
              .catch(err => {
                log(chalk.red("Error:  %s ! "), err);
              });
          });
        })
        .catch(err => {
          log(chalk.red("Error:  %s ! "), err);
        });
    });
  })
  .catch(err => {
    log(chalk.red("Error:  %s ! "), err);
  });

const dir2 = "./__e2e-tests__";
const childDir2 = ["selenium", "tests", "utils", "test-suite"];
// const childChildDir2 = ["__baseline__", "__actual__", "diff"];

// With Promises:
fs
  .ensureDir(dir2)
  .then(() => {
    // log(chalk.green("Created %s"), dir2);
    childDir2.forEach(child => {
      fs
        .ensureDir(`${dir2}/${child}`)
        .then(() => {
          log(chalk.green("Created %s"), `${dir2}/${child}`);

          // Write test related files here

          //   childChildDir.forEach(childChild => {
          //     fs
          //       .ensureDir(`${dir}/${child}/${childChild}`)
          //       .then(() => {
          //         log("Nest complete");
          //       })
          //       .catch(err => {
          //         log(chalk.red("Error:  %s ! "), err);;
          //       });
          //   });
        })
        .catch(err => {
          log(chalk.red("Error:  %s ! "), err);
        });
    });
  })
  .catch(err => {
    log(chalk.red("Error:  %s ! "), err);
  });
