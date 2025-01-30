'use client';
import React from 'react';

import * as S from './styles';
import ItemMenu from '@/components/atoms/ItemMenu';

import { useRouter } from "next/navigation";

const Sidebar = ({
  children
} : {
  children: React.ReactNode,
}) => {
  const route = useRouter();

  const menuItems = [
    {
      label: 'Leads',
      iconLeftActive: '/assets/icons/home-active.svg',
      iconLeft: '/assets/icons/home-active.svg',
      active: true,
      onClick: () => route.push('/leads'),
    },
    {
      label: 'Settings',
      iconLeftActive: '/assets/icons/user.svg',
      iconLeft: '/assets/icons/user.svg',
      onClick: () => route.push('/leads'),
    },
  ];

  return (
    <S.Wrapper>
      <S.BarLeft>
        <S.ImageLogo src={"/assets/img/alma-logo.png"} />
        <S.BarLeftOption>
          <S.listSidebar>
          {menuItems.map((item, index) => (
            (
              <li key={index}>
                <ItemMenu
                  iconLeftActive={item.iconLeftActive}
                  iconLeft={item.iconLeft}
                  active={item.active}
                  onClick={item.onClick}
                >
                  {item.label}
                </ItemMenu>
              </li>
            )
          ))}
          </S.listSidebar>
          <S.listSidebar>
          <li>
            <ItemMenu
              iconLeftActive='/assets/icons/alert-triangle.svg'
              iconLeft='/assets/icons/alert-triangle.svg'
              onClick={()=>route.push("/dashboard/suport")}
            >
                Admin
            </ItemMenu>
          </li></S.listSidebar>
        </S.BarLeftOption>
      </S.BarLeft>
      <S.ContainerRight>
        {children}
      </S.ContainerRight>
    </S.Wrapper>
  );
}

export default Sidebar;