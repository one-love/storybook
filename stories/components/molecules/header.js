import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import MenuItem from '../atoms/menu-item';
import MenuSettings from '../atoms/menu-settings';
import styles from './header.scss';


function Header(props) {
  console.log(props);
  return (
    <ul className="o-layout o-list-inline" styleName="header">
      <MenuItem active={props.cluster ? 'yes' : 'no'} link="/clusters" name="Clusters" />
      <MenuItem active={props.service ? 'yes' : 'no'} link="/services" name="Services" />
      <MenuItem active={props.provision ? 'yes' : 'no'} link="/provisions" name="Provisions" />
      <MenuSettings />
    </ul>
  );
}


export default CSSModules(Header, styles);
