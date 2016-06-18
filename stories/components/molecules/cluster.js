import React from 'react';
import cssModules from 'react-css-modules';
import cloud from '../../../media/img/cloud.svg';
import styles from './cluster.scss';
import Icon from '../atoms/icon';


function Cluster(props) {
  let name = 'ClusterName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="cluster" img={cloud} name={name} />
  );
}


Cluster.propTypes = {
  name: React.PropTypes.string,
};


export default cssModules(Cluster, styles);
