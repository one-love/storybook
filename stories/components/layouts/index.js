import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Layout from './layout';
import Settings from './settings';
import Profile from './profile';

storiesOf('Layouts', module)
  .add('layout', () => (
    <Layout />
  ))
  .add('settings', () => (
    <Settings />
  ))
  .add('profile', () => (
    <Profile />
  ))
;
