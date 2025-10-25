//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'))

/* Get meals view */
const meals = (req, res,) => {
    res.render('meals', { title: "Travlr ", trips});
}

module.exports = {
    meals
};