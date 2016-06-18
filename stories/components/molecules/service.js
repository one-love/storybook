import React from 'react';
import cssModules from 'react-css-modules';
import service from '../../../media/img/service.svg';
import styles from './service.scss';
import Icon from '../atoms/icon';


function Service(props) {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <Icon alt="service" img={service} name={name} />
  );
}


Service.propTypes = {
  name: React.PropTypes.string,
};


export default cssModules(Service, styles);
