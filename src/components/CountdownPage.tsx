import React, { FC, useState } from 'react';
//Components
import Countdown from 'react-countdown';
import './CountdownStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { IoLogoFacebook, IoLogoPinterest, IoLogoInstagram } from "react-icons/io";

const CountdownPage: FC = () => {
    const [targetDate, setTargetDate] = useState(new Date().getTime() + 8 * 24 * 60 * 60 * 1000);

    const handleComplete = () => {
      const newTargetDate = new Date(targetDate + 8 * 24 * 60 * 60 * 1000);
      setTargetDate(newTargetDate.getTime());
    };

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
          <Row className='w-75'>
            <Col xs={3} className='px-3 text-center d-flex flex-column align-items-center gap-3'>
              <Container>
                <h2 className='display-1 cs-fc-red'>{String(days).padStart(2, '0')}</h2>
              </Container>
              <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Days</h2>
            </Col>
            <Col xs={3} className='px-3 text-center d-flex flex-column align-items-center gap-3'>
              <Container>
                <h2 className='display-1 cs-fc-red'>{String(hours).padStart(2, '0')}</h2>
              </Container>
              <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Hours</h2>
            </Col>
            <Col xs={3} className='px-3 text-center d-flex flex-column align-items-center gap-3'>
              <Container>
                <h2 className='display-1 cs-fc-red'>{String(minutes).padStart(2, '0')}</h2>
              </Container>
              <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Minutes</h2>
            </Col>
            <Col xs={3} className='px-3 text-center d-flex flex-column align-items-center gap-3'>
              <Container>
                <h2 className='display-1 cs-fc-red'>{String(seconds).padStart(2, '0')}</h2>
              </Container>
              <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Seconds</h2>
            </Col>
          </Row>
        );
    };
      
    return (
        <Container fluid className='cs-bg-image min-vh-100 d-flex flex-column align-items-center justify-content-around gap-5'>
            <h1 className='h2 cs-ls text-white text-uppercase'>We're launching soon</h1>
            <Countdown
                date={targetDate}
                renderer={renderer}
                onComplete={handleComplete}
            />
            <ButtonGroup size="lg">
              <Button className='cs-btn bg-transparent border-0'><IoLogoFacebook /></Button>
              <Button className='cs-btn bg-transparent border-0'><IoLogoPinterest /></Button>
              <Button className='cs-btn bg-transparent border-0'><IoLogoInstagram  /></Button>
            </ButtonGroup>
        </Container>
    );
}

export default CountdownPage;
