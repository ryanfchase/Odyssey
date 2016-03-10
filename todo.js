var express = require('express');
var router = express.Router();
var Item = require('./app/models/item.model');

var todoItems = [
	new Item({
		    name : "fake-board-1", 
		    priority: 5, 
		    description: "the first fake task.",
		    created_at: new Date(),
		    updated_at: new Date(),
		    due_date: new Date(9999, 9, 9, 9, 9, 9, 9),
		    tags: [
		    	"first", 
		    	"yes", 
		    	"doing great"
		    ],
		    activity: [
		    	{
		    		action: "edited", 
		    		time: new Date()
		    	},
		    	{
		    		action: "reviewed",
		    		time: new Date(2016, 3, 7, 0, 0, 0, 0),
		    	}
		    ],
		    subtasks: [
		    	"complete this task",
		    	"complete this subtask",
		    	"go home"
		    ]
		}),
	new Item({
	        name : "fake-board-2", 
		    priority: 7, 
	        description: "the second fake task!!",
	    }),
		new Item({
            name : "fake-board-3", 
		    priority: 9, 
            description: "last fake task~"
    	})
	
];

router.get('/', function(req, res){
	//res.send('hello express!');
	res.render('index', {
		title: 'ITEMS',
		items: todoItems
	});
});

router.post('/add', function(req, res){
	var newItem = new Item({
		name : req.body.name,
		description : req.body.description,
		priority : req.body.priority
	});

	console.log("we POSTed correctly!")
	todoItems.push(newItem);

	/* SAVE TO MONGO - OPTIONAL
	newItem.save(function (err) {
    	if(err) return handleError(err);
        // saved!
    });
    */

	res.redirect('/todo');
});

module.exports = router;


/* OLD ROUTE  */

// router.post('/add', function(req, res){
// 	var newItem = req.body.newItem;

// 	todoItems.push({
// 		id: todoItems.length + 1,
// 		desc: newItem
// 	});

// 	res.redirect('/');
// });