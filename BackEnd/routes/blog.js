const express = require('express');
const isAuth = require('../middleware/is-auth')
const blogController = require('../controllers/blog');

const router = express.Router();

router.post('/createpost', isAuth.isAuth, blogController.createPosts);
router.get('/posts/:blogId', isAuth.isAuth, blogController.getPost)
router.delete('/posts/delete/:blogId', isAuth.isAuth, blogController.deleteBlog)
router.put('/posts/update/:blogId', isAuth.isAuth, blogController.updateBlog)
router.get('/posts', blogController.getPosts)

module.exports = router