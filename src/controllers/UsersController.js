const knex = require('../database')

exports.create = async (req, res, next) => {
  try {
    const { username } = req.body
    await knex('users').insert({ username })
    return res.status(201).send({ username })
  } catch (e) {
    return next(e)
  }
}

exports.read = async (req, res, next) => {
  try {
    const { id } = req.params
    const [user] = await knex('users').where({ id })

    if (!user) {
      throw new Error('User not found')
    }

    return res.send(user)
  } catch (e) {
    return next(e)
  }
}
