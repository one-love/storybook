import React from 'react';
import cssModules from 'react-css-modules';
import Layout from '../organisms/layout';
import Provision from '../molecules/provision';
import styles from './provision.scss';


function ProvisionLayout() {
  return (
    <Layout title="Provision" provision="active">
      <Provision />
    </Layout>
  );
}


export default cssModules(ProvisionLayout, styles);
