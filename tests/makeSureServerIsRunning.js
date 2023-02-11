const chai = required('chai')
// import chai from 'chai';
const chaiHttp = required('chai-http')
const app = required('../index')

// configurChai
chai.use(chaiHttp)
chai.should()

describe('Make sure that status is 200', () => {
  it('Describe fn', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
})
