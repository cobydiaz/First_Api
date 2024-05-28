exports.success = function (req, res, msj, status){
    const statusCode = status || 200;
    res.status(statusCode).send({
        error: false,
        status: statusCode ,
        body: msj || ''
    })
}

exports.error = function (req, res, msj, status){
    const statusCode = status || 500;
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: msj || 'Error interno'
    })
}

