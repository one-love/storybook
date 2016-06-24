import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Popup from '../atoms/popup';


export default function Settings(props) {
  return (
    <div>
      <Popup className="popup">
        Settings
      </Popup>
      <Header cluster={props.cluster} service={props.service} provision={props.provision} />
      <div className="content">
        <h1>{props.title ? props.title : 'Title'}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


Settings.propTypes = {
  cluster: React.PropTypes.string,
  children: React.PropTypes.node,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};
