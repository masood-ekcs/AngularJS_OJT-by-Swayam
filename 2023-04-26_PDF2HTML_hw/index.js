const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const app = express();
// const pdf2htmlEX = require('gebo-pdf2htmlex')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('pdf'), function (req, res) {
    const pdfPath = req.file.path;
    const htmlPath = pdfPath.replace(/pdf$/, 'html');
    const cmd = `pdf2htmlEX ${pdfPath} ${htmlPath}`;
    exec(cmd, function (err, stdout, stderr) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error converting PDF to HTML');
        }
        res.download(htmlPath);
    });
});

app.listen(3000, function () {
    console.log('Server started on port 3000');
});
