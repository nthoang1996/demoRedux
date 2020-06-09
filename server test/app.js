const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
var cors = require('cors')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 8080; // set our port
// ROUTES FOR OUR API
// =============================================================================
const router = express.Router(); // get an instance of the express Router

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults
// db.defaults({ posts: [], user: {} })
//     .write()

// Add a post
// db.get('posts')
//     .push({ id: 1, title: 'lowdb is awesome' })
//     .write()

// Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//     .write()

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/:word', function(req, res) {
//     let word = db.get('words').value()[req.params.word];
//     if (word == null) {
//         res.status(200).json({ error: 'Not found' });
//     } else {
//         res.status(200).json({ result: db.get('words').value()[req.params.word]['en'] });
//     }
// });

router.route('/').get(function(req, res){
    const task = db.get('task').value();
    res.status(200).json({message: "Success", data : task})
})
.post(function(req, res){
    const task = db.get('task').value();
    const id = task[task.length-1].id + 1;
    console.log(req.body);
    db.get('task')
        .push({ id: id, ...req.body })
        .write()
    res.status(200).json({message: "Success", id : id})
})

router.route('/:id').put(function(req, res){
  const task =  db.get('task')
  .find({id: parseInt(req.params.id)})
  .assign(req.body) // or .defaults depending on what you want to do
  .write();
  res.status(200).json({message: "Success"})
})
.delete(function(req, res){
    const task =  db.get('task')
    .remove(task => task.id == req.params.id)
    .write()
    console.log(task)
    res.status(200).json({message: "Success"})
})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/task', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);