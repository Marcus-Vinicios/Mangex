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

    if (!theme || theme.length < 1) {
      res.status(422).json({ message: "É necessário no minimo 1 item na lista" });
      return;
    }

    try {
      await list.save();
      res.status(200).json({ data: list });
    } catch (error) {
      res.status(401).json({ message: error });
      return;
    }
  }
}