import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  height: 52px;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const Logo = styled.h1`
  display: inline-block;
  line-height: 52px;
  padding-left: 20px;
  font-size: 25px;
  font-weight: bold;
`;

const MenuListContainer = styled.ul`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`;
const MenuContainer = styled.li`
  float: left;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderContainer>
      <MenuListContainer>
        <MenuContainer>
          <Label to="/posts">글</Label>
        </MenuContainer>
        <MenuContainer>
          <Label>
            <a
              to="https://www.linkedin.com/in/%EC%84%9D%EC%A7%84-%EA%B3%A0-a0a5a5128/"
              target="_blank"
            >
              링크드인
            </a>
          </Label>
        </MenuContainer>
      </MenuListContainer>
    </HeaderContainer>
  );
}

export default Header;
