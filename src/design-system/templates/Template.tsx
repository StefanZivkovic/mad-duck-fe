import React from 'react';
import styled from '@emotion/styled';
import {Div} from '../atoms/Div';

export const PageTemplate: React.FC<{children: any}> = (props) => {
  return (
    <BackgroundDiv>
      <Div padding='30px 5% 100px'>
        <HeaderStyled>
          <img alt='logo' />
        </HeaderStyled>
        <main>{props.children}</main>
      </Div>

      <FooterStyled>Frontend Task | Mad Duck Code</FooterStyled>
    </BackgroundDiv>
  );
};

const BackgroundDiv = styled.div`
  overflow-y: auto;
  height: 100vh;
  background-image: url('Mask Group 1.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(10, 84, 95, 1);
`;

const HeaderStyled = styled.header`
  padding: 0 0 20px 0;
  max-width: 20%;
`;

const FooterStyled = styled.footer`
  background-color: #04353c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 50px;
  bottom: 0px;
  width: 100%;
`;
