const express = require('express');
const Doctor = require('../../models/doctor');
const router = express.Router();


// add a doctor
router.post('/',async (req, res, next) => {
  const data = new Doctor(req.body);
  try{
    const response = await data.save({validateBeforeSave: true});
    res.json(response);
  } catch(error) {
    res.json(error);
  }
});
// get all doctors
router.get('/', async(req, res) => {
  Doctor.find()
  .exec()
  .then(x => {
    return res.json(x);
  })
  .catch((error) => {
    return res.json(error);
  });
});
// get doctor by id
router.get('/:doctorId', async(req, res) => {
  Doctor.findById(req.params.doctorId)
  .exec()
  .then(x => {
    res.json(x);
  })
  .catch(x => {
    res.json(x);
  });
});

module.exports = router;
