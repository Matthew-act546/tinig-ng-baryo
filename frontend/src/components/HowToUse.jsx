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
                <p className='text-secondary'>Getting started on Tinig ng Baryo is quick and easy. Simply visit the website and click on the “Sign Up” button. You’ll be asked to provide a valid email address and create a secure password. Once registered, you’re ready to take the next step toward becoming part of your community’s voice.</p>
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
                <p className='text-secondary'>To ensure authenticity while maintaining privacy, users must complete a simple identity verification process. This includes submitting a valid form of identification (such as a barangay ID or driver’s license) which will only be used to confirm residency and will not be published on the site.</p>
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
                <p className='text-secondary'>After verification, you can set up your profile. Choose a username that represents you and update your basic information if you wish. While most of your data remains private, your profile helps build trust within the community whenever you engage with others.</p>
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
                  <p className='text-secondary'>Once your profile is set up, you're all set to start sharing! Whether it's reporting an issue, responding to announcements, or posting a lost or found item, you can now contribute to building a better, more connected community—all while staying anonymous if you choose.</p>
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
