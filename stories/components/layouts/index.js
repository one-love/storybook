import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Layout from './layout';

storiesOf('Layouts', module)
  .add('layout', () => (
    <Layout />
  ));
