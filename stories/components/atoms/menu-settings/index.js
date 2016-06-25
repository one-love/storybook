import React from 'react';
import gear from './gear.svg';


export default function MenuSettings() {
  return (
    <li className="menu-settings">
      <div>
        <img alt="menu-settings" src={gear} />
      </div>
    </li>
  );
}
