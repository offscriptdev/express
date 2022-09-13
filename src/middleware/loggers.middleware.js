// optional logging functions
const headers = (req, res, next) => {
    console.log('HEADERS: \n' + JSON.stringify(req.headers, null, 2));
    next();
}

const origin = (req, res, next) => {
    console.log('ORIGIN: \n' + req.headers.origin);
    next();
}

const body = (req, res, next) => {
    console.log('BODY: \n' + JSON.stringify(req.body, null, 2));
    next();
}

export { headers, origin, body }