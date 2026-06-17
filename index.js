const bcrypt = require('bcrypt');
const saltRounds = 10;
loginpass = 'aasim';
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }
});

