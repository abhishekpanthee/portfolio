import React, { useEffect, useRef } from 'react';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        const containerWidth = iframeRef.current.offsetWidth;
        const aspectRatio = 9 / 16; // 16:9 aspect ratio
        iframeRef.current.style.height = `${containerWidth * aspectRatio}px`;
      }
    };

    resizeIframe();

    window.addEventListener('resize', resizeIframe);

    return () => {
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);

  return (
    <div ref={iframeRef} style={{ width: '100%', position: 'relative', backgroundColor: 'black', padding: '20px' }}>
  <iframe
    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&showinfo=0`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  ></iframe>
</div>

  );
};

export default YouTubeVideo;
