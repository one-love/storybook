import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import gear from '../../../media/img/gear.svg';
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
};


export default CSSModules(MenuItem, styles);
