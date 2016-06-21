import React from 'react';
import { Link } from 'react-router';
import Cluster from './cluster';


export default function Settings() {
  return (
    <div>
      <div className="settings">
        <div className="disable">
          <Link to="/settings/disable">x</Link>
        </div>
        <div className="items">
          <Link to="/settings/profile">Profile</Link>
          <Link to="/settings/logout">Logout</Link>
        </div>
      </div>
      <Cluster />
    </div>
  );
}
