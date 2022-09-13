import * as assert from "assert";
import axios from "axios";
import app from '../app.js'
let server;

before(done => {
    server = app.listen(3001, done);
})

describe('Root domain test', () => {
    it('GET response should be "hello world" in json', async () => {
        let response = await axios.get('http://localhost:3001/')
        let testKey;
        Object.keys(response.data).forEach(key => {
            if (key === "hello") testKey = key;
        })
        assert.equal(testKey, 'hello')
        assert.equal(response.data[testKey], 'world')
    });
});

after(done => {
    server.close(done);
})