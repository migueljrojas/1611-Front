import React from 'react';
import {
  FooterComponent,
  Social,
  LogoWrapper,
  FooterCopy,
  Contact
} from './footer.styles';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../header/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
  return (
    <FooterComponent>
      <Container>
        <Row>
          <Col md={2}>
            <LogoWrapper>
              <Logo fill={'#fff'} />
            </LogoWrapper>
          </Col>
          <Col md={8}>
            <Contact>
              <li><Link href={'https://www.google.com.ar/maps/place/Cdad.+de+La+Paz+1042,+C1426+AGT,+Buenos+Aires/@-34.5700517,-58.4509119,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb5c45838225f:0xdf6053cc98f55e6e!8m2!3d-34.5700561!4d-58.4487232'}><a><FontAwesomeIcon icon={'map-marker-alt'} />{'Ciudad de la Paz 1042, CABA'}</a></Link></li>
              <li><Link href={'tel:+541125051611'}><a><FontAwesomeIcon icon={'phone-volume'} />{'(+54 11) 2505-1611'}</a></Link></li>
              <li><Link href={'mailto:contacto@dieciseisonce.com'}><a><FontAwesomeIcon icon={'envelope'} />{'contacto@dieciseisonce.com'}</a></Link></li>
            </Contact>
          </Col>
          <Col md={2}>
            <Social>
              <li><Link href={'#'}><a><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></Link></li>
              <li><Link href={'#'}><a><FontAwesomeIcon icon={['fab', 'instagram']} /></a></Link></li>
              <li><Link href={'#'}><a><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></Link></li>
            </Social>
          </Col>
        </Row>
        <Row>
          <Col>
            <FooterCopy>{'2009 - 2020. Todos los derechos reservados'}</FooterCopy>
          </Col>
        </Row>
      </Container>
    </FooterComponent>
  );
}