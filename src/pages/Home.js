import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main.css'
function Home() {
  return (
    <>
    <Container fluid>
    <Row className='first'>
        <Col></Col>
        <Col>
        <div className='col-first'>
     <h1>A New Way to Learn</h1> 
     <p>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
     </div>
        </Col>
      </Row>
      </Container>
    <Container>
      <Row>
        <Col>
        <div className='col'>
        <h3>Start Exploring </h3>
        
        <p>Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career</p>
        </div>
        </Col>
        <Col></Col>
        
      </Row>
      <Row>
        <Col>
        <div className='col'>
        <h3>Questions, Community & Contests</h3>
        <p>Over 3100 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn</p>
        </div>
        </Col>
       
        
    <Col>
    <div className='col'>
    <h3>Companies & Candidates</h3>
    <p>Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.</p>
    </div>
    </Col>
      </Row>
      <Row>
       <Col></Col>

        <Col>
        <div className='col-middle'>
        <h3>Developer</h3>
        <p>We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</p>
      </div>
       </Col>
       <Col></Col>
      </Row>
      <Row>
       <Col></Col>

        <Col>
        <div className='col-middle'>
        <h3>Made with  in SF</h3>
       <p>At LeetCode, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.</p>
       </div>
       </Col>
       <Col></Col>
      </Row>
      <Row>
       <Col></Col>

        <Col>
        <div className='col-middle'>
        <p>If you are passionate about tackling some of the most interesting problems around, we would love to hear from you.</p>
        </div>
     </Col>
       <Col></Col>
      </Row>
    </Container>
    </>
  );
}

export default Home;