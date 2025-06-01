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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, mollitia! Sed quidem vitae facere, expedita a dolore perspiciatis sint eligendi explicabo voluptate asperiores atque et soluta, ad quasi quibusdam quo deleniti, eum voluptatem pariatur aspernatur ipsa. Illum modi reprehenderit veritatis, doloremque impedit nam ex delectus! Veniam nesciunt repudiandae totam sequi, dicta ipsa, tempore quidem quo dolor at doloribus praesentium similique accusantium deleniti quibusdam aspernatur. Facere similique animi facilis dolorem asperiores?
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
                <p>Lorem ipsum re, expedita a dolore perspiciatis splicabo voluptate asperiores atque et soluta, ad quasi quibusdam quo deleniti, eum voluptatem pariatur aspernatur ipsa.</p>
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
                <p>Lorem ipsum re, expedita a dolore perspiciatis splicabo voluptate asperiores atque et soluta, ad quasi quibusdam quo deleniti, eum voluptatem pariatur aspernatur ipsa.</p>
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
                <p>Lorem ipsum re, expedita a dolore perspiciatis splicabo voluptate asperiores atque et soluta, ad quasi quibusdam quo deleniti, eum voluptatem pariatur aspernatur ipsa.</p>
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
