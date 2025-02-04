import React, { FC, useEffect, useState } from 'react';
//Components
import FlipCard from './FlipCard.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
//Spring
import { useTransition, animated } from '@react-spring/web';

interface CountdownClockProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownClock: FC<CountdownClockProps> = ({ days, hours, minutes, seconds }) => {
  return (
      <Row className='cs-w'>
        <Col xs={3} className='text-center px-0 d-flex flex-column align-items-center justify-content-between gap-3 position-relative'>
          <FlipCard value={days} />
          <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Days</h2>
        </Col>
        <Col xs={3} className='text-center px-0 d-flex flex-column align-items-center justify-content-between gap-3 position-relative'>
          <FlipCard value={hours} />
          <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Hours</h2>
        </Col>
        <Col xs={3} className='text-center px-0 d-flex flex-column align-items-center justify-content-between gap-3 position-relative'>
          <FlipCard value={minutes} />
          <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Minutes</h2>
        </Col>
        <Col xs={3} className='text-center px-0 d-flex flex-column align-items-center justify-content-between gap-3 position-relative'>
          <FlipCard value={seconds} />
          <h2 className='h6 cs-fc-blue cs-ls text-uppercase'>Seconds</h2>
        </Col>
      </Row>
    );
  };

  export default CountdownClock;