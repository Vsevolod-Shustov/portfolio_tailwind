import React from 'react';
import Header from './Header';
import Main from './Main';
import Side from './Side';
import Footer from './Footer';

import styles from './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id={styles.app}>
        <Header />
        <Main />
        <Side />
        <Footer />
      </div>
    )
  }
}

export default App;
