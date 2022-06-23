const router = require('express').Router()
const { PrismaClient } = require("@prisma/client")
const { json } = require('express')

const { post } = new PrismaClient()


router.get('/', async (req, res) => {
	const posts = await post.findMany({
		select: {
			title: true,
			post: true,
			created_at: true,
			updated_at: true,
			user: true,
		}
	})

	res.json(posts);
})


router.post('/', async (req, res) => {
	const newPost = await post.create({
		data: req.body
	})

	res.json(newPost);
})


module.exports = router;
