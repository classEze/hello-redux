import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { store } from './store';


class App extends Component {
  
  render() {
    return <HelloWorld tech={store.getState()}/>;
  }
}
export default App;
