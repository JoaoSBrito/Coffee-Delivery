import { forwardRef, InputHTMLAttributes } from "react";
import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
  RegularText,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled ref={ref} {...props} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText>{error}</RegularText>}
      </InputWrapper>
    );
  }
);
