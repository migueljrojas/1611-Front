import styled, {css, keyframes} from 'styled-components';

const lightBlue = '#006A92';
const darkBlue = '#014B6E';
const gray = '#666';

const HeaderComp = styled.header`
  transition: all .3s ease;
  position: fixed;
  z-index: 10000;
  width: 100%;
  padding: 20px 0 10px;
  min-height: 60px;

  ${
    props => {
      return props.scrolled && css`
        background: #fff;
        box-shadow: 0 3px 5px rgba(0,0,0,.10);
      `;
    }
  }

  & > div {
    position: relative;
  }
`;

const LogoWrapper = styled.a`
  width: 50px;
  position: absolute;
  display: block;
  left:15px;
  top:-5px;

  svg {
    width:100%;
  }

  @media (min-width: 760px) {
    width: 80px;
    top:0;
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  left:0;
  right:0;
  top:60px;
  bottom:0;
  background: #fff;
  transition: all .6s ease;
  transform: translateX(-100%);

  @media (min-width: 760px) {
    height: 80px;
    position: static;
    background: transparent;
    transform: translateX(0);
  }

  ${
    props => props.isOpen && (css`
      transform: translateX(0);
      border-top: 1px solid #ddd;
    `)
  }
`;

const Top = styled.div`
  
  width: 100%;
  order: 2;

  @media (min-width: 760px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    order: 1;
  }
`;

const Bottom = styled.div`
  width: 100%;
  padding: 15px 0;
  order: 1;

  @media (min-width: 760px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    order: 2;
  }
`;

const Nav = styled.ul`

  display: flex;
  flex-direction: column;

  @media (min-width: 760px) {
    flex-direction: row;
  }

  li {
    margin-bottom: 15px;
    margin-left: 15px;

    @media (min-width: 760px) {
      margin-bottom: 0;
    }

    a {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 18px;
      position: relative;
      color: ${lightBlue};

      &:after {
        transition: all .3s ease;
        position: absolute;
        content: '';
        right: 0;
        width: 15px;
        bottom: -7px;
        height: 1px;
        background: ${lightBlue};
      }

      &:hover {
        &:after {
          width: 100%;
        }
      }
    }
  }
`;

const Contact = styled.ul`
  @media (min-width: 760px) {
    display: flex;
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
    color: ${gray};

    svg {
      height: 20px;
      margin-right: 7px;
    }

    &:hover {
      color: ${lightBlue}
    }
  }
`;

const Social = styled.ul`
  display: flex;

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
    background: ${gray};
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;

    &:hover {
      background: ${lightBlue};
      color: #fff;
    }

    svg {
      height: 16px;
    }
  }
`;

const Hamburguer = styled.span`
  cursor: pointer;
  width: 25px;
  height: 20px;
  z-index: 1001;
  margin-left: 10px;
  position: absolute;
  right: 20px;
  top: 20px;

  @media (min-width: 760px) {
    display: none;
  }

  span {
    transition: all .6s ease;
    background-color: ${darkBlue};
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    transition: all .6s ease;
    position: absolute;

    &:nth-child(1) {
      transform: translateY(0) rotate(0);
      top:0;
    }

    &:nth-child(2) {
      transform: rotate(0);
      top: calc(50% - 1px);
    }

    &:nth-child(3) {
      transform: translateY(0) rotate(0);
      bottom:0;
    }
  }

  ${
    props => props.isOpen && (css`
      span:nth-child(1) {
        transform: translateY(9px) rotate(135deg);
      }

      span:nth-child(2) {
        transform: rotate(45deg);
      }

      span:nth-child(3) {
        transform: translateY(-9px) rotate(-135deg);
      }
    `)
  }
`;

export {
  HeaderComp,
  LogoWrapper,
  HeaderNav,
  Top,
  Bottom,
  Nav,
  Contact,
  Social,
  Hamburguer
}