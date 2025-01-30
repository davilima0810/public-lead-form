import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

import { ReactSVG } from 'react-svg';

export type ThemeButton =
  | "primary"
  | "info"
  | "danger"
  | "success"
  | "warning"
  | "octopus"
  | "gray"
  | "secondary";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  themeButton?: ThemeButton
  children: React.ReactNode;
  iconLeft?: string
}

const Button : React.FC<ButtonProps> = ({themeButton, children, iconLeft, ...rest}) => {
  return (
    <S.Wrapper
      className="button--wrapper"
      {...rest}
    >
      {!!iconLeft && (
        <ReactSVG
          src={iconLeft}
          wrapper="div"
          className="iconRight"
          aria-label="iconLabel"
        />
      )}
      <span className="button button--text">{children}</span>
    </S.Wrapper>
  );
}

export default Button;