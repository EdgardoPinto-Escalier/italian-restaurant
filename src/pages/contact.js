import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utilities";
import contactImage from "../images/background/contactImage.jpg";

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img = {contactImage}>
      <Banner title="CONTACT US" subtitle="Let's get in touch"/>
    </PageHeader>
  </Layout>
);

export default ContactPage;
