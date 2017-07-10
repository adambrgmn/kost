// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../Icon';

const Btn = styled.button`
  display: inline-block;
  height: 2rem;
  padding: 0 1rem;
  border: 2px solid currentColor;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  vertical-align: middle;
  text-transform: capitalize;
  color: #333;
  background-color: transparent;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #2f80ed;
    outline: none;

    & svg {
      stroke: #2f80ed;
    }
  }

  ${props =>
    props.callToAction &&
    css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.8125rem;
    height: 7.8125rem;
    border-radius: 100%;
    padding: 0;
    font-size: 5.5rem;
    line-height: 1;
    background-color: #f2f2f2;
    overflow: visible;
  `};
`;

const Label = styled.span`
  ${props =>
    props.callToAction &&
    css`
    position: absolute;
    top: 110%;
    left: 50%;
    font-size: 1rem;
    transform: translateX(-50%);
  `};
`;

type Props = {
  icon?: IconType,
  label?: string,
  callToAction?: boolean,
  onClick: (e: SyntheticEvent) => void,
  children?: string,
};

const Button = ({ icon, label, callToAction, onClick, children }: Props) =>
  <Btn onClick={onClick} callToAction={callToAction}>
    {icon && <Icon icon={icon} inline={!callToAction} />}
    <Label callToAction={callToAction}>
      {label || children}
    </Label>
  </Btn>;

export default Button;
