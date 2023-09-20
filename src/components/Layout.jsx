import isPropValid from "@emotion/is-prop-valid";
import React from "react";
import { StyleSheetManager, styled } from "styled-components";

export const Layout = ({ children }) => {
  return (
    <Container>
      <StyleSheetManager shouldForwardProp={isPropValid}>{children}</StyleSheetManager>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c1c1c;
`;
