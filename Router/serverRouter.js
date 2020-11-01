const express = require('express');

const router = express.Router();

const Server_Test = require('./../controller/serverController');

router.route('/api/v1/user/create').post(Server_Test.createServer);

router.route('/api/v1/user/listOnlineServer').get(Server_Test.listOnlineServer);

module.exports = router;