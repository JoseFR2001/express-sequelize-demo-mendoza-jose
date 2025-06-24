import { Router } from 'express'
import {
    createUser,
    getAllUser,
    getUserByID,
    updateUser,
    deleteUser
} from '../controller/user.controller.js'

const userRouter = Router();

userRouter.post('/',createUser)
userRouter.get('/',getAllUser);
userRouter.get('/:id', getUserByID)
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;