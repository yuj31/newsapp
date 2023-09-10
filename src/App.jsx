import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      progress:10,
    }
    //this.setProgress = this.setProgress.bind(this);
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} key="general" newsItems={6} country='in' category='general'/>}/>
        <Route path="/business" element={<News setProgress={this.setProgress} key="business" newsItems={6} country='in' category='business'/>}/>
        <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" newsItems={6} country='in' category='entertainment'/>}/>
        <Route path="/general" element={<News setProgress={this.setProgress} key="general" newsItems={6} country='in' category='general'/>}/>
        <Route path="/health" element={<News setProgress={this.setProgress} key="health" newsItems={6} country='in' category='health'/>}/>
        <Route path="/science" element={<News setProgress={this.setProgress} key="science" newsItems={6} country='in' category='science'/>}/>
        <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" newsItems={6} country='in' category='sports'/>}/>
        <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" newsItems={6} country='in' category='technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}

