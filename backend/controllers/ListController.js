const List = require("../models/List");

module.exports = class UserController {

  static async getMyLists(req, res) {
    const lists = await List.find().sort('-createdAt')

    res.status(200).json({
      lists: lists,
    })
  }

  static async createList(req, res) {
    const { listTitle, theme } = req.body;
    if (!listTitle) {
      res.status(422).json({ message: "É necessário um titulo para a lista" });
      return;
    }

    const list = new List({
      listTitle: listTitle,
      theme
    });

    try {
      await list.save();
      res.status(200).json({ data: list });
    } catch (error) {
      res.status(401).json({ message: error });
      return;
    }
  }
}