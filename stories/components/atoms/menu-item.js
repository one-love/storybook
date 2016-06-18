import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import styles from './menu-item.scss';


function MenuItem(props) {
  let styleName = 'item';
  if (props.active === 'yes') {
    styleName += '-active';
  }
  return (
    <li styleName={styleName}>
      <Link to={props.link ? props.link : ''}>{props.name ? props.name : 'Item'}</Link>
    </li>
  );
}


MenuItem.propTypes = {
  active: React.PropTypes.string,
  link: React.PropTypes.string,
  name: React.PropTypes.string,
};


export default cssModules(MenuItem, styles);
