import React, { useEffect, useState } from 'react';
import Button from './button';
import Container from './container';
import styles from '../styles/About.module.scss';
import { useLayoutEffect, useRef } from 'react';

import { gsap, ScrollTrigger } from '../components/animation';

function SectionTrophy() {
  const win = global || {};
  const breakpoint = 768;
  const [width, setWidth] = useState(win?.innerWidth);
  const [videoDuration, setVideoDuration] = useState(2.0);
  const [isPlayed, setIsPlayed] = useState(false);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(win?.innerWidth);
      const duration: number = width < breakpoint ? 0 : 2.5;
      setVideoDuration(duration);
    };

    win?.addEventListener('resize', handleResizeWindow);

    return () => {
      win?.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const mainRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tlRef = useRef<gsap.core.Timeline>();
  const heading = `.${styles.section_trophy__heading}`;
  const button = `.${styles.section_trophy__button}`;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      tlRef.current = gsap.timeline();

      videoDuration &&
        tlRef.current.to(videoRef.current, {
          duration: videoDuration,
          onUpdate() {
            if (!isPlayed) {
              videoRef.current && videoRef.current.play();
              setIsPlayed(true);
            }
          },
        });

      tlRef.current.from(heading, {
        opacity: 0,
        duration: 1,
        delay: 1,
        y: 50,
      });

      tlRef.current.from(button, {
        opacity: 0,
        duration: 1,
        x: -50,
      });

      gsap.to(mainRef.current, {
        scrollTrigger: {
          trigger: mainRef.current,
          scrub: true,
          start: '10% top',
        },
        opacity: 0,
      });

      ScrollTrigger.create({
        trigger: mainRef.current,
        toggleActions: 'restart none restart none',
        animation: tlRef.current,
      });
    }, mainRef);

    return () => context.revert();
  }, [videoDuration, isPlayed]);

  return (
    <section
      className={`${styles.section} ${styles.section_trophy} ${styles.block}`}
      ref={mainRef}
    >
      <Container center>
        <div className={styles.section_trophy__wrapper}>
          <img
            src='/trophy.png'
            alt='A beautiful golden trophy.'
            className={styles.section_trophy__img}
          />
          <video
            className={styles.section_trophy__video}
            autoPlay
            ref={videoRef}
          >
            <source src='/trophy.mp4' />
            Your browser does not support HTML video.
          </video>
          <div className={styles.section_trophy__content}>
            <h2
              className={`${styles.gradient_text} ${styles.section_trophy__heading}`}
            >
              AWARDS & ACCOLADES
            </h2>
            <div className={styles.section_trophy__button}>
              <Button text1='Take a walk through' text2='our Hall of Fame' />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionTrophy;
