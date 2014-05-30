// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    development: {
        url: 'http://lim.io',

        database: {
            client: 'postgres',
            connection: {
              host: process.env.POSTGRES_HOST,
              user: process.env.POSTGRES_USER,
              password: process.env.POSTGRES_PASS,
              database: process.env.POSTGRES_DB,
              port: '5432'
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: 'http://lim.io',

        mail: {
            transport: 'SMTP',
            host: 'smtp.mandrillapp.com',
            options: {
              service: 'Mandrill',
              auth: {
                user: process.env.MANDRILL_USERNAME,
                pass: process.env.MANDRILL_APIKEY
              }
            }
          },

        database: {
            client: 'postgres',
            connection: {
              host: process.env.POSTGRES_HOST,
              user: process.env.POSTGRES_USER,
              password: process.env.POSTGRES_PASS,
              database: process.env.POSTGRES_DB,
              port: '5432'
            },
            debug: false
        },
        server: {
          host: '0.0.0.0',
          port: process.env.PORT
        }
    },

    // ### Testing
    // Used when developing Ghost to run tests and check the health of Ghost
    // Uses a different port number
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through GitHub
    'travis-sqlite3': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-travis.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through GitHub
    'travis-mysql': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'travis',
                password : '',
                database : 'ghost_travis',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    },

    // ### Travis
    // Automated testing run through GitHub
    'travis-pg': {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'pg',
            connection: {
                host     : '127.0.0.1',
                user     : 'postgres',
                password : '',
                database : 'ghost_travis',
                charset  : 'utf8'
            }
        },
        server: {
            host: '127.0.0.1',
            port: '2369'
        }
    }
};

// Export config
module.exports = config;
