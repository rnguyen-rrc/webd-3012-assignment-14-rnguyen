import styled from 'styled-components';
import type { LabelProps } from './Label.types';

const StyledLabel = styled.span<{
  $backgroundColor?: string;
  $color?: string;
  $fontSize?: string;
  $disabled?: boolean;
}>`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 6px;

  font-size: ${({ $fontSize }) => $fontSize || '12px'};

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || '#f1f1f1'};

  color: ${({ $color, $disabled }) => ($disabled ? '#666' : $color || '#333')};

  white-space: nowrap;

  transition: all 0.2s ease-in-out;
`;

const Label = ({
  text,
  color,
  backgroundColor,
  fontSize,
  disabled = false,
}: LabelProps) => {
  return (
    <StyledLabel
      aria-disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
      $fontSize={fontSize}
      $disabled={disabled}
    >
      {text}
    </StyledLabel>
  );
};

export default Label;
