import React from 'react';
import Layout from '../../layouts/layout';

export default function Host() {
  return (
    <Layout cluster="active" title="Host">
      <div>
        <div className="label">hostname:</div>
        <div className="item">one-love.com</div>
      </div>
      <div>
        <div className="label">IP:</div>
        <div className="item">127.0.0.1</div>
      </div>
    </Layout>
  );
}
