import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import triangle from './../assets/images/about-images/triangleWhite.png';

function About() {
  return (
    <>
      <div className="bg-primarys text-white" style={{ minHeight: '100vh', position: 'relative'}}>
        <Container>
          <Row>
            <Col className='mt-5'>
            <img src={triangle} className='rotate-image rotate-image-1  img-fluid' alt="" />
            <div className='mt-5 ' style={{ border: '1px solid white', height: '200px', width: '400px'}}>

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
        </Container>
      </div>
    </>
  )
}

export default About
