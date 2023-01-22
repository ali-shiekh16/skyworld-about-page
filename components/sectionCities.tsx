import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styles from '../styles/About.module.scss';
import Button from './button';

import { gsap, ScrollTrigger } from '../components/animation';

function SectionCities() {
  const mainRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const content = `.${styles.section_cities__content}`;

      tlRef.current = gsap
        .timeline()
        .to(videoRef.current, {
          duration: 4,
          onUpdate() {
            videoRef.current && videoRef.current.play();
          },
        })
        .from(content, { opacity: 0, y: 30, duration: 1.5 });

      gsap.to(mainRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: mainRef.current,
          scrub: 1,
          start: '20% top',
          end: '90% top',
        },
      });

      ScrollTrigger.create({
        trigger: mainRef.current,
        toggleActions: 'restart none restart none',
        animation: tlRef.current,
      });
    }, mainRef);

    return () => context.revert();
  }, []);

  return (
    <section
      className={`${styles.section}  ${styles.block} ${styles.section_cities}`}
      ref={mainRef}
    >
      <div className={styles.section_cities__content}>
        <h2 className={styles.section_cities__heading}>Transforming Cities</h2>
        <Button text1='Discover what' text2='Skyworld is all about' />
      </div>

      <video className={styles.section_cities__video} ref={videoRef}>
        <source src='/cities.mp4' />
        Your browser does not support HTML video.
      </video>
    </section>
  );
}

export default SectionCities;
