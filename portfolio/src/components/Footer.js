import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../../../../../Desktop/personal-website-master/personal-website-master/src/assets/img/odina2.png";
import navIcon1 from "../../../../../Desktop/personal-website-master/personal-website-master/src/assets/img/nav-icon1.svg";
import navIcon2 from "../../../../../Desktop/personal-website-master/personal-website-master/src/assets/img/nav-icon2.svg";
import navIcon3 from "../../../../../Desktop/personal-website-master/personal-website-master/src/assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="portfolio/src/components/Footer#"><img src={navIcon1} alt="Icon" /></a>
              <a href="portfolio/src/components/Footer#"><img src={navIcon2} alt="Icon" /></a>
              <a href="portfolio/src/components/Footer#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
