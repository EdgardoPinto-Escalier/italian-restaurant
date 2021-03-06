import React from 'react';
import styled from "styled-components";
import { styles } from "../utilities";

export default function Banner({title, subtitle, children}) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.white};
    font-size: 3rem;
    ${styles.letterSpacing({ spacing: '0.55rem'})};
  }

  .subtitle {
    color: ${styles.colors.white};
    //${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.15rem'})};
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

Banner.defaultProps = {
  title: 'default title',
}
