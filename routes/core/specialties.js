const router = require('express').Router();
const specialty = require('../../models/specialties');



// save specialty 
router.post('/', async(req, res) => {
    try {
        const data = new specialty(req.body);
        const response = await data.save();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
});
// get all specialty
router.get('/', (req, res) => {
    try {
        specialty.find()
            .exec()
            .then(x => {
                return res.status(200).json(x);
            });
    } catch (error) {
        return res.status(500).json(error);
    }
});
// get specialty by filter
router.post('/filter', (req, res) => {
    try {
        specialty.find(req.body)
            .exec()
            .then(x => {
                return res.status(200).json(x);
            });
    } catch (error) {
        return res.status(500).json(error);
    }
});
// get specialty by id
router.get('/:specialtyId', (req, res) => {
    try {
        const specialtyId = req.params.specialtyId;
        specialty.findById(specialtyId)
            .exec()
            .then(x => {
                return res.status(200).json(x);
            });
    } catch (error) {
        return res.status(500).json(error);
    }
});