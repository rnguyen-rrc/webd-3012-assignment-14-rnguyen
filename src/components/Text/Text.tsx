import styled from 'styled-components';
import type { TextProps } from './Text.types';

const StyledText = styled.p<{
  $backgroundColor?: string;
  $fontSize?: string;
  $color?: string;
  $disabled?: boolean;
}>`
  font-size: ${({ $fontSize }) => $fontSize || '14px'};

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};

  color: ${({ $color, $disabled }) => ($disabled ? '#666' : $color || '#444')};

  line-height: 1.5;
  margin: 0;
`;

const Text = ({
  text,
  fontSize,
  color,
  backgroundColor,
  disabled,
}: TextProps) => {
  return (
    <StyledText
      $fontSize={fontSize}
      $color={color}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
    >
      {text}
    </StyledText>
  );
};

export default Text;
