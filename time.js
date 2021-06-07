const diffTime = require('./helpers/diffTime')
const addTime = require('./helpers/addTime')

const option = process.argv[2]
const arg1 = process.argv[3]
const arg2 = process.argv[4]

const optionFun = {
  diff: () => console.log(`Tempo restante: ${diffTime(arg1, arg2)}h`),
  add: () => console.log(`${arg1}h + ${arg2}h: ${addTime(arg1, arg2)}h`),
  diff_result: () => console.log(diffTime(arg1, arg2)),
  add_result: () => console.log(addTime(arg1, arg2)),
}

optionFun[option]()
