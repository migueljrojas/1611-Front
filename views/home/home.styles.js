import styled, { keyframes } from 'styled-components';
import bg from '../../public/assets/home/bg.jpg';

const yellow = '#FFDC28';
const lightBlue = '#006A92';
const darkBlue = '#014B6E';
const gray = '#666';

const lightBulbRotation = keyframes`
  0% {
    transform: rotateY(0);
    transform: rotateY(0);
  }
  35% {
    transform: rotateY(90deg);
    transform: rotateY(90deg);
  }
  70% {
    transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  85% {
    transform: rotateY(270deg);
    transform: rotateY(270deg);
  }
  100% {
    transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
`;

const lightBulbSize = keyframes`
  0% {
    border-top: 28vw solid transparent;
    border-bottom: 28vw solid transparent;
  }
  35% {
    border-top: 10vw solid transparent;
    border-bottom: 10vw solid transparent;
  }
  70% {
    border-top: 28vw solid transparent;
    border-bottom: 28vw solid transparent;
  }
  85% {
    border-top: 50vw solid transparent;
    border-bottom: 50vw solid transparent;
  }
  100% {
    border-top: 28vw solid transparent;
    border-bottom: 28vw solid transparent;
  }
`;

const Hero = styled.section`
  position: relative;
  height: 90vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: -1vw;
`;

const HeroLighthouse = styled.img`
  position: absolute;
  bottom:0;
  left:0;
  width: 100%;
  z-index: 1;
`;

const LightHouseWrapper = styled.div`
  position: absolute;
  right: -29%;
  z-index: 0;
  bottom:0;
  width: 100%;
  height: 55vw;

  @media (min-width: 760px) {
    width: 67.5%;
    height: 35vw;
    right: -15%;
  }
`;

const LightBulb = styled.div`
  animation: ${lightBulbRotation} 15s linear infinite;
  width: 140vw;
  height:30vw;
  position: absolute;
  bottom:52%;
  right: 63vw;
  transform-origin: right center;
  z-index: 0;

  @media (min-width: 760px) {
    bottom:40%;
    right: 42vw;
  }

  &:before {
    animation: ${lightBulbSize} 15s linear infinite;
    content: '';
    position: absolute;
    border-left: 75vw solid ${yellow};
    border-top: 28vw solid transparent;
    border-bottom: 28vw solid transparent;
    height: 1%;
    width: 8vw;
    right: 0%;
    top: 50%;
    transform: translate3d(0,-50%,0);
    background: linear-gradient(to right,${yellow},transparent);
  }

  &:after {
    position: absolute;
    content: '';
    background: linear-gradient(to right,rgba(255,255,255) 10%,transparent 90%);
    right: 0;
    bottom: -100%;
    display: block;
    width: 55%;
    z-index: 3;
    height: 350%;
    backface-visibility: visible;
    transform-style: preserve-3d;
  }
`;

const HeroContent = styled.div`
  width: 90%;

  @media (min-width: 760px) {
    width: 40%;
  }
`;

const Title = styled.h1`
  font-weight: 600;
  color: ${darkBlue};
  margin: 0 0 30px;
  font-size: 32px;
  line-height: 1;

  @media (min-width: 760px) {
    font-size: 48px;
  }
`;

const Slogan = styled.p`
  font-weight: 400;
  color: ${gray};
  margin: 0;
  font-size: 18px;
  width: 60%;

  @media (min-width: 760px) {
    width: auto;
  }
`;


const Body = styled.section`
  min-height: 300vh;
  background: url(${bg}) no-repeat center top / cover;
  position: relative;
`;

const IcebergBottom = styled.img`
  position: absolute;
  right:0;
  top: 0;
  width: 65%;
  display: block;

  @media (min-width: 760px) {
    width: 45%;
  }
`;

const AboutUs = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 20vw 0;

  @media (min-width: 760px) {
    padding: 0;
  }
`;

const AboutusContent = styled.div`
  padding-top: 10vw;

  @media (min-width: 760px) {
    padding-top: 0;
  }
`;

const AboutUsTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  color: ${darkBlue};
  margin: 0 0 15px;
`;

const AboutUsText = styled.div`
  margin-bottom: 40px;

  p {
    color: #fff;
  }
`;

const Fish = styled.img`
  position: relative;
  top: 10vw;
  max-width: 100%;
`;

const AboutUsPartners = styled.div`
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    color: ${darkBlue};
    margin: 0 0 15px;
    color: #fff;
    font-size: 18px;
  }

  img {
    max-width: 100%;
  }
`;

const Services = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20vw 0;

  @media (min-width: 760px) {
    padding: 0;
  }
`;

const ServicesContent = styled.div`
  text-align: center;
`;

const ServicesTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  color: ${darkBlue};
  margin: 0 0 15px;
`;

const ServicesText = styled.div`
  margin-bottom: 40px;

  p {
    color: #fff;
  }
`;

const ServicesList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5vw 0;

  @media (min-width: 760px) {
    flex-wrap: nowrap;
  }

  li {
    text-align: center;
    width: 50%;

    @media (min-width: 760px) {
      width: auto;
    }

    span {
      display: block;
      color: #fff;
      font-size: 12px;
      margin-top: 10px;
    }
  }
`;

const Octopus = styled.img`
  position: absolute;
  top: 15%;
  left: -2%;
  width: 30%;
  max-width: 300px;

  @media (min-width: 760px) {
    top: 30%;
    width: 20%;
  }
`;

const Compass = styled.img`
  position: absolute;
  top: 40%;
  right: 5%;
  width: 25%;
  max-width: 200px;

  @media (min-width: 760px) {
    top: 33%;
    width: 15%;
  }
`;

const Testimonials = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;  
  padding-bottom: 15vw;

  @media (min-width: 760px) {
    overflow: visible;  
    padding-bottom: 0;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }
`;

const Treasure = styled.img`
  position: absolute;
  right:0;
  top: 45%;
  width: 100%;
  transform: translateX(60%) scaleX(-1);

  @media (min-width: 760px) {
    right: auto;
    left:0;
    top: 15%;
    width: 70%;
    transform: translateX(-70%) scaleX(1);
  }
`;

const Project = styled.div`
  display: flex;
`;

const ProjectContent = styled.div`
  width: 65%;
  margin-right: 5%;
`;

const ProjectCategory = styled.div`
  display: flex;
  max-width: 180px;
  align-items: flex-end;
  margin-bottom: 20px;

  img {
    width: 32px;
    margin-right: 15px;
  }

  span {
    display: block;
    flex-grow: 2;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;

    &::first-line {
      color: ${yellow};
    }
  }
`;

const ProjectDescription = styled.div`
  margin-bottom: 30px;

  p {
    font-size: 14px;
    color: #fff;
  }
`;

const ProjectTags = styled.ul`
  li{
    color: ${yellow};
    font-size: 12px;
    margin-bottom: 5px;
    font-weight: 600;
  }
`;

const ProjectImage = styled.div`
  width:30%;

  img {
    width: 100%;
  }
`;

const ProjectSlide = styled.div`
  padding: 0 30px;

  &:focus {
    outline: none;
  }
`;

const TestimonialsTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  color: ${darkBlue};
  margin: 0 0 30px 30px;
  width: 50%;
  text-align: center;
  color: #fff;

  @media (min-width: 760px) {
    margin: 0 0 30px;
    color: ${darkBlue};
  }
`;

const Contact = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20vw 0;
  overflow: hidden;

  @media (min-width: 760px) {
    padding: 0;
  }
`;

const Bottle = styled.img`
  position: absolute;
  right:0;
  top: 45%;
  width: 100%;
  transform: translateX(60%) scaleX(-1);

  @media (min-width: 760px) {
    right:0;
    top: 15%;
    width: 30%;
    transform: translateX(10%) scaleX(1);
  }
`;

const ContactForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 80px;

  @media(min-width: 760px) {
    margin-bottom: 0;
  }
`;

const ContactFormGroup = styled.div`
  width: 100%;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media(min-width: 760px) {
    ${props => props.width && `
      width: ${props.width};
    `}
  }
`;

const ContactTitle = styled.h2`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  margin: 0 0 30px;
`;

const ContactLabel = styled.label`
  position: absolute;
  /* opacity: 0; */
  top: calc(50% - 2px);
  left: 10px;
  font-size: 20px;
  transform: translateY(-50%);
  color: rgba(255,255,255,.5);
  z-index: 2;
  transition: all .5s ease;
  pointer-events: none;
  margin: 0;
`;

const ContactInput = styled.input`
  transition: all .3s ease;
  border: 1px solid #fff;
  width: 100%;
  height: 100%;
  background: none;
  font-size: 20px;
  padding-left: 10px;
  outline: none;
  color: #fff;
  caret-color: #fff;
  z-index: 1;
  position: relative;
  height: 50px;
  font-weight: 300;

  &:focus {
    padding-top: 20px;
    border: 1px solid ${yellow};

    & + label {
      top: 12px;
      font-size: 11px;
      color: ${yellow}
    }
  }

  &::placeholder {
    opacity: 0;
  }

  &:not(:placeholder-shown) {
    padding-top: 15px;

    + label {
      opacity: 1;
      top:12px;
      font-size: 11px;
      color: ${yellow};
    }
  }
`;

const ContactTextarea = styled.textarea`
  transition: all .3s ease;
  border: 1px solid #fff;
  width: 100%;
  height: 100%;
  min-height: 100px;
  background: none;
  font-size: 20px;
  padding-left: 10px;
  outline: none;
  color: #fff;
  caret-color: #fff;
  z-index: 1;
  position: relative;
  margin-bottom: -7px;
  transition: all .3s ease;
  overflow-y: auto;
  resize: none;
  margin-top: 20px;
  line-height: 1.3;
  font-weight: 300;

  & + label {
    top: 36px;
  }

  &:focus {
    border: 1px solid ${yellow};
    & + label {
      top: 7px;
      font-size: 12px;
      color:${yellow};
    }
  }

  &::placeholder {
    opacity: 0;
    height: 0;
    overflow: hidden;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${darkBlue};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${yellow};
  }

  &:not(:placeholder-shown) {
    & + label {
      top: 7px;
      font-size: 12px;
      color:${yellow};
    }
  }
`;

const ContactFormButton = styled.button`
  text-transform: uppercase;
  width: 100%;
  margin-top: 20px;
  margin-left: auto;
  display: block;
  background: ${darkBlue};
  color: #fff;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  @media(min-width: 760px) {
    width: 47%;
  }
`;

export {
  Hero,
  HeroLighthouse,
  LightBulb,
  HeroContent,
  Title,
  Slogan,
  Body,
  IcebergBottom,
  LightHouseWrapper,
  AboutUs,
  AboutusContent,
  AboutUsTitle,
  AboutUsText,
  Fish,
  AboutUsPartners,
  Services,
  ServicesContent,
  ServicesTitle,
  ServicesText,
  ServicesList,
  Octopus,
  Compass,
  Testimonials,
  Treasure,
  Project,
  ProjectContent,
  ProjectCategory,
  ProjectDescription,
  ProjectTags,
  ProjectImage,
  ProjectSlide,
  TestimonialsTitle,
  Contact,
  ContactTitle,
  ContactForm,
  ContactFormGroup,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  ContactFormButton,
  Bottle
};