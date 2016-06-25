import React from 'react';
import Host from '../../molecules/host';
import Layout from '../../layouts/layout';
import Add from '../../atoms/add';


export default function ClusterList() {
  return (
    <Layout title="Hosts" cluster="active">
      <Host name="host_01" />
      <Host name="host_02" />
      <Host name="host_03" />
      <Add />
    </Layout>
  );
}
