import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <footer id='contact' style={{backgroundColor: '#2e2d2d'}}>
        <Container>

          <h1 className="text-secondary text-center display-3 fw-bold">Contact us</h1>
          <p className='text-center text-secondary'>Using</p>
          <div className="text-secondary d-flex gap-4 justify-content-center" style={{minHeight: '70vh'}}>
            
            <FontAwesomeIcon className='fs-1' icon={faFacebookMessenger} />
            <FontAwesomeIcon className='fs-1' icon={faPhone} />
            <FontAwesomeIcon className='fs-1' icon={faEnvelope} />
            <FontAwesomeIcon className='fs-1' icon={faYoutube} />
          
            <br />

          </div>

          
        </Container>
        
      </footer>
    </>
  )
}

export default Footer
