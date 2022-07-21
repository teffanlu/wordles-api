var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'docor', 
  api_key: '267314179813991', 
  api_secret: 'lguyr2RZRw6mbKBImMnnh0RuzZM' 
});

module.exports = cloudinary;

/*cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) { console.log(result, error); });*/