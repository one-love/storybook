import React from 'react';
import cssModules from 'react-css-modules';
import Provision from '../molecules/provision';
import Layout from '../layouts/layout';
import styles from './provision.scss';


function ProvisionLayout() {
  return (
    <Layout title="Provision" provision="active">
      <Provision />
    </Layout>
  );
}


export default cssModules(ProvisionLayout, styles);
