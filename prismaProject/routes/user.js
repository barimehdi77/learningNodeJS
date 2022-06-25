const router = require("express").Router();
const { PrismaClient } = require("@prisma/client")

const { user } = new PrismaClient()


router.get('/', async (req, res) => {
	const users = await user.findMany({
		select: {
			id: true,
			username: true,
			posts: true
		}
	})

	res.json(users);
})

router.post('/', async (req, res) => {
	const NewUser = await user.create({
		data: req.body,
	});

	res.json(NewUser);
})


module.exports = router;
