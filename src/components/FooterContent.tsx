import React from "react";
import TitleWithDivider from "./TitleWithDivider";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FooterLogo from "./FooterLogo";

export default function FooterContent() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between space-y-10">
      <TitleWithDivider />
      <div className="flex flex-col mdl:flex-row justify-between">
        <ContactForm />
        <ContactInfo />
      </div>
      <FooterLogo />
    </div>
  );
}
