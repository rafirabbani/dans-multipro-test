import config from './../config/config'
import app from './express-fullstack'

app.listen(config.port, () =>
console.info('Server started on port %s.', config.port),
);