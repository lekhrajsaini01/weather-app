
import react from 'react';
import './Search.css';
import {FormControl} from 'react-bootstrap';

function Search() {
  return (
    <div className="Search-div">
        <FormControl
        type="search"
        placeholder="Search Location"
        className="Search"

        />

        
    </div>
  );

}

export default Search;
