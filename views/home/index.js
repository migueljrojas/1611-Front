import React from 'react';
import {
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
} from './home.styles';
import lighthouse from '../../public/assets/home/lighthouse.png';
import icebergBottom from '../../public/assets/home/icebergBottom.png';
import { Container, Row, Col } from 'react-bootstrap';
import fish from '../../public/assets/home/fish.png';
import partners from '../../public/assets/home/partners.png';
import octopus from '../../public/assets/home/octopus.png';
import compass from '../../public/assets/home/compass.png';
import treasure from '../../public/assets/home/treasure.png';
import bottle from '../../public/assets/home/bottle.png';
import marked from 'marked';
import Slider from "react-slick";

export default function HomeView({ data }) {
  console.log(data);

  return (
    <main>
      <Hero>
        <LightHouseWrapper>
          <HeroLighthouse src={lighthouse} />
          <LightBulb />
        </LightHouseWrapper>
        <Container>
          <Row>
            <Col>
              <HeroContent>
                <Title>{data.HomeHero.Title}</Title>
                <Slogan>{data.HomeHero.Slogan}</Slogan>
              </HeroContent>
            </Col>
          </Row>
        </Container>
      </Hero>
      <Body>
        <IcebergBottom src={icebergBottom} alt={'icerberg'} />
        <AboutUs>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <AboutusContent>
                  <AboutUsTitle>{data.homeAboutUs.info.Title}</AboutUsTitle>
                  <AboutUsText
                    dangerouslySetInnerHTML={{ __html: [marked(data.homeAboutUs.info.Text)] }}
                  />
                  <AboutUsPartners>
                    <h3>{'Somos partners'}</h3>
                    <img src={partners} />
                  </AboutUsPartners>
                </AboutusContent>
              </Col>
              <Col xs={12} md={6}>
                <Fish src={fish} />
              </Col>
            </Row>            
          </Container>
        </AboutUs>
        <Services>
          <Octopus src={octopus} />
          <Compass src={compass} />
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <ServicesContent>
                  <ServicesTitle>{data.HomeServices.Info.Title}</ServicesTitle>
                  <ServicesText
                    dangerouslySetInnerHTML={{ __html: [marked(data.HomeServices.Info.Text)] }}
                  />
                </ServicesContent>
              </Col>
              <Col xs={12} md={{ span: 10, offset: 1 }}>
                <ServicesList>
                  {
                    data.HomeServices.Service.map((service, index) => {
                      return (
                        <li key={index}>
                          <img src={service.Icon.url} />
                          <span>{service.Name}</span>
                        </li>
                      );
                    })
                  }
                </ServicesList>
              </Col>
            </Row>            
          </Container>
        </Services>
        <Testimonials>
          <Treasure src={treasure} />
          <Container>
            <Row>
              <Col xs={12} md={{ span: 8, offset: 4 }}>
                <TestimonialsTitle>{data.ProjectsTitle}</TestimonialsTitle>
                <Slider>
                  {
                    data.Projects.map((project, index) => {
                      return (
                        <ProjectSlide key={index}>
                          <Project>
                            <ProjectContent>
                              <ProjectCategory>
                                <img src={project.Category.icon[0].url} />
                                <span>{project.Category.categoryName}</span>
                              </ProjectCategory>
                              <ProjectDescription dangerouslySetInnerHTML={{ __html: [marked(project.Description)] }} />
                              <ProjectTags>
                                {project.ProjectTag.map((tag, idx) => (<li key={idx}>{tag.tagName}</li>))}
                              </ProjectTags>
                            </ProjectContent>
                            <ProjectImage>
                              <img src={project.ProjectLogo.name.includes('http') ? project.ProjectLogo.name : project.ProjectLogo.url} />
                            </ProjectImage>
                          </Project>
                        </ProjectSlide>
                      );
                    })
                  }
                </Slider>
              </Col>
            </Row>            
          </Container>
        </Testimonials>
        <Contact>
          <Bottle src={bottle} />
          <Container>
            <Row>
              <Col xs={12} md={{ span: 6, offset: 3 }}>
                <ContactTitle>{'¡Escribinos!'}</ContactTitle>
                <ContactForm>
                  <ContactFormGroup width="100%">
                    <ContactInput placeholder="Nombre" type={'text'} />
                    <ContactLabel>{'Nombre'}</ContactLabel>
                  </ContactFormGroup>
                  <ContactFormGroup width="47%">
                    <ContactInput placeholder="Email" type={'email'} />
                    <ContactLabel>{'Email'}</ContactLabel>
                  </ContactFormGroup>
                  <ContactFormGroup width="47%">
                    <ContactInput placeholder="Teléfono" type={'text'} />
                    <ContactLabel>{'Teléfono'}</ContactLabel>
                  </ContactFormGroup>
                  <ContactFormGroup width="100%">
                    <ContactInput placeholder="Asunto" type={'text'} />
                    <ContactLabel>{'Asunto'}</ContactLabel>
                  </ContactFormGroup>
                  <ContactFormGroup width="100%">
                    <ContactTextarea placeholder="Mensaje"></ContactTextarea>
                    <ContactLabel>{'Mensaje'}</ContactLabel>
                  </ContactFormGroup>
                  <ContactFormGroup width="100%">
                    <ContactFormButton>Enviar</ContactFormButton>
                  </ContactFormGroup>
                </ContactForm>
              </Col>
            </Row>
          </Container>
        </Contact>
      </Body>
    </main>
  )
}