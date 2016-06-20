import React from 'react';
import Header from '../molecules/header';
import Footer from '../atoms/footer';


export function Layout(props) {
  return (
    <div>
      <Header cluster={props.cluster} service={props.service} provision={props.provision} />
      <div className="content">
        <h1>{props.title ? props.title : 'Title'}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}


Layout.propTypes = {
  cluster: React.PropTypes.string,
  children: React.PropTypes.node,
  service: React.PropTypes.string,
  provision: React.PropTypes.string,
  title: React.PropTypes.string,
};
