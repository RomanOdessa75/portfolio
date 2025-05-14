import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-full mdl:w-1/2 flex mdl:flex-col items-end justify-between mdl:justify-around text-white mdl:text-lg lg:text-xl">
      <h4 className="text-right mdl:mb-6">
        Alternatively, you can email
        <br />
        Roman.Ryabchinskiy@gmail.com
        <br />
        or give me a call at
        <br />
        (38) 0677156955
      </h4>
      <h4 className="text-right">
        Workshop Office
        <br />
        12, Gagarin ave.
        <br />
        65034 Odessa
        <br />
        Ukraine
      </h4>
    </div>
  );
};

export default ContactInfo;
