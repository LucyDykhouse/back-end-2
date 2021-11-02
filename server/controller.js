const houses = require('./db.json');
//let houseNumber = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    deleteHouse: (req, res) => {
        let houseIndex = houses.findIndex((house) => house.id === +req.params.id);
        houses.splice(houseIndex, 1);
        res.status(200).send(houses);
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;

        let newHouse = {
            id: houses.length + 1,
            address,
            price,
            imageURL
        };

        houses.push(newHouse);
        res.status(200).send(houses);
    },

    updateHouse: (req, res) => {
        let requestID = req.params.id;
        let houseIndex = houses.findIndex((house) => house.id === +requestID);
        if (req.body.type === 'plus') {
            houses[houseIndex].price += 10000;
        } else if (req.body.type === 'minus') {
            houses[houseIndex].price -= 10000;
        }

        res.status(200).send(houses);
    }
}