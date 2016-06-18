import React from 'react';
import cssModules from 'react-css-modules';
import gear from '../../../media/img/gear.svg';
import styles from './menu-settings.scss';


function MenuSettings() {
  return (
    <li styleName="menu-settings">
      <div>
        <img alt="menu-settings" src={gear} />
      </div>
    </li>
  );
}


export default cssModules(MenuSettings, styles);
