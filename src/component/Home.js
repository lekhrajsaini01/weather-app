import react from 'react';
import './Home.css';
import DayScroll from './DayScroll';
import Search from './Search';
import {Container,} from 'react-bootstrap';

function Home() {
  return (
    
        <Container fluid className="Home">
            <Search/>
            <DayScroll/>
        </Container>
    
  );
}

export default Home;