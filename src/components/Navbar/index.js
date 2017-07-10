// @flow
import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  border-top: 2px solid #333;
  background-color: #f2f2f2;
`;

const NavBarButton = styled.button`
  flex-grow: 1;
  font-size: 1.5rem;
  margin: 0;
  border: none;
  padding: 0;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:hover svg,
  &:focus svg {
    stroke: #2f80ed;
  }

  &:nth-child(2) {
    flex-grow: 0;
    margin-top: -2rem;
    font-size: 4rem;
    & svg {
      fill: #f2f2f2;
    }
  }
`;

type Sections = 'inbox' | 'new-cost' | 'settings';

type Props = {
  activeSection?: Sections,
  onNavClick: (section: Sections, e: SyntheticEvent) => void,
};

const sections = ['inbox', 'new-cost', 'settings'];

const Navbar = ({ activeSection, onNavClick }: Props) =>
  <Container>
    {sections.map(section =>
      <NavBarButton key={section} onClick={e => onNavClick(section, e)}>
        <Icon icon={section} inline active={activeSection === section} />
      </NavBarButton>,
    )}
  </Container>;

export default Navbar;
