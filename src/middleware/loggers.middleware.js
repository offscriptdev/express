// optional logging functions
function headers(req, res, next) {
    console.log('ORIGIN: \n' + req.headers.origin);
    console.log('HEADERS: \n' + JSON.stringify(req.headers, null, 2));
    console.log('BODY: \n' + JSON.stringify(req.body, null, 2));
    next();
}

export { headers }