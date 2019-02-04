import styled from "styled-components";
import {styles} from "../utilities";

const BannerButton = styled.button`
display: block;
color: ${styles.colors.white};
background: transparent;
padding: 0.5rem 1rem;
text-transform: uppercase;
font-size: 1.5rem;
letter-spacing: 0.5rem;
font-weight: 700;
${styles.border({ color:`${styles.colors.white}` })};
margin-bottom: 1rem;
${styles.transition({})};
&:hover {
  background: ${styles.colors.white};
  color: ${styles.colors.black};
  cursor: pointer;
}
`;

export { BannerButton }