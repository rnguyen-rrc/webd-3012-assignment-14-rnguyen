import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.section<{
  $imageUrl?: string;
  $disabled?: boolean;
  $height?: string;
}>`
  position: relative;

  width: 100%;
  margin: 0;

  /* Supports both fixed hero + auto layout */
  min-height: ${({ $height }) => $height || 'auto'};

  background-image: ${({ $imageUrl }) =>
    $imageUrl ? `url(${$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;

  overflow: hidden;

  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
`;

const Overlay = styled.div<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  position: absolute;
  inset: 0;

  pointer-events: none;

  background: ${({ $backgroundColor, $disabled }) =>
    $disabled ? 'rgba(200, 200, 200, 0.6)' : $backgroundColor || 'transparent'};
`;

const Content = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 100%;

  padding: 40px 20px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h1`
  margin: 0 0 12px 0;
  font-size: 42px;
  font-weight: 700;
  color: inherit;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;
  opacity: 0.9;
  color: inherit;
`;

const HeroImage = ({
  imageUrl,
  title,
  subtitle,
  backgroundColor,
  height,
  disabled = false,
  children,
}: HeroImageProps & { children?: React.ReactNode }) => {
  return (
    <StyledHero
      data-testid="hero-wrapper"
      $imageUrl={imageUrl}
      $height={height}
      $disabled={disabled}
    >
      {(backgroundColor || disabled) && (
        <Overlay $backgroundColor={backgroundColor} $disabled={disabled} />
      )}

      <Content>
        <Inner>
          {children ? (
            children
          ) : (
            <>
              {title && <Title>{title}</Title>}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
            </>
          )}
        </Inner>
      </Content>
    </StyledHero>
  );
};

export default HeroImage;
