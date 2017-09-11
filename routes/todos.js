var express     =     require('express'),
    router      =     express.Router(),
    todos       =     require('../models/todos');
router.get('/', function(req, res, next){
  res.render('todos', {title: 'Te Doen', todos: todos});
});
module.exports = router;
