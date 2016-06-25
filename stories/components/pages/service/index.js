import React from 'react';
import Layout from '../../layouts/layout';


export default function Service() {
  return (
    <Layout title="Service" service="active">
      <div className="item">
        <div>
          <div className="label">
            user:
          </div>
          <div className="item">
            admin@example.com
          </div>
        </div>
        <div>
          <div className="label">
            roles:
          </div>
          <div className="item">
            <select>
              <option value="some">op čop</option>
              <option value="thing">antilop</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
}
