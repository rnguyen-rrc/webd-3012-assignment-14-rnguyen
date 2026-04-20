import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const FloatingWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', checkScroll);

    // ALSO check once on load
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (!visible) return null;

  return (
    <FloatingWrapper>
      <Button
        label="↑"
        backgroundColor="#000"
        color="#fff"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      />
    </FloatingWrapper>
  );
};

export default ScrollToTop;
