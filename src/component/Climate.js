import './Climate.css';
import {Container,} from 'react-bootstrap';
import RegularGraph from './RegularGraph'
import DayGraph from './DayGraph';
import PH from './P-H'
import Sun from './Image/sun.png';

function Climate() {
  return (
    <Container fluid className="Climate">
        {/* Temp. */}
    <div className="Temp">
    <h1 className="H1">26 C</h1><img src={Sun} className="Sun1"/>
    </div>
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
