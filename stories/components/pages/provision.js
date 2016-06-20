import React from 'react';
import Provision from '../molecules/provision';
import Layout from '../layouts/layout';


export default function ProvisionLayout() {
  return (
    <Layout title="Provision" provision="active">
      <Provision />
    </Layout>
  );
}
