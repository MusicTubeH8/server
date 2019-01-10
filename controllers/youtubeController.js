const axios = require("axios")

module.exports = {
  list: function(req, res) {
    let params = req.params.q
    axios({
      method:'get',
      url:`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${params}&key=AIzaSyAJO81eaEeJ0CqEPrsiKTGtNLJ8n5bPTj4`
    })
    .then((response) => {
      res.status(200).json(response.data)
    })
    .catch((err) =>{
      res.status(400).json({err: err.response})
    })
  }
}