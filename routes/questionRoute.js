/*
  todo.js -- Router for the ToDoList
*/
const express = require('express');
const router = express.Router();
const Question = require('../models/question')



// get the value associated to the key
router.get('/',
  async (req, res, next) => {
    try {
      res.locals.questions = await Question.find({});
      res.render('questionPage2'); // code goes here, accessing database and ending with res.render or res.redirect ....
        } catch(err) {
            console.log('Error in question')
            console.dir(err)
            next(err)
        }
      //res.locals.items = await Question.find({userId:req.user._id})
});

/* add the value in the body to the list associated to the key */
router.post('/',
  async (req, res, next) => {
      const question = new Question(
        {questionString:req.body.questionPosted,
         createdAt: new Date(),
         answered: false,
         questionID: req.questionID,
         userId: req.userId
        })
      await question.save();
      res.redirect('/q')
});

router.get('/remove/',
  async (req, res, next) => {
    try {
      console.log("inside /q/remove/:questionID");
      await Question.remove({questionID:req.params.questionID});
      res.redirect('/q')
    }catch(err){
      next(err)
    }
});

/*
router.get('/makeComplete/:itemId',
  isLoggedIn,
  async (req, res, next) => {
      console.log("inside /todo/makeComplete/:itemId")
      const todo = await ToDoItem.findOne({_id:req.params.itemId});
      todo.completed = true;
      await todo.save()
      //res.locals.todo = todo
      //res.render('completionConfirm')
      res.redirect('/todo')
});

router.get('/switchComplete/:itemId',
  isLoggedIn,
  async (req, res, next) => {
      console.log("inside /todo/switchComplete/:itemId")
      const todo = await ToDoItem.findOne({_id:req.params.itemId});
      todo.completed = !todo.completed;
      await todo.save()
      //res.locals.todo = todo
      //res.render('completionConfirm')
      res.redirect('/todo')
});


*/


module.exports = router;
