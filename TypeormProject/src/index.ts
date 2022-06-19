import { createConnection } from "typeorm"



const main = async () => {
	const connection = await createConnection({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgre',
		password: undefined,
		database: 'typeorm'
	})
}
