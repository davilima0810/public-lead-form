import React from 'react';

import * as S from './styles';

import { InputHTMLAttributes, useEffect, useState } from "react";
import { ReactSVG } from 'react-svg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  assistiveText?: string;
  disabled?: boolean;
  iconLeft?: any;

  label?: string;
  required?: boolean;
  className?: string;
  type?: "number" | "text" | "password" | "time";
  iconPassword?: boolean;
  onClickInIconRight?: boolean;
  value?: string;
  maxLength?: number;
  initialValue?: any;

  handleOnChange?: (value: any) => any;
  handleOnFocus?: () => any;
  handleOnBlur?: () => any;
  iconRight?: any;
  onClickIconRight?: () => void;
  onClickIconLeft?: () => void;
  isSelect?: boolean;
  isError?: boolean;
}

const Input = ({
  label = "",
  assistiveText,
  iconLeft = "",
  iconPassword = false,
  value = "",
  handleOnBlur,
  handleOnFocus,
  isError,
  required,
  className,
  iconRight = "",
  onClickIconLeft,
  onClickIconRight,
  isSelect,
  disabled = false,
  initialValue,
  maxLength,
  ...rest
}: InputProps) => {
  return (
    <S.Container>
      <S.Title>{label}</S.Title>
      <S.InputMaterial placeholder={rest.placeholder} type={rest.type} {...rest}>
        {!!value && (isError ? (
          <ReactSVG
            src={"/assets/icons/x-red.svg"}
            wrapper="div"
            className="iconLeftBtn"
            aria-label="iconLabel"
            style={{marginRight: 10}}
          />
        ) :
        <ReactSVG
            src={"/assets/icons/check-green.svg"}
            wrapper="div"
            className="iconLeftBtn"
            aria-label="iconLabel"
            style={{marginRight: 10}}
          /> )}
      </S.InputMaterial>
    </S.Container>
  );
}

export default Input;