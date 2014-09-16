module.exports = function(API) {

  describe('Non-existent end-point', function() {

    it('Should return 404', function(done) {
      API.get('/failing')
      .expect(404)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.message.should.be.a('string').and.equal('Not found!');

        done();

      });
    });

  });

}
