import express from 'express';
import userControllers from '../Controllers/user-controller.js';
import verifyToken from '../middleware/verifyToken.js';
import verifyAdmin from '../middleware/verifyAdmin.js'

const UserRouter = express.Router();

UserRouter.route('/users').post(userControllers.createUser);
UserRouter.route('/users').get(verifyToken, verifyAdmin, userControllers.getAllUsers);
UserRouter.route("/users/:id").get(userControllers.getOneUser);
UserRouter.route("/users/:id").delete(verifyToken, verifyAdmin, userControllers.deleteUser);
UserRouter.route('/users/admin/:email').get(verifyToken, userControllers.getAdmin);
UserRouter.route('/users/admin/:id'). patch(verifyToken,verifyAdmin, userControllers.makeAdmin);




export default UserRouter;