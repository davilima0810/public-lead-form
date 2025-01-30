import Image from 'next/image';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #FFF;
`;


export const BarLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  height: 100vh;
  background-color: #F7F6F9;
  padding: 3.4rem;
`;

export const BarLeftOption = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

`

export const ContainerRight = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  padding: 4rem 2.5rem;
`

export const BarTop = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  margin-bottom: 3rem;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
`

export const SubTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 300;
`

export const DivProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 20%;
  height: 100%;
`

export const ButtonProfile = styled.button`
  gap: 1rem;
  border: none;
  cursor: pointer;
  width: 4.2rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: left;
  background-color: transparent;
`

export const Profile = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  border: 3px solid #DFDFDF;
  background-image: url('/assets/img/perfil.png');

  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-background-position: center;
  background-position: center;
  background-position-x: center;
  background-position-y: center;
`

export const ImageLogo = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 3rem;
`;

export const listSidebar = styled.ul`

  li {
    list-style-type: none;
  }
`;
