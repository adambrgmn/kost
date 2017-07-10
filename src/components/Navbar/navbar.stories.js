// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from '../Navbar';

storiesOf('Component.Navbar', module)
  .addDecorator(story =>
    <div style={{ width: '375px', marginTop: '5rem' }}>
      {story()}
    </div>,
  )
  .add('basic', () => <Navbar onNavClick={action('Navbar clicked')} />)
  .add('active section', () =>
    <Navbar onNavClick={action('Navbar clicked')} activeSection="new-cost" />,
  )
  .add('with click', () => <Navbar onNavClick={action('Navbar clicked')} />);
