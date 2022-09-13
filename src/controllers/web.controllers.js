// controller functions for web routes
function helloWorld(req, res) {
    res.json({
        'hello': 'world',
    });
}

function send404(req, res) {
    res.status(404).json({
        error: "Not Found",
    });
}

export { helloWorld , send404 }