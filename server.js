const express = require('express');
const fileUpload = require('express-fileupload');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  // // const name = req.na
  // if (res.body!==undefined){
  //   console.log('name',res.body);
  // }
if(req.body===null){
  return res.status(400).json({msg: 'no name'})
};
const name = req.body.name
console.log(name);
  const fs = require("fs")
  fs.mkdir(`./client/public/uploads/${name}`, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New directory successfully created.")
    }
  })

  // const name = req.body.username
  // console.log('asds',name)
  file.mv(`${__dirname}/client/public/uploads/${name}/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    if(file.name.split('.')[1]!=='mp4')
    {
    fs.rename(`./client/public/uploads/${name}/${file.name}`, `./client/public/uploads/${name}/picture.jpg`, function(err) {
      if ( err ) console.log('ERROR: ' + err);
  });
}
else{
  fs.rename(`./client/public/uploads/${name}/${file.name}`, `./client/public/uploads/${name}/video.mp4`, function(err) {
    if ( err ) console.log('ERROR: ' + err);
});
}
  });
});

app.listen(5000, () => console.log('Server Started...'));
