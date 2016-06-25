import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Layout from './layout';
import Settings from './settings';
import Profile from './profile';
import Notification from './notification';

storiesOf('Layouts', module)
  .add('layout', () => (<Layout />))
  .add('notification', () => (<Notification />))
  .add('profile', () => (<Profile />))
  .add('settings', () => (<Settings />))
;
