const axios = require('axios');

module.exports = {
    getLyrics: function(req, res) {
        axios({
            method: 'GET',
            url: `https://api.lyrics.ovh/v1/${req.body.artist}/${req.body.title}`
        })
        .then(({ data }) => {
          res.status(200).json(data)
        })
        .catch((err) => {
          res.status(400).json({err: err.message})
        })
    } 
}