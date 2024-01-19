const DefaultsRepository = require("../repository/DefaultsRepository");

module.exports = class DefaultsService {
	constructor() {
		this._repository = new DefaultsRepository();
	}

	async GetAllDefaultData() {
		const response = await this._repository.GetAllDefaultData();

		return response;
	}
};
