import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Layout } from '@abhishek/core-components';
import React from 'react';

const AnimatedButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.5)' }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        background: 'linear-gradient(to right, #ff9966, #ff5e62)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.3)',
      }}
    >
      Return to homepage 
    </motion.button>
  );
};

const BioPage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Layout title='404 Error Page'>
        <h1 className="h1">
          404 - Page not found
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px', flexDirection: 'column', alignItems: 'center' }}>
          <img 
            src="/assets/thumbnails/404.jpg" 
            alt="404 error " 
            style={{ width: '100%', maxWidth: '400px', height: 'auto', marginBottom: '20px' }} 
          />
          <AnimatedButton />
        </div>
        <style jsx>{`
          @keyframes neon {
            0%, 100% {
              text-shadow: 
                0 0 4px #fff,
                0 0 10px #fff,
                0 0 20px #ff00ff,
                0 0 30px #ff00ff,
                0 0 40px #ff00ff,
                0 0 50px #ff00ff,
                0 0 60px #ff00ff;
              color: #fff;
            }
            50% {
              text-shadow: 
                0 0 2px #fff,
                0 0 5px #fff,
                0 0 10px #ff00ff,
                0 0 15px #ff00ff,
                0 0 20px #ff00ff,
                0 0 25px #ff00ff,
                0 0 30px #ff00ff;
              color: #ff00ff;
            }
          }

          .h1 {
            font-size: 2.5em;
            animation: neon 1.5s infinite alternate;
            color: #fff;
          }

          @media (max-width: 600px) {
            .h1 {
              font-size: 2em;
            }
            button {
              padding: 8px 16px;
              font-size: 14px;
            }
          }

          @media (min-width: 601px) and (max-width: 1024px) {
            .h1 {
              font-size: 2.2em;
            }
            button {
              padding: 9px 18px;
              font-size: 15px;
            }
          }

          @media (min-width: 1025px) {
            .h1 {
              font-size: 2.5em;
            }
            button {
              padding: 10px 20px;
              font-size: 16px;
            }
          }
        `}</style>
      </Layout>
    </div>
  );
};

export default BioPage;
