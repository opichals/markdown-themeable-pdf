global.atom = require('atom');
mpdf = require('./lib/markdown-themeable-pdf.js');

atom.use("markdown-themeable-pdf", mpdf, {
    exportFileType: "pdf",
    codeHighlightingTheme: "idea.css",
    enableCustomHeader: false,
    enableCustomFooter: false,
    openPdfInAtomWorkspace: false
});

mpdf.convertFile(process.argv[2], "utf-8");