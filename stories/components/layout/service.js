import React from 'react';
import CSSModules from 'react-css-modules';
import Layout from '../organisms/layout';
import styles from './service.scss';


function Service() {
  return (
    <Layout title="Service">
      <div styleName="service">
        <div styleName="item">
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
              roles:
            </div>
            <div styleName="item">
              <select>
                <option value="some">op čop</option>
                <option value="thing">antilop</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default CSSModules(Service, styles);
