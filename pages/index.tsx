import Head from 'next/head';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '../styles/About.module.scss';

import Header from '../components/header';
import SectionCities from '../components/sectionCities';
import SectionCeo from '../components/sectionCeo';
import SectionTrophy from '../components/sectionTrophy';
import SectionMedia from '../components/sectionMedia';
import SectionGallery from '../components/sectionGallery';
import { gsap, ScrollTrigger } from '../components/animation';

export default function Home() {
  const mainRef = useRef(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const header = `.${styles.header}`;
      const heading = `.${styles.header__heading}`;
      const text = `.${styles.header__text}`;

      tlRef.current = gsap
        .timeline()
        .from(header, {
          duration: 0.5,
          opacity: 0,
        })
        .from(heading, {
          opacity: 0,
          y: 30,
          duration: 1,
        })
        .from(text, {
          opacity: 0,
          y: 30,
          duration: 1,
        });

      ScrollTrigger.create({
        trigger: mainRef.current,
        toggleActions: 'restart none restart none',
        animation: tlRef.current,
      });

      gsap.from(header, {
        duration: 0.5,
        scrollTrigger: {
          trigger: header,
          scrub: 1,
        },
        opacity: 0.99,
      });

      gsap.from(`.${styles.section_gallery__img_hands}`, {
        duration: 0.5,
        scrollTrigger: {
          trigger: `.${styles.section_gallery__img_hands}`,
          scrub: 1,
        },
        opacity: 0.5,
      });

      gsap.from(`.${styles.section_gallery}`, {
        duration: 0.5,
        scrollTrigger: {
          trigger: `.${styles.section_gallery}`,
          scrub: 1,
        },
        opacity: 0.5,
      });

      gsap.from(`.${styles.section_gallery__img_hands}`, {
        duration: 0.5,
        delay: 0.8,
        scrollTrigger: {
          trigger: `.${styles.section_gallery__img_hands}`,
          toggleActions: 'restart none restart none',
        },
        scale: 3,
        y: 100,
      });
    }, mainRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <Head>
        <title>About - Skyworld</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400&family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main className={styles.main} ref={mainRef}>
        <div className='content'>
          <div className={`${styles.section1}`}>
            <Header />
          </div>
          <div className={`${styles.section2}`}>
            <SectionCities />
          </div>
          <div className={`${styles.section3}`}>
            <SectionCeo />
          </div>
          <div className={`${styles.section4}`}>
            <SectionTrophy />
          </div>
          <div className={`${styles.section5}`}>
            <SectionMedia />
          </div>
          <div className={`${styles.section6}`}>
            <SectionGallery />
          </div>
        </div>
      </main>
    </>
  );
}
