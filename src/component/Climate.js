import './Climate.css';
import {Container,} from 'react-bootstrap';
import RegularGraph from './RegularGraph'
import DayGraph from './DayGraph';
import PH from './P-H'

function Climate() {
  return (
    <Container fluid className="Climate">
        {/* Temp. */}
    <h1>24 C</h1>
    {/* Graph for arround days */}
    <RegularGraph/>
    {/* Presure and HUmidity */}
    <PH/>
    {/* Todays Temp. Graph */}
    <DayGraph/>
    </Container>
  );

}

export default Climate;
