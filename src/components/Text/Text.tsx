import styled from 'styled-components';

const StyledText = styled.p<{
  $backgroundColor?: string;
  $size?: string;
  $color?: string;
  $weight?: string;
  $disabled?: boolean;
}>`
  font-size: ${({ $size }) => $size || '14px'};
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};
  color: ${({ $color, $disabled }) => ($disabled ? '#666' : $color || '#444')};
  font-weight: ${({ $weight }) => $weight || 'normal'};
  line-height: 1.5;
  margin: 0;
`;

type TextProps = {
  text: string;
  size?: string;
  color?: string;
  weight?: string;
  disabled?: boolean;
};

const Text = ({ text, size, color, weight, disabled }: TextProps) => {
  return (
    <StyledText
      $size={size}
      $color={color}
      $weight={weight}
      $disabled={disabled}
    >
      {text}
    </StyledText>
  );
};

export default Text;
