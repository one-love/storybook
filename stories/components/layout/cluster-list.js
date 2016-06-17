import React from 'react';
import CSSModules from 'react-css-modules';
import Cluster from '../molecules/cluster';
import Layout from '../organisms/layout';
import styles from './cluster-list.scss';


function ClusterList() {
  return (
    <Layout title="Clusters">
      <Cluster name="Tilda Center"/>
      <Cluster name="LUGoNS"/>
      <Cluster name="LUGZR"/>
    </Layout>
  );
}


export default CSSModules(ClusterList, styles);
