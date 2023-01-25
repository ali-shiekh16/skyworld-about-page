import React from 'react';
import styles from '../styles/About.module.scss';
import Button from './button';

function SectionGallery() {
  const renderGalleryContent = () => {
    return (
      <>
        <div className={styles.section_gallery__content}>
          <div className={styles.section_gallery__heart_wrapper}>
            <img
              src='/heart.svg'
              alt='A heart illustration.'
              className={styles.section_gallery__heart}
            />
          </div>
          <p className={styles.section_gallery__text}>
            What started as a simple act of charity by Datuk Ng Thien Phing has
            grown into a full-blown program that has helped improve the lives of
            thousands within our community, and we don’t plan on stopping
            anytime soon.
          </p>

          <div className={styles.section_gallery__button}>
            <Button text1='See how we help' text2='communities' />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section
        className={`${styles.section} ${styles.block} ${styles.section_gallery}`}
      >
        <div className={styles.section_gallery__images_desktop}>
          {renderGalleryContent()}
          <img src='/1.png' className={styles.section_gallery__img_1} />
          <img src='/2.png' className={styles.section_gallery__img_2} />
          <img src='/3.png' className={styles.section_gallery__img_3} />
          <img src='/41.png' className={styles.section_gallery__img_4} />
          <img src='/5.png' className={styles.section_gallery__img_5} />
          <img
            src='/hands2.png'
            className={styles.section_gallery__img_hands}
          />
          <img src='/72.png' className={styles.section_gallery__img_7} />
          <img src='/8.png' className={styles.section_gallery__img_8} />
          <img src='/91.png' className={styles.section_gallery__img_9} />
        </div>
      </section>

      <div className={styles.section_gallery__images_mobile}>
        <div className={styles.section_gallery__content}>
          <div className={styles.section_gallery__heart_wrapper}>
            <img
              src='/heart.svg'
              alt='A heart illustration.'
              className={styles.section_gallery__heart}
            />
          </div>
          <p className={styles.section_gallery__text}>
            What started as a simple act of charity by Datuk Ng Thien Phing has
            grown into a full-blown program that has helped improve the lives of
            thousands within our community, and we don’t plan on stopping
            anytime soon.
          </p>

          <div className={styles.section_gallery__button}>
            <Button text1='See how we help' text2='communities' />
          </div>
        </div>
        <div className={styles.section_gallery__text_img_container}></div>
      </div>
    </>
  );
}

export default SectionGallery;
