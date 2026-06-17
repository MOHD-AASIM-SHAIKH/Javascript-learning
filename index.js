const bcrypt = require('bcrypt');
const saltRounds = 10;
loginpass = 'aasim';
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.error('Error generating salt:', err);
    return;
  }
});
const password = 'MOHDaasim';
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  console.log('Hashed password:', hash);
  const storedhash = hash;
bcrypt.compare(loginpass,storedhash, (err, result) => {
    if(err){
        console.error('Error comparing password:', err);
        return;
    }
    if(result){
        console.log('Password is correct');
    }else{
        console.log('Password is incorrect');
    }
});

});
