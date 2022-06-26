import React from "react";
import PageSection from "./PageSection";

import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Prodcuts = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 2,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "advanced electronics",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "robotics",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "payload to orbit",
      subtitle:
        "Fact from with my the i, this shadows soul i mien was of bird, raven till mien before by of. The lordly one fancy me not and croaking smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Products"
      subtitle={`Plainly lamplight whether evermore thereat tell, we or scarce bird spoken he whether on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite..`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{icon}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Prodcuts;
