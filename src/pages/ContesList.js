import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trophy from './maintrophy.jpg'
import './contest.css'
function ContestList() {
  return (
    <>
    <Container fluid>
    <Row className='trophy'>
        <Col></Col>
        <Col>
        <img src={trophy}></img>
        <h1>LeedCode Contest</h1>
        <p>contest every week complete and see your ranking</p>
        </Col>
        <Col>
        </Col>
    </Row>
    
      </Container>
   
    </>
  );
}

export default ContestList;