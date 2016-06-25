import React from 'react';
import Layout from '../../layouts/layout';

export default function Cluster() {
  return (
    <Layout title="Application" service="active">
      <div>
        <div className="label">name:</div>
        <div className="item">common</div>
      </div>
      <div>
        <div className="label">galaxy role:</div>
        <div className="item">onelove-roles.common</div>
      </div>
    </Layout>
  );
}
