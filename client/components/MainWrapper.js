import React from 'react';

const MainWrapper = (props) => <section className="main-container">{props.children}</section>;

MainWrapper.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default MainWrapper;
