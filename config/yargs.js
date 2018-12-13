const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea del listado', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}