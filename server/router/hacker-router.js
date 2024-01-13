import express from 'express';
import hackerController from "../Controllers/hacker-controller.js";

const HackerRouter = express.Router();

HackerRouter.route("/hackerlist").post(hackerController.createAllHackerList);
HackerRouter.route("/hackerlist").get(hackerController.getAllHackerList);
HackerRouter.route("/hackerlist/:id").get(hackerController.getOneHacker);
HackerRouter.route("/hackerlist/:id").put(hackerController.editHacker);
HackerRouter.route("/hackerlist/:id").delete(hackerController.deleteHacker);

export default HackerRouter