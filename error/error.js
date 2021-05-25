const error = {
  params: (current, add) => {
    if (current === undefined || add === undefined) {
      throw new Error('Falta argumentos!')
    }

    if (typeof current !== 'string' || typeof add !== 'string') {
      throw new Error('Não é uma String')
    }
  },
  incorrectDiff: (result) => {
    if (isNaN(result) || result === 'Invalid date') {
      throw new Error('Tempo invalido!')
    }
  },
  incorrectAdd: (result) => {
    if (result === 'Invalid date') {
      throw new Error('Tempo invalido!')
    }
  },
}

module.exports = error
