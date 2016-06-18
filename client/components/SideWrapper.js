import React from 'react';

const SideWrapper = (props) => <div className="side-container">{props.children}</div>;

SideWrapper.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default SideWrapper;
