// controller functions for web routes
function sendJson(req, res) {
    res.json({
        'path': '/'
    });
}

function send404(req, res) {
    res.status(404).json({
        error: "Not Found",
    });
}

export { sendJson , send404 }