import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default function Popup(props) {
  let timeout = 300;
  let animationType = 'ease-out';
  if (props && props.className.endsWith('__full')) {
    timeout = 1000;
    animationType = 'ease-in-out';
  }
  const timeoutSeconds = timeout / 1000.0;
  const style = {
    transition: `width ${timeoutSeconds}s ${animationType}`,
  };
  return (
    <ReactCSSTransitionGroup
      transitionName="popup"
      transitionAppear
      transitionAppearTimeout={10}
      transitionEnterTimeout={timeout}
      transitionLeaveTimeout={timeout}
    >
      <div className={props.className} style={style}>
        <div className="disable">x</div>
        <div className="items">
          {props.children}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}


Popup.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};
