"use client"
import { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';

const Dependency = () => {

  useEffect(() => {

    // Dynamically import Bootstrap JS to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {

    }).catch((err) => {
      console.error('Project loading ...:', err);
    });
  }, []);

  return (
    <>
      <ScrollToTop 
        symbol={<i className="fal fa-long-arrow-up"></i>}
        showAt={100}
        easing="easeInOutSine"
        style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 999 }}
      />
    </>
  );
};

export default Dependency;