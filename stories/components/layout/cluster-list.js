import React from 'react';
import CSSModules from 'react-css-modules';
import Cluster from '../molecules/cluster';
import Layout from '../organisms/layout';


export default function ClusterList() {
  return (
    <Layout title="Clusters" cluster="active">
      <Cluster name="Tilda Center"/>
      <Cluster name="LUGoNS"/>
      <Cluster name="LUGZR"/>
    </Layout>
  );
}
