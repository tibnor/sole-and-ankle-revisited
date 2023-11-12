/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {


  return (
    <DialogOverlayBackdrop
    isOpen={isOpen}
    onDismiss={onDismiss}
    >
    <DialogContentWrapper aria-label='Menu'>
      <ExitBtn onClick={onDismiss}><VisuallyHidden>Dismiss menu</VisuallyHidden><Icon id="close"></Icon></ExitBtn>
      <Nav>
        <a href="/sale">Sale</a>
        <a href="/new">New&nbsp;Releases</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/collections">Collections</a>
      </Nav>
      <Footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </Footer>
    </DialogContentWrapper>
    </DialogOverlayBackdrop>
  );
};

const DialogContentWrapper = styled(DialogContent)`
position: absolute;
top: 0;
bottom: 0;
right: 0;
width: 300px;
background: white;
justify-content: center;

display: flex;
flex-direction: column;
padding-left: 32px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  & > a {
    color: var(--color-gray-900);;
    text-decoration: none;
    font-family: Raleway;
    font-size: ${18/16}rem;
    font-weight: 600;
    line-height: ${21/16}rem;
    letter-spacing: 0em;
    text-align: left;

  }
`

const Footer = styled.footer`
display: flex;
flex-direction: column;
gap: 22px;
position: absolute;
bottom: 32px;
left: 32px;


& > a {
  color: var(--color-gray-900);;
  text-decoration: none;
  font-family: Raleway;
  font-size: ${14/16}rem;
  font-weight: 500;
  line-height: ${16/16}rem;
  letter-spacing: 0em;
  text-align: left;

}
`

const ExitBtn = styled.button`
  position: absolute;
  top: 26px;
  right: 16px;
  background: none;
  border: none;
`

const DialogOverlayBackdrop = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: absolute;
  inset: 0;
`

export default MobileMenu;
