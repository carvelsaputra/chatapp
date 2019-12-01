//ini teman
const Route = require('./router')

require('./routers/web').router(Route)
require('./routers/api').router(Route)

Route.start()
