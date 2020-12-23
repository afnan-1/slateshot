const express = require('express');
const fileUpload = require('express-fileupload');
var cors = require('cors')
const app = express();
app.use(cors());
const passport = require("passport");
const cookieParser = require('cookie-parser')
const moongose = require('mongoose');
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());

moongose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connect to database'));
// Upload Endpoint
app.post('/uploadphoto', (req, res) => {

  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  if (req.body === null) {
    return res.status(400).json({ msg: 'no name' })
  };

  const file = req.files.file;
  const name = req.body.name


  const fs = require("fs")
  fs.mkdir(`./client/public/uploads/${name}`, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New directory successfully created.")
    }
  })
  file.mv(`${__dirname}/client/public/uploads/${name}/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    if (file.name.split('.')[1] !== 'mp4') {
      fs.rename(`./client/public/uploads/${name}/${file.name}`, `./client/public/uploads/${name}/picture.jpg`, function (err) {
        if (err) console.log('ERROR: ' + err);
      });
    }
    else {
      fs.rename(`./client/public/uploads/${name}/${file.name}`, `./client/public/uploads/${name}/video.mp4`, function (err) {
        if (err) console.log('ERROR: ' + err);
      });
    }
  });
});

app.post('/uploadreels',(req,res)=>{
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  if (req.body === null) {
    return res.status(400).json({ msg: 'no name' })
  };
  const file = req.files.reels;
  const name = req.body.title
  const email = req.body.email
  const key = req.body.key
  const fs = require("fs")
  file.mv(`${__dirname}/client/public/uploads/${email}/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    if (file.name.split('.')[1] !== 'mp4') {
      fs.rename(`./client/public/uploads/${email}/${file.name}`, `./client/public/uploads/${email}/${key}.mp3`, function (err) {
        if (err) console.log('ERROR: ' + err);
        res.json({ key: key, filePath: `/uploads/${file.name}` });
      });
    }
    else{
    fs.rename(`./client/public/uploads/${email}/${file.name}`, `./client/public/uploads/${email}/${key}.mp4`, function (err) {
      if (err) console.log('ERROR: ' + err);
      res.json({ key: key, filePath: `/uploads/${file.name}` });
    });
  }

  })
})
const userRouter = require('./routes/User')
app.use('/user', userRouter)
// app.use(passport.initialize());
app.listen(5000, () => console.log('Server Started...'));
