import logo from './logo.svg';
import './App.css';
import './index.css';
import {Title} from './components/Title'
import { SearchForm } from './components/searchForm';
import React, { Component } from 'react';
import { MoviesList } from './components/MoviesList';
import {Details} from './Pages/Details'

class App extends Component {

  state = { usedSearch: false, results: []}

  _handleResults = (results) => {
    this.setState({results, usedSearch: true})
  }

  _renderResults(){
    return this.state.results.length===0 
    ?  <p>Sorry! Results don't found</p> 
      : <MoviesList movies={this.state.results}/>
      
  }


  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has(`id`)
    if(hasId){
      return < Details/>
    }
    return (
      <div className="App">
        <header className="app-header">
          <Title className="strong">Search Movies</Title>
          <div className='Searchfrom-wrapper'>
            <SearchForm onResults={this._handleResults}/>
          </div>
          {this.state.usedSearch? this._renderResults(): 
          <small>Use the form to search movie</small>}
        </header>
      </div>
    );
  }

  
}

export default App;