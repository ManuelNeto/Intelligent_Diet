const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
        res.status(200).json({value:"aa"});
});

module.exports = router;
