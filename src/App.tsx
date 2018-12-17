import * as React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import Applist from './container/Applist'
import RecomApp from './container/RecomApp'
import SearchBar from "./container/SearchBar";
import {IApp} from'./model'

interface IAppState{
  applist:IApp[]
}

class App extends React.Component <{},IAppState>{
  public render() {
    // tslint:disable-next-line:no-console
    
    return <div className="App">
        <div>
          <SearchBar />
          <h1>Recommendation</h1>
          <RecomApp />
          <h1>Top List</h1>
          <Applist />
        </div>
      </div>;
  }

}

export default App;
