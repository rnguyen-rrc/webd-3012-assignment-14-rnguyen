import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.section<{
  $imageUrl: string;
  $disabled?: boolean;
  $height?: string;
}>`
  position: relative;

  /* FULL WIDTH FIX */
  width: 100vw;
  margin-left: calc(-50vw + 50%);

  height: ${({ $height }) => $height || '420px'};

  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;

  /* REMOVE CARD LOOK */
  border-radius: 0;
  overflow: hidden;

  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
`;

const Overlay = styled.div<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  position: absolute;
  inset: 0;

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled
      ? 'rgba(200, 200, 200, 0.6)'
      : $backgroundColor || 'rgba(0, 0, 0, 0.5)'};
`;

const Content = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: 42px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;
  opacity: 0.9;
`;

const HeroImage = ({
  imageUrl,
  title,
  subtitle,
  backgroundColor,
  height,
  disabled = false,
}: HeroImageProps) => {
  return (
    <StyledHero
      data-testid="hero-wrapper"
      $imageUrl={imageUrl}
      $height={height}
      $disabled={disabled}
    >
      <Overlay $backgroundColor={backgroundColor} $disabled={disabled} />

      <Content>
        <Title style={{ fontSize: '42px', fontWeight: '700' }}>
          {title}
        </Title>

        <Subtitle style={{ fontSize: '18px', marginBottom: '20px' }}>
          {subtitle}
        </Subtitle>

        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '6px',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          View Portfolio
        </button>
      </Content>
    </StyledHero>
  );
};

export default HeroImage;