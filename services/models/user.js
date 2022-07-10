const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  username: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});
// pre => before saving uses object to database run and check this password
UserSchema.pre("save", function (next) {
  let user = this;
  if (this.isModified("password") || this.isNew) {
    //this for generate random charachter in this case is 10 char
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
    // in this case to mix reandom char with password
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (password, next) {
  let user = this;
  return bcrypt.compareSync(password, user.password);
};
module.exports = mongoose.model("User", UserSchema);
