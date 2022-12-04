const router = require('express').Router();
let Health = require('../models/health.model');


//home
router.route('/api').get((req, res) => {

    Health.find()
        .then(health => res.json(health))
        .catch(err => res.status(400).json('Error : ' + err));

});

//Add
router.route('/api/add').post((req, res) => {

    const fullname = req.body.fullname
    const temperature = req.body.temperature
    const email = req.body.email
    const phonenumber = req.body.phonenumber

    const newHealthDeclaration = new Health({fullname, temperature, email, phonenumber})

    newHealthDeclaration.save()
        .then(() => res.json('New Record added'))
        .catch(err => res.status(400).json('Error : ' + err));

});

//Details
router.route('/api/:id').get((req, res) => {
    Health.findById(req.params.id)
        .then(health => res.json(health))
        .catch(err => res.status(400).json('Error : ' + err))
});

//Delete
router.route('/api/:id').delete((req, res) => {
    Health.findByIdAndDelete(req.params.id)
        .then(() => res.json('Record was deleted'))
        .catch(err => res.status(400).json('Error : ' + err))
});

//Update
router.route('/api/update/:id').post((req, res) => {

    Health.findById((req.params.id))
    .then(health => {
        health.fullname = req.body.fullname
        health.temperature = req.body.temperature
        health.email = req.body.email
        health.phonenumber = req.body.phonenumber
    
        health.save()
            .then(() => res.json('Record updated'))
            .catch(err => res.status(400).json('Error : ' + err));
    })
    .catch(err => res.status(400).json('Error : ' + err));

});

module.exports = router;
