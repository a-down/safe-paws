// const uploader = Uploader({
//   apiKey: "free"
// });

// const addImageBtn = $('#add-pet-image-btn');

// addImageBtn.on('click', async (e) => {
//   e.preventDefault()

//   const imageString = await uploader.open({ multi: false }).then(files => {
//     if (files.length === 0) {
//       console.log('No files selected.')
//     } else {
//       console.log('Pet Picture added!');
//       const imageUrl = files.map(f => f.fileUrl);
//       return imageUrl
//     }
//   }).catch(err => {
//     console.error(err);
//   });

//  console.log(imageString)
// })


// module.exports = uploader