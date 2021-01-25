
import './DayScroll.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sun from './Image/sun.png';
import Cloudy from './Image/sun.svg';
import Rainy from './Image/rain.svg';


function DayScroll() {
  return (
    <Container fluid className="DayScroll">
        <Row className="Scroll">
             <Col className="Day">
                <p className="P1">Fri</p>
                <p className="P2">28 19</p>
                <img src={Sun} className="Sun"/>
                <p className="P3">Sunny</p>
             </Col>
             <Col className="Day">
                <p className="P1">Sat</p>
                <p className="P2">28 19</p>
                <img src={Sun} className="Sun"/>
                <p className="P3">Sunny</p>
             </Col>
             <Col className="Day">
                <p className="P1">Sun</p>
                <p className="P2">28 19</p>
                <img src={Cloudy} className="Sun"/>
                <p className="P3">Cloudy</p>
             </Col>
             <Col className="Day">
                <p className="P1">Mon</p>
                <p className="P2">28 19</p>
                <img src={Cloudy} className="Sun"/>
                <p className="P3">Cloudy</p>
             </Col>
             <Col className="Day">
                <p className="P1">Tue</p>
                <p className="P2">28 19</p>
                <img src={Rainy} className="Sun"/>
                <p className="P3">Sunny</p>
             </Col>
        </Row>
    
    </Container>
   
  );
}

export default DayScroll;