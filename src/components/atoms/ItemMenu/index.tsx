import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

import { ReactSVG } from 'react-svg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconLeft?: string,
  iconLeftActive?: string,
  active?: boolean
}

const ItemMenu : React.FC<ButtonProps> = ({
  active = false,
  children,
  iconLeftActive,
  iconLeft,
  ...rest
}) => {
  const icon : string | undefined = active ? iconLeftActive : iconLeft;

  return (
    <S.Wrapper
      className="button--wrapper"
      {...rest}
    >
      {!!iconLeft && (
        <ReactSVG
          src={icon ? icon : ''}
          wrapper="div"
          className="iconRight"
          aria-label="iconLabel"
        />
      )}
      <span className={`button ItemMenu--text ${active && 'active'}`} style={{fontSize: 25, fontWeight: 400}}>

      {children}</span>
    </S.Wrapper>
  );
}

export default ItemMenu;