import React from 'react';
import Service from '../molecules/service';
import Layout from '../layouts/layout';
import Add from '../atoms/add';


export default function ServiceList() {
  return (
    <Layout title="Services" service="active">
      <Service name="One Love" />
      <Service name="Liberator" />
      <Service name="Compose" />
      <Add />
    </Layout>
  );
}
