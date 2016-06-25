import React from 'react';
import gear from './gear.svg';
import cssModules from 'react-css-modules';
import styles from './menu-settings.scss';


function MenuSettings(props) {
  return (
    <li styleName="menu-settings">
      <div>
        {props.notification ? <span styleName="notification"></span> : ''}
        <img alt="menu-settings" src={gear} />
      </div>
    </li>
  );
}


MenuSettings.propTypes = {
  notification: React.PropTypes.bool,
};


export default cssModules(MenuSettings, styles);
