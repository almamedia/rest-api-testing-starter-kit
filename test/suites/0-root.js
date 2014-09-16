module.exports = function(API) {

  describe('Root end-point', function() {

    it('Should return a hello world message', function(done) {
      API.get('/')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.message.should.be.a('string').and.equal('Hello World!');

        done();

      });
    });

  });

}
