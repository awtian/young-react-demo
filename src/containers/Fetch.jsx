import React, { Component } from 'react';
import axios from 'axios';

class Fetch extends Component {
  state = {
    heroes: []
  }

  componentDidMount = () => {
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({data}) => {
        this.setState({
          heroes: data
        })
      })    
  }

  render() {
    return (
      <div>
        <h1>this is the fetch page</h1>
        {JSON.stringify(this.state.heroes)}
      </div>
    );
  }
}

export default Fetch;
