
import './Search.css';
import {FormControl} from 'react-bootstrap';
import Sicon from './Image/loupe.png';
import Pin from './Image/pin.png';

function Search() {
  return (
    <div className="Search-div">
        <FormControl
        type="search"
        className="Search"

        />
        
        <img src={Pin} className="Pin"/>
        <img src={Sicon} className="Sicon"/>

        
    </div>
  );

}

export default Search;
