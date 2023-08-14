const { Uploader } = require("uploader");

const uploader = Uploader({
  apiKey: "free"
});

uploader.open({ multi: false }).then(files => {
  if (files.length === 0) {
    console.log('No files selected.')
  } else {
    console.log('Pet Picture added!');
    console.log(files.map(f => f.fileUrl));
  }
}).catch(err => {
  console.error(err);
});

module.exports = uploader