import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const FloatingWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
