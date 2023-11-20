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
        pageName="Its never too late"
        description="You are here for a reason"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
