import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Vision-11",
  description: "We are more than happy to hear from you",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="We are glad you found us"
        description="And we&apos;d like to find you"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
