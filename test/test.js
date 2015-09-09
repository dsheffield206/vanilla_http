'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
require(__dirname + '/../http_server');


// Time Test
describe('time test', function() {
    it('should return the current time of the server', function(done) {
        chai.request('localhost:3000')
            .get('/greet/name')
            .end(function(err, res){
                expect(err).to.eql(null);
                expect(res.status).to.eql(200);
                expect(res.text).to.eql('name');
                done();
            });
    });
});

// Greet Name Test
describe('greet name test', function() {
    it('should respond to greet with the name given', function() {
        // test
    });
});

// Greet JSON Test
describe('POST to JSON test', function() {
    it('should post name to JSON object', function() {
        // test
    });
});
