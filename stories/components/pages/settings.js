import React from 'react';
import cssModules from 'react-css-modules';
import { Link } from 'react-router';
import Cluster from './cluster';
import styles from './settings.scss';


function Settings() {
  return (
    <div>
      <div styleName="settings">
        <div styleName="disable">
          <Link to="/settings/disable">x</Link>
        </div>
        <div styleName="items">
          <Link to="/settings/profile">Profile</Link>
          <Link to="/settings/logout">Logout</Link>
        </div>
      </div>
      <Cluster />
    </div>
  );
}


export default cssModules(Settings, styles);
