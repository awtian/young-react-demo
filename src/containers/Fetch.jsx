import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

//actions
import fetchApi from '../actions/fetchApi'

class Fetch extends Component {
  state = {
    heroes: []
  }

  componentDidMount = () => {
    this.props.fetchApi()
    // axios.get('https://api.opendota.com/api/heroStats')
    //   .then(({data}) => {
    //     this.setState({
    //       heroes: data
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })    
  }

  render() {
    return (
      <div>
        {this.props.loading ? <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" /> :
        JSON.stringify(this.props.heroes)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.api
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApi: () => dispatch(fetchApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);
