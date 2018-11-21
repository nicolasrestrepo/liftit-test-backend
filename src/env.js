module.exports = {
    port: process.env.PORT || '3000',
    mongoUrl: process.env.MONGODB_URL || 'mongodb+srv://test:testliftit@liftit-test-l2arg.mongodb.net/liftit',
    jwtSecret: process.env.JWT_SECRET || 'liftit',
  }
  