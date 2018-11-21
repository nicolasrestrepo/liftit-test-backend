const Service = require('../models/service')
const _ = require('lodash')



async function add (req, res) {
    const data = req.body
    console.log('data', data);
    try {
      const service = await new Service(data).save()
      return res.status(200).send({ service })
    } catch (error) {
      console.error('error', error)
      return res.status(500).send({ error, message: 'internal server error' })
    }
  }

async function getAll (req, res) {
  const query = req.query
  try {
    const services = await Service.find(query)
    console.log('services', services);
    return res.status(200).send({ services })
  } catch (error) {
    console.error('error', error)
    return res.status(500).send({ message: 'internal server error' })
  }
}

async function getById (req, res) {
  const { id } = req.params

  try {
    const issue = await User.findOne({ _id: id })
    if (!user) {
      return res.status(404).send({ message: 'issue not found' })
    }
    return res.status(200).send({ issue })
  } catch (error) {
    console.error('error', error)
    return res.status(500).send({ message: 'internal server error' })
  }
}


async function update (req, res) {
  const data = req.body
  const { id } = req.params

  try {
    const issue = await User.findOneAndUpdate({ _id: id }, data, { new: true })
    if (!user) {
      return res.status(404).send({ message: 'user not found' })
    }
    return res.status(200).send({ issue })
  } catch (error) {
    console.error('error', error)
    return res.status(500).send({ error, message: 'internal server error' })
  }
}

module.exports = {
  add,
  getById,
  getAll,
  update
}
