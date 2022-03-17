import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const Footer = () => {

  return (
    <StyledFooter>
        <div>© {new Date().getFullYear()} | Powered by Toni PM</div>
    </StyledFooter>
  );
};

export default Footer;
