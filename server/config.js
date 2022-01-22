let app = {
	hasura: {
		admin_secret: "manoj",
		url: "https://hasura-shopping-database.herokuapp.com/v1/graphql",
	},
	jwt: {
		type: "HS256",
		key: "manoj",
	},
}

module.exports = app
