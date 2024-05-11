module.exports.handleBasicErrorMW = async (err, req, res, next) => {
	if (err === 'basic error') {
		res.send(`ERROR : ${err}`);
	} else {
		next(err);
	}
};

module.exports.handleEpicErrorMW = async (err, req, res, next) => {
	res.send(`ERROR !!!!!!!!!!!3413132: ${err}`);
};