import { Layout } from '@abhishek/core-components';
import { en } from '@abhishek/i18n';
import { useEffect, useState } from 'react';
import styles from './CertificatesPage.module.scss';
import ShootingStar from '../../../libs/core-components/src/lib/layout/ShootingStar';
import ShiningStar from '../../../libs/core-components/src/lib/layout/ShiningStar';

const cv = () => {
  const [displayBanner, setDisplayBanner] = useState(false);

  const handleDownload = () => {
    // Logic to download resume PDF
    // Logic to apply effects to the image
    // For example:
    // document.querySelector('.img-fluid').classList.add('enlarged');
  };

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  return (
     <Layout wrapperClass="main-aboutpage" title='CV'>
      <section className="contact-area">
        <div className="container">
        <div className="about-details" data-aos="zoom-in">
            <h1 className="section-heading" data-aos="fade-up">
              
              <img src="/assets/star-2.png" alt="Star" className={styles.icon} />
              Hire Me
              <img src="/assets/star-2.png" alt="Star" className={styles.icon} />
            </h1>
            <br />
            <br />
          </div>
          <div className="gx-row d-flex justify-content-between gap-24">
            <div className="contact-infos">
            <ShootingStar />
              <h3 data-aos="fade-up">{en.contact.contact.heading}</h3>
              <ul className="contact-details">
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box">
                    <i className={en.contact.contact.mail.icon} />
                  </div>
                  <div className="right">
                    <span>{en.contact.contact.mail.heading}</span>
                    {en.contact.contact.mail.links.map((item, index) => (
                      <h4 key={index}>
                        <a href={`mailto:${item}`}>{item}</a>
                      </h4>
                    ))}
                  </div>
                </li>
                <li className="d-flex align-items-center" data-aos="zoom-in">
  <div className="icon-box shadow-box">
    <a
      href="https://calendly.com/abhishekpanthee5"
      target="_blank"
      rel="noreferrer noopener"
    >
      <i className={en.contact.contact.phone.icon} />
    </a>
  </div>
                  <div className="right">
                    <span>{en.contact.contact.phone.heading}</span>
                    {en.contact.contact.phone.links.map((item, index) => (
                      <h4 key={index}>
                        <a href={item.href}>{item.text}</a>
                      </h4>
                    ))}
                  </div>
                </li>
                <li className="d-flex align-items-center" data-aos="zoom-in">
                  <div className="icon-box shadow-box">
                    <i className={en.contact.contact.location.icon} />
                  </div>
                  <div className="right">
                    <span>{en.contact.contact.location.heading}</span>
                    <h4>{en.contact.contact.location.location}</h4>
                  </div>
                </li>
              </ul>
              <h3 data-aos="fade-up">{en.contact.profiles.heading}</h3>
              <ul className="social-links d-flex align-center" data-aos="zoom-in">
                <li>
                  <a className="shadow-box" href="https://github.com/abhishekpanthee" target="_blank" rel="noreferrer noopener">
                    <i className="iconoir-github" />
                  </a>
                </li>
                <li>
                  <a className="shadow-box" href="https://www.linkedin.com/in/abhishek-panthee" target="_blank" rel="noreferrer noopener">
                    <i className="iconoir-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <br />
              <br />
            <div className="c1-image-container" data-aos="zoom-in">
              <br />
              <br />
              <div className="image-wrapper">
                <img
                  src="/assets/cv.jpg" // Replace with actual C1 image URL
                  alt="C1 Vertebra"
                  className="img-fluid" // Ensures responsive image
                />
                <div className="image-overlay">
                <div className="download-button" style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px 0' // 20px top and bottom, 0 for left and right
}}>
  
                <ul className="social-links d-flex align-center" data-aos="zoom-in">
               <li>
                  <a className="shadow-box" href="https://abhishekpanthee.com.np/assets/AbhishekPantheeCV.pdf" target="_blank" rel="noreferrer noopener">
                  <i className="iconoir-attachment" />  
                  </a>
                </li>
              </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default cv;
