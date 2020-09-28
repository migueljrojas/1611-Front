import styled from 'styled-components';
import footerBg from '../../public/assets/footer.png';

const lightBlue = '#006A92';
const darkBlue = '#014B6E';
const gray = '#666';

const FooterComponent = styled.footer`
  background: url(${footerBg}) no-repeat center bottom / cover;
  min-height: 350px;
  position: relative;
  z-index: 2;
  padding: 50px 0 30px;

  @media (min-width: 760px) {
    padding: 50px 0 0;
    min-height: 200px;
  }

  .row {
    align-items: center;
  }
`;

const Social = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (min-width: 760px) {
    justify-content: flex-end;
    margin-bottom: 0;
  }

  li{
    margin-bottom: 15px;
    margin-left: 15px;

    @media (min-width: 760px) {
      margin-bottom: 0;
    }
  }

  a {
    height: 20px;
    display: flex;
    align-items: center;
    background: #fff;
    color: ${darkBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:hover {
      background: #fff;
      color: ${lightBlue};
    }

    svg {
      height: 16px;
    }
  }
`;

const LogoWrapper = styled.div`
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media (min-width: 760px) {
    display: block;
    margin-bottom: 0;
  }

  svg {
    height: 100%;
    width: auto;
  }
`;

const FooterCopy = styled.p`
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const Contact = styled.ul`
  @media (min-width: 760px) {
    display: flex;
    justify-content: space-around;
  }

  li{
    margin-bottom: 15px;
    text-align: center;

    @media (min-width: 760px) {
      margin-bottom: 0;
      text-align: left;
    }
  }

  a {
    height: 20px;
    display: inline-flex;
    align-items: center;
    color: #fff;
    font-size: 14px;

    svg {
      height: 20px;
      margin-right: 7px;
    }

    &:hover {
      color: ${lightBlue}
    }
  }
`;

export {
  FooterComponent,
  Social,
  LogoWrapper,
  FooterCopy,
  Contact
};