import './PH.css';
import {Col, Container, FormControl, Row} from 'react-bootstrap';

function PH() {
  return (
    <Container fluid className="P-H">
        <Row>
            <Col className="Ph-Box"  >
                <p className="P4">Pressure</p>
                <p className="P5">1013 hpa</p>
            </Col>
            <Col className="Ph-Box">
                <p className="P4">Humidity</p>
                <p className="P5">93%</p>
            </Col>
        </Row>
    </Container>
  );

}

export default PH;
