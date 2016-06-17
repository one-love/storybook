import React from 'react';
import CSSModules from 'react-css-modules';
import Layout from '../organisms/layout';
import Service from '../molecules/service';
import styles from './service-list.scss';


function ServiceList() {
  return (
    <Layout title="Services">
      <div styleName="service-list">
        <Service name="One Love" />
        <Service name="Liberator" />
        <Service name="Compose" />
      </div>
    </Layout>
  );
}


export default CSSModules(ServiceList, styles);
