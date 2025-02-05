import React, { FC, useState, useEffect } from 'react';
//Components
import Countdown from 'react-countdown';
import CountdownClock from './CountdownClock.tsx';
import './CountdownStyle.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';
//Icons
import { IoLogoFacebook, IoLogoPinterest, IoLogoInstagram } from "react-icons/io";

const CountdownPage: FC = () => {
  const savedTargetDate = localStorage.getItem('targetDate');
  const initialTargetDate = savedTargetDate
    ? parseInt(savedTargetDate)
    : new Date().getTime() + 8 * 24 * 60 * 60 * 1000;

  const [targetDate, setTargetDate] = useState<number>(initialTargetDate);

  useEffect(() => {
    const now = new Date().getTime();

    if (!savedTargetDate || targetDate <= now) {
      const newTargetDate = now + 8 * 24 * 60 * 60 * 1000;
      setTargetDate(newTargetDate);
      localStorage.setItem('targetDate', newTargetDate.toString());
    }
  }, [targetDate, savedTargetDate]);

  const handleComplete = () => {
    const newTargetDate = new Date(targetDate + 8 * 24 * 60 * 60 * 1000).getTime();
    setTargetDate(newTargetDate);
    localStorage.setItem('targetDate', newTargetDate.toString());
  };

  const renderer = ({ days, hours, minutes, seconds }) => {    
    return (
      <CountdownClock 
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  };
      
  return (
      <Container fluid className='cs-bg-image min-vh-100 d-flex flex-column align-items-center justify-content-around gap-5'>
          <span className='mt-5 d-flex flex-column align-items-center w-100'>
          <h1 className='h2 cs-ls text-white text-uppercase text-center my-5'>We're launching soon</h1>
          <Countdown
              date={targetDate}
              renderer={renderer}
              onComplete={handleComplete}
          />
          </span>
          <ButtonGroup size="lg">
            <Button className='cs-btn bg-transparent border-0'><IoLogoFacebook /></Button>
            <Button className='cs-btn bg-transparent border-0'><IoLogoPinterest /></Button>
            <Button className='cs-btn bg-transparent border-0'><IoLogoInstagram  /></Button>
          </ButtonGroup>
      </Container>
  );
}

export default CountdownPage;
