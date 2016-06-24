import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import Popup from '../atoms/popup';


export default function Profile(props) {
  return (
    <div>
      <Popup className="popup__full">
        <h3>Profile</h3>
        <div>username: john</div>
        <div>first name: John</div>
        <div>last name: Do'h</div>
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


Profile.propTypes = {
  cluster: React.PropTypes.string,
  children: React.PropTypes.node,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};
