import React from 'react';
import styles from '../styles/About.module.scss';
import Button from './button';

import { useLayoutEffect, useRef } from 'react';

import { gsap, ScrollTrigger } from '../components/animation';

function SectionMedia() {
  const mainRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const mediaImage = `.${styles.section_media__img}`;
      const heading = `.${styles.section_media__heading}`;
      const text = `.${styles.section_media__text}`;
      const button = `.${styles.section_media__button}`;

      tlRef.current = gsap
        .timeline()
        .from(mediaImage, {
          x: '50%',
          delay: 0.2,
        })
        .fromTo(
          mediaImage,
          {
            width: '50%',
            height: '50%',
          },
          {
            width: '100%',
            height: '100%',
            delay: 0.4,
          }
        )
        .from(heading, {
          y: 20,
          opacity: 0,
        })
        .from(text, {
          y: 20,
          opacity: 0,
        })
        .from(button, {
          opacity: 0,
        });

      gsap.from(mainRef.current, {
        duration: 0.5,
        scrollTrigger: {
          trigger: mainRef.current,
          scrub: 1,
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
  });

  return (
    <section
      className={`${styles.section} ${styles.section_media}`}
      ref={mainRef}
    >
      <div className={styles.section_media__content}>
        <h2
          className={`${styles.gradient_text} ${styles.section_media__heading}`}
        >
          Media
          <br /> Lab
        </h2>
        <p className={styles.section_media__text}>
          Eager to keep up to date on the latest SkyWorld Events? With a click
          of a button go through our various programs or latest developments,
          there’s always something going on.
        </p>
        <div className={styles.section_media__button}>
          <Button text1={`Find out what we've`} text2='been upto!' />
        </div>
      </div>
      <div className={styles.section_media__img_container}>
        <img
          className={styles.section_media__img}
          src='/media.png'
          alt='A huge concert in a stadium.'
        />
      </div>
    </section>
  );
}

export default SectionMedia;
