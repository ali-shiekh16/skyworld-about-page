import React from 'react';
import Button from './button';
import Container from './container';
import styles from '../styles/About.module.scss';
import { useLayoutEffect, useRef } from 'react';

import { gsap, ScrollTrigger } from '../components/animation';

function SectionCeo() {
  const mainRef = useRef(null);

  const tlRef = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ceoHeading = `.${styles.section_ceo__heading}`;
    const ceoContainer = `.${styles.section_ceo}`;
    const ceoTextName = `.${styles.section_ceo__text_name}`;
    const ceoTextRole = `.${styles.section_ceo__text_role}`;
    const ceoButton = `.${styles.section_ceo__button}`;

    const context = gsap.context(() => {
      tlRef.current = gsap
        .timeline()
        .set(ceoTextName, { opacity: 0, y: 100 })
        .set(ceoTextRole, { opacity: 0, y: 100 })
        .set(ceoButton, { opacity: 0 })
        .fromTo(
          ceoHeading,
          { fontSize: '18rem' },
          { fontSize: '7rem', delay: 1.5, duration: 0.8 }
        )
        .from(ceoContainer, { background: 'none' })
        .to(ceoTextName, { opacity: 1, y: 0, duration: 0.7 })
        .to(ceoTextRole, { opacity: 1, y: 0, duration: 0.7 }, '<')
        .to(ceoButton, { opacity: 1, duration: 0.7 });

      gsap.from(mainRef.current, {
        duration: 0.5,
        scrollTrigger: {
          trigger: mainRef.current,
          scrub: 1,
        },
        opacity: 0,
      });

      ScrollTrigger.create({
        trigger: ceoContainer,
        toggleActions: 'restart none restart none',
        animation: tlRef.current,
        start: '30% bottom',
        end: 'bottom bottom',
      });
    }, mainRef);

    return () => context.revert();
  }, []);

  return (
    <section className={`${styles.section_ceo} ${styles.block}`} ref={mainRef}>
      <Container>
        <div className={styles.section_ceo__content}>
          <h2
            className={`${styles.gradient_text} ${styles.section_ceo__heading} `}
          >
            MEET
            <br />
            THE CEO
          </h2>
          <p className={styles.section_ceo__text_name}>Lee Chang Seng</p>
          <p className={styles.section_ceo__text_role}>
            Chief Executive Officer
          </p>
          <div className={styles.section_ceo__button}>
            <Button text1='The Man Behind' text2='the Scenes' />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionCeo;