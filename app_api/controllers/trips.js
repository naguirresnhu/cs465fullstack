const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //register model
const Model = mongoose.model('trips');

//GET: /trips - lists all the trips
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripsList = async (req, res) => {
    const q = await Model.find({})
        .exec();

    //uncomment the following line to show results of query
    // on the console
    // console.log(q)
    if (!q) { //database returned no data
        return res
            .status(404)
            .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

//GET: /trips/:tripCode - list a single trip
//Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode})
        .exec();

    //uncomment the following line to show results of query
    // on the console
    // console.log(q)
    if (!q) { //database returned no data
        return res
            .status(404)
            .json(err);
    } else { //return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode,
};
