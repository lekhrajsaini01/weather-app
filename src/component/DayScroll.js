
import './DayScroll.css';
import { Container, Row, Col } from 'react-bootstrap';

function DayScroll() {
  return (
    <Container fluid className="DayScroll">
        <Row className="Scroll">
             <Col className="Day">
                <p className="P1">Fri</p>
                <p className="P2">28 19</p>
                <img></img>
                <p className="P3">Sunny</p>
             </Col>
             <Col className="Day">
                <p className="P1">Sat</p>
                <p className="P2">28 19</p>
                <img></img>
                <p className="P3">Sunny</p>
             </Col>
             <Col className="Day">
                <p className="P1">Sun</p>
                <p className="P2">28 19</p>
                <img></img>
                <p className="P3">Sunny</p>
             </Col>
             <Col className="Day">
                <p className="P1">Mon</p>
                <p className="P2">28 19</p>
                <img></img>
                <p className="P3">Sunny</p>
             </Col>
             <Col className="Day">
                <p className="P1">Tue</p>
                <p className="P2">28 19</p>
                <img></img>
                <p className="P3">Sunny</p>
             </Col>
        </Row>
    
    </Container>
   
  );
}

export default DayScroll;