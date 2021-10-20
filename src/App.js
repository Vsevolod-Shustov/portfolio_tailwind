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
      <div id={styles.app} className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:flex-wrap">
        <Header />
        <Main />
        <Side />
        <Footer />
      </div>
    )
  }
}

export default App;
