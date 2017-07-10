// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { compose, call, propOr, __ } from 'ramda';
import { toStudlyCaps } from 'strman';

import * as icons from './Icons';

const Container = styled.span`
  position: relative;
  display: inline-flex;
  align-self: center;
  height: 1em;
  width: 1em;
`;

const Svg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
  stroke: ${props => (props.active ? '#2F80ED' : '#333333')};
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke 0.3s ease-in-out;

  ${props =>
    props.inline &&
    css`
    position: absolute;
    bottom: -0.123em;
  `};
`;

const getIcon: (icon: IconType) => React$Element<*> = compose(
  call,
  propOr(() => <g />, __, icons),
  toStudlyCaps,
);

const Icon = ({
  icon,
  inline,
  active,
}: {
  icon: IconType,
  inline?: boolean,
  active?: boolean,
}) =>
  <Container>
    <Svg viewBox="0 0 24 24" inline={inline} active={active}>
      {getIcon(icon)}
    </Svg>
  </Container>;

export default Icon;
