import react from 'react';
import './Home.css';
import DayScroll from './DayScroll';
import Search from './Search';
import {Container,} from 'react-bootstrap';
import Climate from './Climate';

function Home() {
  return (
    
        <Container fluid className="Home">
            <Search/>
            <DayScroll/>
            <Climate/>
        </Container>
    
  );
}

export default Home;