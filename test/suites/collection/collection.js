module.exports = function(API) {

  describe('/collection', function() {

    it('Should return a collection of items', function(done) {
      API.get('/collection')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);

        res.body.should.be.an('array').and.have.length.of.at.least(1);

        res.body.forEach(function(item) {

          item.should.have.property('id').and.be.a('number');

          item.should.have.property('name').and.be.a('string');

        });

        done();

      });
    });

  });

}
