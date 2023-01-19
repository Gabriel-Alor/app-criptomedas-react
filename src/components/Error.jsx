import React from 'react'
import styled from '@emotion/styled'

const TextoError = styled.div`
    background-color: #B7322C;
    color: #fff;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;

`
function Error({ children }) {
  return (
    <TextoError>
      { children }
    </TextoError>
  )
}

export default Error
