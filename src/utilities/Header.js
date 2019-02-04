import React from 'react';
import styled from "styled-components";
import img from "../images/background/homeBackground.jpg";

function HomeHeader({img, children}) {
  return (
    <IndexHeader img = {img}>
      {children}
    </IndexHeader>
  )
}

function PageHeader({ img, children }) {
  return (
    <DefaultHeader img={img}>
      {children}
    </DefaultHeader>
  )
}

const IndexHeader = styled.header`
min-height:calc(100vh - 71px);
background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
url(${props => props.img})center/cover fixed no-repeat;
display: flex;
justify-content: center;
align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
min-height: 60vh;
`

// Default prop in case there is a problem or error with the image. This way the image will always show.
HomeHeader.defaultProps = {
  img:img,
}

PageHeader.defaultProps = {
  img: img,
}


export { HomeHeader, PageHeader }
