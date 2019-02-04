import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utilities";
import aboutImage from "../images/background/aboutImage.jpg";

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img = {aboutImage}>
      <Banner title="ABOUT US" subtitle="Our origins, our story, our products"/>
    </PageHeader>
  </Layout>
);

export default AboutPage;
