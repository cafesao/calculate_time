const diffTime = require('./helpers/diffTime')
const addTime = require('./helpers/addTime')

test('Testando vários tempos diferentes (diffTime)', () => {
  expect(diffTime('12:45', '13:25')).toBe('0:40')
  expect(diffTime('16:00', '19:00')).toBe('3:00')
  expect(diffTime('14:25', '16:42')).toBe('2:17')
  expect(diffTime('17:11', '18:29')).toBe('1:18')
  expect(diffTime('20:23', '23:48')).toBe('3:25')
})

test('Testando vários tempos diferentes (addTime)', () => {
  expect(addTime('12:45', '1')).toBe('13:45')
  expect(addTime('16:00', '2')).toBe('18:00')
  expect(addTime('14:25', '4')).toBe('18:25')
  expect(addTime('17:11', '3')).toBe('20:11')
  expect(addTime('20:23', '2')).toBe('22:23')
})

test('Testando erros (diffTime)', () => {
  expect(() => diffTime('20:98', '23:62')).toThrow('Tempo invalido!')
  expect(() => diffTime('25', '698')).toThrow('Tempo invalido!')
  expect(() => diffTime('25')).toThrow('Falta argumentos!')
  expect(() => diffTime(25, 23)).toThrow('Não é uma String')
})

test('Testando erros (addTime)', () => {
  expect(() => addTime('20:98', '2')).toThrow('Tempo invalido!')
  expect(() => addTime('25')).toThrow('Falta argumentos!')
  expect(() => addTime(25, 23)).toThrow('Não é uma String')
})
