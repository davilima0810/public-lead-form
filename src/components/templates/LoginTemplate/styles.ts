import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const Grid1 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex: 1;

  background-image: url('/assets/img/back_login.png');
  background-repeat: no-repeat;
  background-color: black;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-background-position: center;
  background-position: center;
  background-position-x: center;
  background-position-y: center;
`;

export const Grid2 = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  padding: 25px 12%;
  /* padding: 25%; */

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const Title = styled.h1`
  justify-self: flex-start;
  font-weight: 400;
  font-size: 3rem;
  margin: 1rem 0rem;
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ::after {
    width: 100%;
  }
`;

export const LogoUnimed = styled.image`
  width: 100%;
  height: 100%;
`;
