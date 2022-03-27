import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  flex-direction: column;
  height: auto;
  min-height: 30px;
  padding: 20px;
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <div>© {new Date().getFullYear()} | Powered by <a className='default' href='https://tonipm.com'>Toni PM</a></div>
    </StyledFooter>
  )
}

export default Footer
