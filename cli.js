global.atom = require('atom');
mpdf = require('./lib/markdown-themeable-pdf.js');

// override the defaults
mpdf.config.enableCustomHeader.default = false;
mpdf.config.enableCustomFooter.default = false;
mpdf.config.codeHighlightingTheme.default = "idea.css";
mpdf.config.openPdfInAtomWorkspace.default = false;
global.atom.config.configDirPath = "./";

let yargs = require('yargs')
    .usage('Usage: $0 [options] <file.md>')
    .help('h')
    .option('show-cfg', {
        default: false,
        type: "boolean"
    });
Object.keys(mpdf.config).forEach((name) => yargs.option(name, mpdf.config[name]));

let argv = yargs.argv;

atom.use("markdown-themeable-pdf", mpdf, argv);

if (argv['show-cfg']) {
    console.log('CONFIG: ', argv);
}
if (!argv._.length) {
    yargs.showHelp();
    process.exit();
}

mpdf.convertFile(argv._.shift(), "utf-8");
