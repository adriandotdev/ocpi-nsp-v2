const DefaultsService = require("../services/DefaultsServices");

module.exports = (app) => {
	const service = new DefaultsService();

	app.get("/api/v1/defaults", async (req, res) => {
		try {
			const defaults = await service.GetAllDefaultData();

			return res.status(200).json({ status: 200, data: defaults });
		} catch (err) {}
	});
};
