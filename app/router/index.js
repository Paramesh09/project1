const apiRoute = require('../router/mainRoute');

const init = (server) => {
    server.use('/api/v1', apiRoute);
}
module.exports = {
    init: init
};