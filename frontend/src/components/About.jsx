import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import triangle from './../assets/images/about-images/triangleWhite.png';
import rectangle from './../assets/images/about-images/rectangleOrange.png';
import circle from './../assets/images/about-images/circleGreen.png';

function About() {
  return (
    <>
      <div className="bg-primarys text-white" id='about' style={{ minHeight: '100vh', position: 'relative'}}>
        <Container className='pb-5'>
          <Row>
            <Col className='mt-5'>
            <div position='relative' className='text-center'>
              <div className='mt-5 ' style={{ border: '1px solid white', height: '200px', width: '400px'}}>

              </div>
            </div>
            
            </Col>
            <Col className='mt-5'>
              <div>
                <h1 className='display-4 fw-bold'>About us</h1>
                <p>
                  Tinig ng Baryo is an anonymous online forum and freedom wall that gives every community member a voice. It’s a space where people can share their stories, raise concerns, or report local issues—especially those often unheard. Local officials can also use the platform to post announcements, updates, and responses to feedback, helping build a two-way conversation between the public and the government. By encouraging open, honest dialogue, Tinig ng Baryo promotes transparency, accountability, and stronger community engagement. It’s a step toward creating a more responsive and compassionate community for everyone.
                </p>
              </div>
            </Col>
          </Row>

          <div className="text-center d-flex j mt-5 gap-5 justify-content-center" >
            <img src={triangle} className='rotate-image img-fluid' alt="" />
            <img src={rectangle} className='rotate-image img-fluid' alt="" />
            <img src={circle} className='rotate-image img-fluid' alt="" />
            <img src={triangle} className='rotate-image img-fluid' alt="" />
            <img src={rectangle} className='rotate-image img-fluid' alt="" />
            <img src={circle} className='rotate-image img-fluid' alt="" />
          </div>

          <div className='card-unauthenticate ms-auto mt-5'>
            <Row>
              <Col>
                <div className='image-container'>

                </div>
              </Col>
              <Col>
                <h2>Announcement</h2>
                <p>
Tinig ng Baryo isn’t just a place for residents to speak up—it also helps local officials connect with the community. Authorities can share announcements, project updates, advisories, and responses to public concerns, making sure important information reaches people fast.</p>
              </Col>
            </Row>
          </div>

          <div className='card-unauthenticate mt-5'>
            <Row>
              <Col>
                <div className='image-container'>

                </div>
              </Col>
              <Col>
                <h2>Anonymous Reporting</h2>
                <p>Tinig ng Baryo ensures that every user can speak freely without fear of judgment or retaliation. Our anonymity feature allows residents to share their true thoughts, report issues, or voice concerns honestly, knowing their identity remains protected.</p>
              </Col>
            </Row>
          </div>

          <div className='card-unauthenticate ms-auto mt-5'>
            <Row>
              <Col>
                <div className='image-container'>

                </div>
              </Col>
              <Col>
                <h2>Lost & found</h2>
                <p> 
                  Tinig ng Baryo also serves as a helpful tool for reporting lost items or sharing found belongings within the community. Residents can post descriptions of missing personal effects or announce items they’ve found, increasing the chances of quick reunions. This feature strengthens neighborly bonds and encourages a culture of care and cooperation, making the community safer and more connected for everyone.
                </p>
              </Col>
            </Row>
          </div>
          <div className='card-unauthenticate mt-5'>
            <Row>
              <Col>
                <div className='image-container'>

                </div>
              </Col>
              <Col>
                <h2>And many more!</h2>
                <p>Lorem ipsum re, expedita a dolore perspiciatis splicabo voluptate asperiores atque et soluta, ad quasi quibusdam quo deleniti, eum voluptatem pariatur aspernatur ipsa.</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default About
