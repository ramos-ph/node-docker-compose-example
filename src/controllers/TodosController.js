const knex = require('../database')

exports.list = async (req, res, next) => {
  try {
    const { user_id, status } = req.query
    const query = knex('todos')
      .where({ user_id })
      .join('users', 'users.id', '=', 'user_id')
      .select('todos.*')

    if (status) {
      query.andWhere('status', status)
    }

    const todos = await query
    return res.send(todos)
  } catch (e) {
    return next(e)
  }
}

exports.create = async (req, res, next) => {
  try {
    const { title, description, user_id } = req.body
    await knex('todos').insert({ user_id, title, description })
    return res.status(201).send({ title })
  } catch (e) {
    return next(e)
  }
}

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, description } = req.body
    await knex('todos').update({ title, description }).where({ id })
    return res.status(204).send()
  } catch (e) {
    return next(e)
  }
}

exports.markAsDone = async (req, res, next) => {
  try {
    const { id } = req.params
    await knex('todos').update({ status: 'COMPLETED' }).where({ id })
    return res.status(204).send()
  } catch (e) {
    return next(e)
  }
}

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params
    await knex('todos').del().where({ id })
    return res.status(204).send()
  } catch (e) {
    return next(e)
  }
}
