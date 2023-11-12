import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      
        <Side />
        <MobileNav>
          <Icon id="shopping-bag" size="24" />
          <Icon id="search" size="24" />
          <HamburgerMobile onClick={() => setShowMobileMenu(true)}>
          <Icon id="menu" size="24" />
          </HamburgerMobile>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);;
  overflow-x: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp( 2rem,10vw - 4rem,10rem );
  margin: 0px 48px;

  @media ${QUERIES.laptopAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media ${QUERIES.laptopAndDown} {
    display: flex;
    align-items baseline;
    gap: 32px;
    margin: 0 28px;
  }
`

const HamburgerMobile = styled.button`
background: transparent;
border: 0;
`


const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);;
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);;
  }
`;

export default Header;
