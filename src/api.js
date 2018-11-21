const { Router } = require('express')
const { celebrate, Joi } = require('celebrate')
const passport = require('passport')
require('./passport')
const user = require('./controllers/user')
const auth = require('./controllers/auth')
const service = require('./controllers/service')

const api = Router()

api.post(
    '/register',
    celebrate({
      body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      })
    }),
    auth.register
  )
  
  api.post(
    '/login',
    celebrate({
      body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
      })
    }),
    auth.login
  )
  
 
api.get('/users', 
        passport.authenticate('jwt', { session: false }),
         user.getAll)

api.get(
  '/users/:id',
  passport.authenticate('jwt', { session: false }),
  celebrate({
    params: {
      id: Joi.string().required()
    }
  }),
  user.getById
)

api.patch(
  '/users/:id',
  passport.authenticate('jwt', { session: false }),
  celebrate({
    params: {
      id: Joi.string().required()
    },
    body: Joi.object().keys({
      email: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
    })
  }),
  user.update
)

api.post('/services', 
  passport.authenticate('jwt', { session: false }), 
  service.add
)
api.get('/services', 
    passport.authenticate('jwt', { session: false }),
    service.getAll
)

api.get(
  '/services/:id',
  passport.authenticate('jwt', { session: false }),
  celebrate({
    params: {
      id: Joi.string().required()
    }
  }),
  service.getById
)

api.patch(
  '/services/:id',
  passport.authenticate('jwt', { session: false }),
  celebrate({
    params: {
      id: Joi.string().required()
    },
    body: Joi.object().keys({
      email: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
    })
  }),
  service.update
)




module.exports = api