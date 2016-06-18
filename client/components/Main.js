import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import store from '../Store';
import SideWrapper from './SideWrapper';
import MainWrapper from './MainWrapper';
import Nav from './Nav';
import RentalSearch from './RentalSearch';

const Main = React.createClass({
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <Nav/>
        <SideWrapper {...this.props}>
          <RentalSearch {...this.props} />
        </SideWrapper>
        <MainWrapper {...this.props}>
            {React.cloneElement(this.props.children, this.props)}
        </MainWrapper>
      </ReactCSSTransitionGroup>
    )
  }
});

export default Main;
