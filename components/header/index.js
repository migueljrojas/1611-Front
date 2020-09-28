import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {
  HeaderComp,
  LogoWrapper,
  HeaderNav,
  Top,
  Bottom,
  Nav,
  Contact,
  Social,
  Hamburguer
} from './header.styles';
import Logo from './logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

export default function Header() {

  const [isPageScrolled, hasPageScrolled] = useState(false);
  const [isMenuOpen, toggleMenuOpen] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', _.debounce(() => hasPageScrolled(checkIfPageScrolls), 100));
  }, []);

  const checkIfPageScrolls = () => {
    return window.scrollY > 150; 
  };

  const setBodyScroll = isOpen => {
    const $body = document.querySelector('body');

    if (isOpen) {
      $body.style.overflowY = 'hidden';
    } else {
      $body.style.overflowY = 'auto';
    }
  };

  return (
    <HeaderComp scrolled={isPageScrolled}>
      <Container>
        <LogoWrapper href={'/'}>
          <Logo />
        </LogoWrapper>
        <HeaderNav isOpen={isMenuOpen}>
          <Top>
            <Contact>
              <li><Link href={'tel:+541125051611'}><a><FontAwesomeIcon icon={'phone-volume'} />{'(+54 11) 2505-1611'}</a></Link></li>
              <li><Link href={'mailto:contacto@dieciseisonce.com'}><a><FontAwesomeIcon icon={'envelope'} />{'contacto@dieciseisonce.com'}</a></Link></li>
            </Contact>
            <Social>
              <li><Link href={'#'}><a><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></Link></li>
              <li><Link href={'#'}><a><FontAwesomeIcon icon={['fab', 'instagram']} /></a></Link></li>
              <li><Link href={'#'}><a><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></Link></li>
            </Social>
          </Top>
          <Bottom>
            <Nav>
              <li>
                <Link href={'/nosotros'}><a>{'Nosotros'}</a></Link>
              </li>
              <li>
                <Link href={'/que-hacemos'}><a>{'Qué hacemos'}</a></Link>
              </li>
              <li>
                <Link href={'/proyectos-conquistados'}><a>{'Proyectos conquistados'}</a></Link>
              </li>
              <li>
                <Link href={'/contacto'}><a>{'Contacto'}</a></Link>
              </li>
            </Nav>
          </Bottom>
        </HeaderNav>
      </Container>
      <Hamburguer
        onClick={() => {
          toggleMenuOpen(!isMenuOpen);
          setBodyScroll(!isMenuOpen);
        }}
        isOpen={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </Hamburguer>
    </HeaderComp>
  )
}