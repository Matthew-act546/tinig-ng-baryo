import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import howtouse from '../assets/images/background-howtouse.png';
function HowToUse() {
  return (
    <>    
      <div className="" id='howtouse'
            style={{
              backgroundImage: `url(${howtouse})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
            }}>

        
        <Container className='pt-5'>
          <h1 className='text-secondary display-4 fw-medium text-center mb-5'>How to use?</h1>
          <Row>
            <Col lg={6}>
              <Row>
                <Col lg={2} className='m-0 p-0'>
                  <h1 className='text-secondary fw-bold' style={{fontSize: '190px', marginTop: '-40px'}}>1</h1>
                </Col>
                <Col lg={10}>
                <h1 className='text-white'>First</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur ex nesciunt, dignissimos veniam quia reiciendis, deserunt ea necessitatibus sunt quidem aliquam saepe! Est blanditiis natus, eum nesciunt maxime sint!</p>
                </Col>
              </Row>
              
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={2}className='m-0 p-0'>
                  <h1 className='text-secondary fw-bold' style={{fontSize: '190px', marginTop: '-40px', paddingRight: '5px'}}>2</h1>
                </Col>
                <Col lg={10}>
                <h1 className='text-white'>Second</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur ex nesciunt, dignissimos veniam quia reiciendis, deserunt ea necessitatibus sunt quidem aliquam saepe! Est blanditiis natus, eum nesciunt maxime sint!</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={2}className='m-0 p-0'>
                  <h1 className='text-secondary fw-bold' style={{fontSize: '190px', marginTop: '-40px', paddingRight: '5px'}}>3</h1>
                </Col>
                <Col lg={10}>
                <h1 className='text-white'>Third</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur ex nesciunt, dignissimos veniam quia reiciendis, deserunt ea necessitatibus sunt quidem aliquam saepe! Est blanditiis natus, eum nesciunt maxime sint!</p>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={2}className='m-0 p-0'>
                  <h1 className='text-secondary fw-bold' style={{fontSize: '190px', marginTop: '-40px', paddingRight: '5px'}}>4</h1>
                </Col>
                <Col lg={10}>
                  <h1 className='text-white'>Fourth</h1>
                  <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aspernatur ex nesciunt, dignissimos veniam quia reiciendis, deserunt ea necessitatibus sunt quidem aliquam saepe! Est blanditiis natus, eum nesciunt maxime sint!</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HowToUse
