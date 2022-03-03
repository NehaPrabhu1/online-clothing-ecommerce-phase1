const express = require('express');
const router = express.Router();

const delivery = require('./delivery.db');

//postDeliveryAddressOfOrder
router.post("/delivery/:id",delivery.postDeliveryAddressOfOrder);

//getDeliveryAddressOfOrder
router.get("/delivery/:id",delivery.getDeliveryAddressOfOrder);
module.exports = router;