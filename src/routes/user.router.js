const { getAll, create, deleteUser, getOne, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
    .get(getAll)
    .post(create);

    userRouter.route('/:id')
    .get(getOne)
    .put(update)
    .delete(deleteUser)

module.exports = userRouter ;