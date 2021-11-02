const houses = require('./db.json');
let houseNumber = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    }
    //deleteHouse:
    //createHouse:
    //updateHouse:
}