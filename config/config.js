module.exports = {
  port: process.env.PORT || 8000,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    username: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'syssecret'
  }
}
