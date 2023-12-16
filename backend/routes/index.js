const router = require("express").Router();
const ListController = require("../controllers/ListController");

router.get('/', ListController.getMyLists);
router.post('/create/list', ListController.createList);

module.exports = router;