import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Header from '../header' 
import Searcher from './searcher';

function Home() {
  return (<Router>
      <Header />
      <Searcher />
    </Router>
  );
}

export default Home;