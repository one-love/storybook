import React from 'react';
import Layout from '../organisms/layout';
import Service from '../molecules/service';


export default function ServiceList() {
  return (
    <Layout title="Services" service="active">
      <Service name="One Love" />
      <Service name="Liberator" />
      <Service name="Compose" />
    </Layout>
  );
}
