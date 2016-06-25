import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './footer';
import Icon from './icon';
import MenuItem from './menu-item';
import MenuSettings from './menu-settings';
import Spinner from './spinner';
import Log from './log';
import Popup from './popup';
import Add from './add';


storiesOf('Atoms', module)
  .add('add', () => (
    <Add />
  ))
  .add('footer', () => (
    <Footer />
  ))
  .add('icon', () => (
    <Icon />
  ))
  .add('log', () => (
    <Log />
  ))
  .add('menu-item', () => (
    <MenuItem />
  ))
  .add('menu-settings', () => (
    <MenuSettings />
  ))
  .add('popup', () => (
    <Popup />
  ))
  .add('spinner', () => (
    <Spinner />
  ))
;
