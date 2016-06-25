import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Cluster from './cluster';
import ClusterList from './cluster-list';
import Service from './service';
import ServiceList from './service-list';
import Provision from './provision';
import ProvisionList from './provision-list';
import Login from './login';
import ForgotPassword from './forgot-password';
import Host from './host';
import HostList from './host-list';


storiesOf('Pages', module)
  .add('login', () => (
    <Login />
  ))
  .add('forgot-password', () => (
    <ForgotPassword />
  ))
  .add('cluster', () => (
    <Cluster />
  ))
  .add('cluster-list', () => (
    <ClusterList />
  ))
  .add('service', () => (
    <Service />
  ))
  .add('service-list', () => (
    <ServiceList />
  ))
  .add('provision', () => (
    <Provision />
  ))
  .add('provision-list', () => (
    <ProvisionList />
  ))
  .add('host', () => (
    <Host />
  ))
  .add('host-list', () => (
    <HostList />
  ))
;
