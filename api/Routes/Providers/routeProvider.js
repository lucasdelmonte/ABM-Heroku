const express = require('express');
const router = express.Router();
const ProviderController = require('../../Controllers/controllerProviders');

router.get('/all', ProviderController.getAllProviders);
router.get('/:providerId', ProviderController.searchById);
router.get(
    '/firstname/:providerFirstName',
    ProviderController.searchByfirstName
);
router.get(
    '/lastname/:providerLastName',
    ProviderController.searchBylastName
);
router.get('/email/:providerEmail', ProviderController.searchByEmail);
router.put('/:providerId', ProviderController.updateProvider);
router.post('/', ProviderController.addProvider);
router.delete('/:providerId', ProviderController.deleteProvider);

module.exports = router