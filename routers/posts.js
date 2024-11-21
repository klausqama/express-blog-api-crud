const express = require('express');
const posts = require('../immagini_e_posts/posts');
const router = express.Router();
const postController = require('../controllers/postController')

// Rotte posts
//index
router.get('/', postController.index);

//show
router.get('/:id', postController.show);

//store
router.post('/', postController.store);

//update
router.put('/:id',postController.update);

//modify
router.patch('/:id',postController.modify);
    
//destroy
router.delete('/:id', postController.destroy);



module.exports = router;