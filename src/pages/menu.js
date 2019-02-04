import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utilities";
import menuImage from "../images/background/menuImage.jpg";

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img = {menuImage}>
      <Banner title="MENU" subtitle="Our award winning menu"/>
    </PageHeader>
  </Layout>
);

export default MenuPage;
