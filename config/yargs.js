const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de miltiplicar', opts)
    .command('listar', 'Imprime en consola la tabla de miltiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}