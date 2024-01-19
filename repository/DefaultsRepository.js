const mysql = require("../database/mysql");

const SP_GET_DEFAULT_DATA = "call NSP_GET_DEFAULT_DATA()";

module.exports = class DefaultsRepository {
	GetAllDefaultData() {
		return new Promise((resolve, reject) => {
			mysql.query(SP_GET_DEFAULT_DATA, (err, result) => {
				if (err) {
					reject(err);
				}

				resolve(result);
			});
		});
	}
};
