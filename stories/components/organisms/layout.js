import React from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import styles from './layout.scss';


function Layout(props) {
  return (
    <div>
      <Header cluster={props.cluster} service={props.service} provision={props.provision}/>
      <div styleName="content">
        <h1>{props.title ? props.title : 'Title'}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};


export default CSSModules(Layout, styles);
