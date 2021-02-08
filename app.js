const lib = require("./lib");

const args = process.argv.slice(2);
if (!args.length) {
    console.log("No argument given.");
} else {
    lib(args);
}
