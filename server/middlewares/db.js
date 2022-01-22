const config = require("../config")
const fetch = require("node-fetch")

let app = {
	admin: () => {
		return await(
			await fetch(mHasuraGraphqlUrl, {
				method: "POST",
				headers: {
					"x-hasura-admin-secret": config.hasura.admin_secret,
				},
				body: JSON.stringify({
					query: query,
					variables: variables,
				}),
			})
		).json()
	},
}
