import React from 'react';
import Layout from '../../layouts/layout';

export default function Cluster() {
  return (
    <Layout cluster="active">
      <div>
        <div className="label">
          username:
        </div>
        <div className="item">
          admin@example.com
        </div>
      </div>
      <div>
        <div className="label">
          ssh key:
        </div>
        <div className="item">
          tandara mandara
        </div>
      </div>
      <div>
        <div className="label">
          providers:
        </div>
        <div className="item">
          <select>
            <option value="cluster name">cicvara popara</option>
            <option value="something">gurabija</option>
          </select>
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
      <div>
        <div className="label">
          services:
        </div>
        <div className="item">
          <select>
            <option value="some">bandaranaik</option>
            <option value="thing">trokraka udica</option>
          </select>
        </div>
      </div>
    </Layout>
  );
}
