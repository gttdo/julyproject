import React, {Component} from 'react';
import './css/style.css';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';

// Components
import Signup from './components/Signup';

class App extends Component {
  render(){
    return(
      <div className="container">
        <Header/>
        <Sidebar/>
        <Signup/>
        <Footer/>
      </div>
    )
  }
}

export default App;
