# Calculate Time

## Calcular tempo entre duas durações e adiciona horas.

Para que funcione, tenha o [Node](https://nodejs.org/en/) e o [Yarn](https://yarnpkg.com/) instalado no seu computador.

Você deve executar `yarn time <option> <arg1> <arg2>`

Em _option_, você deve colocar _diff_ ou _add_:

- **diff**: Diferença entre dois times `<TimeStart> <TimeEnd>`
- **add**: Adiciona alguma hora ao time `<TimeStart> <HoursAdd>`

### Exemplos:

`yarn time diff 12:25 13:35` = Tempo restante: 1:10h  
`yarn time diff 13:00 14:00` = Tempo restante: 1:00h

`yarn time add 13:20 1` = 14:20h  
`yarn time add 16:00 2` = 18:00h

Para mais exemplos verifique o arquivo de testes (_time.test.js_)

Para executar os testes, execute o comando `yarn jest`
