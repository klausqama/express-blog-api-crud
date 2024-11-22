const express = require('express');
const posts = require('../data/posts');
const router = express.Router();
const postController = require('../controllers/postController')
const idToInt = require('../middlewares/idToIntMiddleware')

// Rotte posts
//index
router.get('/', postController.index);

//show
router.get('/:id',idToInt, postController.show);

//store
router.post('/', postController.store);

//update
router.put('/:id',postController.update);

//modify
router.patch('/:id',postController.modify);
    
//destroy
router.delete('/:id', postController.destroy);



module.exports = router;