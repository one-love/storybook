import React from 'react';
import { Link } from 'react-router';
import Log from '../../atoms/log';


export default function Provision() {
  return (
    <div className="provision">
      <div>
        <div className="label">
          status:
        </div>
        <div className="item">
          RUNNING
        </div>
      </div>
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
          cluster:
        </div>
        <div className="item">
          <Link to="/cluster/id">cluster</Link>
        </div>
      </div>
      <div>
        <div className="label">
          service:
        </div>
        <div className="item">
          <Link to="/service/id">service</Link>
        </div>
      </div>
      <Log />
    </div>
  );
}
