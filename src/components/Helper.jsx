import { Capital, Committed, Decode, Industry } from "./Icon";

export const navLink = [
  { title: "Home", path: "#Home" },
  { title: "About Us", path: "#AboutUs" },
  { title: "What We Do", path: "#WhatWeDo" },
  { title: "Why Choose Us", path: "#WhyChooseUs" },
  { title: "Reviews", path: "#Reviews" },
];
export const expertise = [
  { title: "CREATE", image: "/assets/expertise/create.png" },
  { title: "Multiply", image: "/assets/expertise/multiply.png" },
  { title: "PRESERVE", image: "/assets/expertise/preserve.png" },
];
export const whatsCard = [
  {
    discripstion:
      "We decode the intricacies of the markets by harnessing a blend of on-chain metrics, technical analysis and fundamental insights. This approach empowers us to stay one step ahead, enabling us to execute with confident competence.",
    image: <Decode />,
  },
  {
    discripstion:
      "At AMX Capital, we don't just invest - we protect. Our robust risk management strategy acts as a shield for your capital, ensuring a secure journey even in the face of market turbulence.",
    image: <Capital />,
  },
  {
    discripstion:
      "We are committed to delivering tailored solutions that precisely meet our clients' individual needs, addressing considerations such as expected returns and risk tolerance. We identify our clients future liquidity requirements and long term goals, we then select a risk profile that best aligns with the specific objectives of each client.",
    image: <Committed />,
  },
  {
    discripstion:
      "In an industry rooted in tradition, AMX Capital stands out with a bold spirit of innovation. We bring a dynamic perspective to the conventional, ensuring your investments not only survive but thrive.",
    image: <Industry />,
  },
];
