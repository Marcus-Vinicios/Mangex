const router = require("express").Router();
const ListController = require("../controllers/ListController");

router.post('/', ListController.createList);

module.exports = router;