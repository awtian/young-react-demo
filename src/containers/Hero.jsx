import React, {Fragment} from 'react';

const Hero = (props) => {
  return (
    <Fragment>
      <h2>{props.match.params.name}</h2>
    </Fragment>
  );
}

export default Hero;
