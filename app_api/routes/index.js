const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
.route('/trips')
.get(tripsController.tripsList) //GET method routes tripsList
.post(tripsController.tripsAddTrip);

router
.route('/trips/:tripCode')
.get(tripsController.tripsFindByCode) //Get method routes tripsFindByCode
.put(tripsController.tripsUpdateTrip);

module.exports = router;
