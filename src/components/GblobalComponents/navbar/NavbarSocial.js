import React, { Component } from 'react';
import styled from "styled-components";
import { styles } from "../../../utilities";
import {FaInstagram, FaTwitter, FaFacebook} from "react-icons/fa";

export default class NavbarSocial extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebookIcon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitterIcon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagramIcon" />,
        path: "https://www.instagram.com",
      },
    ],
  }
  render() {
    return (
      <SocialWrapper>
        {
          this.state.icons.map(item => {
            return (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            );
          })
        }
      </SocialWrapper>
    )
  }
}

const SocialWrapper = styled.div`
.icon {
  font-size: 1.3rem;
  cursor: pointer;
  ${styles.transitionFunction()};
}

.facebookIcon, .twitterIcon, .instagramIcon {
  color: ${styles.colors.black}
}

.icon:hover {
  color: ${styles.colors.grey};
}

display: none;

@media (min-width: 768px) {
  display: flex;
  width: 18rem;
  justify-content: space-around;
}
`

