const { config } = require('../config');

function cacheResponse(res, seconds) {
     // esta funcionalidad se ejecuta unicamente si NOs estamos en modo dev.-
     if (!config.dev) {
          res.set('Cache-control', `public, max-age=${seconds}`)
     }
}

module.exports = cacheResponse;