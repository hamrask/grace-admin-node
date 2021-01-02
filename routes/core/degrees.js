const router = require('express').Router();
const degrees = require('../../models/degrees');



// save degree 
router.post('/',async (req, res) => {
    try {
        const data = new degrees(req.body);
        const response = await data.save();
        return res.status(200).json(response);
    } catch(error) {
        return res.status(500).json(error);
    }
});
// get all degrees
router.get('/', (req, res) => {
    try {
        degrees.find()
        .exec()
        .then(x => {
            return res.status(200).json(x);
        })
        .error(x => {
            return res.status(500).json(x);
        })
    } catch(error) {
        return res.status(500).json(error);
    }
});
// get degree by id
router.get('/:degreeId', (req, res) => {
    try {
        const degreeId = req.params.degreeId;
        degrees.findById(degreeId)
        .exec()
        .then(x => {
            return res.status(200).json(x);
        })
        .error(x => {
            return res.status(500).json(x);
        })
    } catch(error) {
        return res.status(500).json(error);
    }
});
