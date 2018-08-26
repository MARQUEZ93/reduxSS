import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDY3mv3Elr4lPshOg9vXZfm3ld71YgrgAA";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put it
//on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
