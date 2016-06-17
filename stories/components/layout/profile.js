import React from 'react';
import CSSModules from 'react-css-modules';
import Layout from '../organisms/layout';
import styles from './profile.scss';


function Profile() {
  return (
    <Layout>
      <div styleName="profile">
        <div>username: admin </div>
        <div>email: admin@example.com</div>
        <div>first name: Bluc </div>
        <div>last name: Truc</div>
      </div>
    </Layout>
  );
}


export default CSSModules(Profile, styles);
