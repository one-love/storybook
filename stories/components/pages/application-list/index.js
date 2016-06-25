import React from 'react';
import Application from '../../molecules/application';
import Layout from '../../layouts/layout';
import Add from '../../atoms/add';


export default function ApplicationList() {
  return (
    <Layout title="Applications" service="active">
      <Application name="Docker" />
      <Application name="Flask" />
      <Application name="React" />
      <Add />
    </Layout>
  );
}
