const router = require('express').Router();
const addressController = require('../controller/address-controller');

router.post('/', addressController.createOne);

router.get('/', addressController.findAll)

router.get('/:id', addressController.findById);

router.get('/name/:value', addressController.findByAnyField);

router.get('/:name/:place', addressController.findByAny2Field);

router.patch('/:id', addressController.addNewField);

router.put('/', addressController.updateOne);

router.put('/all', addressController.updateAll);

router.delete('/:id', addressController.deleteOne);

router.delete('/', addressController.deleteAll);

module.exports = router;