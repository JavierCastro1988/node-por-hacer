const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiar el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina la tarea del listado por hacer', {
        descripcion,
        borrado: {
            default: true,
            alias: 'b',
            desc: 'Elimina la tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};