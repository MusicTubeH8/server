const axios = require('axios')


class TopChartController {
    //mencari top chart lagu global
    static getTopTracks(req, res) {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=5&api_key=e63c4bed1b8261946762b12f7a31913b&format=json')
            .then(response => {
                res.json(response.data.tracks)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    msg : "Internal Server Error"
                })
            })
    }
    //mencari top chart lagu pada sebuah negara
    static getTopTracksCountry(req, res) {
        let country = req.params.country
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&limit=5&country=${country}&api_key=e63c4bed1b8261946762b12f7a31913b&format=json`)
            .then(response => {
                res.json(response.data.tracks)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    msg : "Internal Server Error"
                })
            })
    }
}


module.exports = TopChartController