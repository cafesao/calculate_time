const moment = require('moment')
const error = require('../error/error')

function addTime(current, add) {
  error.params(current, add)
  const result = moment(current, 'HH:mm').add(add, 'hours').format('HH:mm')
  error.incorrectAdd(result)
  return result
}

module.exports = addTime
