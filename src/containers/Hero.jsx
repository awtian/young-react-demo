import React, {Fragment} from 'react';
import {connect} from 'react-redux';

const Hero = (props) => {
  return (
    <Fragment>
      <h1>{props.count}</h1>
      <h2>{props.match.params.name}</h2>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    count: state.count.counter
  }
}


export default connect(mapStateToProps, null)(Hero);
