import React from 'react';
import Cluster from '../molecules/cluster';
import Layout from '../layouts/layout';
import Add from '../atoms/add';


export default function ClusterList() {
  return (
    <Layout title="Clusters" cluster="active">
      <Cluster name="Tilda Center" />
      <Cluster name="LUGoNS" />
      <Cluster name="LUGZR" />
      <Add />
    </Layout>
  );
}
