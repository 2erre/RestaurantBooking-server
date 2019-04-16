var bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    nome: {
      type: 'string',
      required: true
    },
    cognome: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      minLength: 8,
      required: true
    },
    company: {
      type: 'string',
      required: true
    },

 /*
  toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  */
  },
  beforeCreate: function(ristoratori, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(ristoratori.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          ristoratori.password = hash;
          cb();
        }
      });
    });
  }
};
