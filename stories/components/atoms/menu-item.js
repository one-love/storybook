import React from 'react';
import { Link } from 'react-router';


export default function MenuItem(props) {
  let className = 'item';
  if (props && props.active === 'yes') {
    className += '-active';
  }
  return (
    <li className={className}>
      <Link to={props.link ? props.link : ''}>{props.name ? props.name : 'Item'}</Link>
    </li>
  );
}


MenuItem.propTypes = {
  active: React.PropTypes.string,
  link: React.PropTypes.string,
  name: React.PropTypes.string,
};
