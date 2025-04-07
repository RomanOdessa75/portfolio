// Services.tsx
import React from "react";
import MyServices from "./MyServices";
import Earth from "@/components/Earth";

const Services = () => {
  return (
    <div className="relative z-10">
        <MyServices />
      </div>
    // <section className="relative w-full min-h-screen">
    //  {/* <div className="relative z-20">
    //     <h2 className="text-4xl md:text-7xl lg:text-8xl lg:px-10 py-10 md:py-16 lg:py-20">My Services</h2>
    //   </div> */}
    //   {/* <div className="absolute inset-0 z-0 flex items-center justify-center">
    //     <Earth />
    //   </div> */}
    //   <div className="relative z-10">
    //     <MyServices />
    //   </div>
    // </section>
  );
};

export default Services;

//----------------------

// // Services.tsx (серверный компонент)
// import React from "react";
// import MyServices from "./MyServices"; // Импорт клиентского компонента
// import Earth from "@/components/Earth"; // Импорт адаптированного клиентского компонента

// const Services = () => {
//   return (
//     <section className="relative w-full min-h-screen">
//       {/* Фоновая 3D модель Земли */}
//       <div className="absolute inset-0 z-0 flex items-center justify-center">
//         <Earth />
//       </div>
      
//       {/* Основной контент */}
//       <div className="relative z-10">
//         <MyServices />
//       </div>
//     </section>
//   );
// };

// export default Services;