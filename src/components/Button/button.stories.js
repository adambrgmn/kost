// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../Button';

storiesOf('Component.Button', module)
  .add('basic', () =>
    <Button onClick={action('Button clicked')}>overview</Button>,
  )
  .add('call to action', () =>
    <Button
      onClick={action('Button clicked')}
      icon="plus"
      label="new cost"
      callToAction
    >
      new cost
    </Button>,
  )
  .add('with icon', () =>
    <Button onClick={action('Button clicked')} icon="trash" />,
  )
  .add('rounded', () =>
    <Button onClick={action('Button clicked')} icon="group" rounded />,
  )
  .add('without border', () =>
    <Button onClick={action('Button clicked')} icon="more-vertical" />,
  )
  .add('with click', () =>
    <Button onClick={action('Button clicked')}>Click me</Button>,
  );
