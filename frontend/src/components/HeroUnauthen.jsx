import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function HeroUnauthen() {
  return (
    <>
    <div className='hero'>

    
      <Container fluid="md">
        <Row>
          <Col>
              <div className='text-white' style={{ paddingTop: '250px', minHeight: '100vh'}}>
                <h1 className='display-3 fw-medium'>Tinig ng baryo</h1>
                <p className='fs-4'>
                  Ang Tinig ng Baryo ay ang inyong bagong online bulletin board, ang modernong bersyon ng ating |
                  lumang "village board." Ito ay nilikha upang pag-isahin ang ating komunidad at gawing mas madali ang
                  pagbabahagi ng impormasyon, pag-uulat ng mga isyu, at pagtutulungan sa ating baryo.
                </p>
                <Button variant="primary">Log in / Sign Up</Button>
              
              </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default HeroUnauthen
