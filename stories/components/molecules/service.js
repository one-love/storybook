import React from 'react';
import cssModules from 'react-css-modules';
import service from '../../../media/img/service.svg';
import styles from './service.scss';


function Service(props) {
  let name = 'ServiceName';
  if (props && props.name) {
    name = props.name;
  }
  return (
    <div className="o-media" styleName="icon">
      <img src={service} alt="service" className="o-media__img" styleName="icon-img" />
      <div classNeme="o-media__body">
        {name}
      </div>
    </div>
  );
}


Service.propTypes = {
  name: React.PropTypes.string,
};


export default cssModules(Service, styles);
