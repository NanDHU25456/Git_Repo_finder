import React, {
  Component
} from 'react';
import Nav from './components/Nav';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;