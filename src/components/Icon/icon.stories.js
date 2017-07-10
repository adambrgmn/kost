// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '../Icon';

storiesOf('Component.Icon', module)
  .addDecorator(story =>
    <div style={{ fontSize: '1.5rem' }}>
      {story()}
    </div>,
  )
  .add('settings', () => <Icon icon="settings" />)
  .add('inbox', () => <Icon icon="inbox" />)
  .add('plus-circle', () => <Icon icon="plus-circle" />)
  .add('list', () => <Icon icon="list" />)
  .add('group', () => <Icon icon="group" />)
  .add('group-circle', () => <Icon icon="group-circle" />)
  .add('more-vertical', () => <Icon icon="more-vertical" />)
  .add('edit', () => <Icon icon="edit" />)
  .add('trash', () => <Icon icon="trash" />)
  .add('inline', () =>
    <p style={{ fontFamily: 'monospace' }}>
      Inline svg <Icon icon="inbox" inline /> flows much better than{' '}
      <Icon icon="inbox" /> none inline svg
    </p>,
  )
  .add('active', () => <Icon icon="settings" active />)
  .add('all icons', () =>
    <div>
      <div>
        <Icon icon="settings" />
        <Icon icon="inbox" />
        <Icon icon="plus-circle" />
        <Icon icon="list" />
        <Icon icon="group" />
        <Icon icon="group-circle" />
        <Icon icon="more-vertical" />
        <Icon icon="edit" />
        <Icon icon="trash" />
      </div>
      <div>
        <Icon icon="settings" active />
        <Icon icon="inbox" active />
        <Icon icon="plus-circle" active />
        <Icon icon="list" active />
        <Icon icon="group" active />
        <Icon icon="group-circle" active />
        <Icon icon="more-vertical" active />
        <Icon icon="edit" active />
        <Icon icon="trash" active />
      </div>
    </div>,
  );
