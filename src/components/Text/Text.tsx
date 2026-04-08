import styled from 'styled-components';

const StyledText = styled.p<{
  $size?: string;
  $color?: string;
  $weight?: string;
}>`
  font-size: ${({ $size }) => $size || '14px'};
  color: ${({ $color }) => $color || '#444'};
  font-weight: ${({ $weight }) => $weight || 'normal'};
  line-height: 1.5;
  margin: 0;
`;

type TextProps = {
  text: string;
  size?: string;
  color?: string;
  weight?: string;
};

const Text = ({ text, size, color, weight }: TextProps) => {
  return (
    <StyledText $size={size} $color={color} $weight={weight}>
      {text}
    </StyledText>
  );
};

export default Text;
