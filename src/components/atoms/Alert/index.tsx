import React, { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react';

import * as S from './styles';

import { ReactSVG } from 'react-svg';

interface alertProps {
  message: string,
  typeAlert: string
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconLeft?: string,
  iconLeftActive?: string,
  alertType?: string,
  onClose: Dispatch<SetStateAction<alertProps>>;
}

const Alert : React.FC<ButtonProps> = ({
  children,
  iconLeftActive,
  iconLeft,
  alertType = 'success',
  onClose,
  ...rest
}) => {
  return (
    !!children && (
      <S.Wrapper style={{backgroundColor: alertType === 'success' ? '#B0CC48' : '#CC0000' }}>
        <span className={`button Alert--text`}>{children}</span>
        <ReactSVG
            src={'/assets/icons/x.svg'}
            wrapper="div"
            className="iconRight"
            aria-label="iconLabel"
            onClick={() => onClose({ message: '', typeAlert: ''})}
          />
      </S.Wrapper>
    )
  );
}

export default Alert;