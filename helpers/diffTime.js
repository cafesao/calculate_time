const moment = require('moment')
const error = require('../error/error')

function diffTime(start, end) {
  const transform = {
    hour: (momentObj) => Math.floor(momentObj.asHours()),
    minutes: (diffMs) => moment.utc(diffMs).format('mm'),
  }

  error.params(start, end)

  const diffMs = moment(end, 'HH:mm').diff(moment(start, 'HH:mm'))
  const momentObj = moment.duration(diffMs)

  error.incorrectDiff(diffMs)

  return `${transform.hour(momentObj)}:${transform.minutes(diffMs)}`
}

module.exports = diffTime
