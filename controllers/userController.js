const axios = require('axios');
const jwt = require('../helpers/jsonwebtoken');

module.exports = {
    googleSignIn: function(req, res) {
      console.log(req.body)
      axios({
        method: 'GET',
        url: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.google_access_token}`
      })
      .then(({ data }) => {
        let token = jwt.createToken(data.name, data.email)
        res.status(200).json(token)
      })
      .catch((err) => {
        res.status(400).json({err: err.message})
      });
    }
}