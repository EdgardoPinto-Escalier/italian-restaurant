import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton} from "../utilities";
import img from "../images/background/homeBackground.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="ITALIAN RESTAURANT" subtitle="Via Belviglieri 20 - Roma, Italy">
        <BannerButton style={{margin: '2rem auto'}}>
          MENU
        </BannerButton>
      </Banner>

    </HomeHeader>
  </Layout>
);



export default IndexPage
