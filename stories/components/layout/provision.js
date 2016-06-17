import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import Layout from '../organisms/layout';
import styles from './provision.scss';


function Provision() {
  return (
    <Layout title="Provision" provision="active">
      <div>
        <div>
          <div styleName="label">
            status:
          </div>
          <div styleName="item">
            RUNNING
          </div>
        </div>
        <div>
          <div styleName="label">
            user:
          </div>
          <div styleName="item">
            admin@example.com
          </div>
        </div>
        <div>
          <div styleName="label">
            cluster:
          </div>
          <div styleName="item">
            <Link to="/cluster/id">cluster</Link>
          </div>
        </div>
        <div>
          <div styleName="label">
            service:
          </div>
          <div styleName="item">
            <Link to="/service/id">service</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default CSSModules(Provision, styles);
