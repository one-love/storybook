import React from 'react';
import CSSModules from 'react-css-modules';
import Layout from '../organisms/layout';


export default function Profile() {
  return (
    <Layout title="Profile">
      <div>username: admin </div>
      <div>email: admin@example.com</div>
      <div>first name: Bluc </div>
      <div>last name: Truc</div>
    </Layout>
  );
}
