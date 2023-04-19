import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    style={{ color: "black" }}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div style={{ color: "black" }} className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div style={{ color: "black" }} className="flex-1 flex flex-col ml-3">
      <h4
        style={{ color: "black" }}
        className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"
      >
        {title}
      </h4>
      <p style={{ color: "black" }} className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 style={{ color: "black" }} className={styles.heading2}>
        We Disrupt the
        <br style={{ color: "black" }} className="sm:block hidden" /> Recruitment Industry
      </h2>
      <p style={{ color: "black" }} className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our platform's latest blockchain technology ensures safe and secure transactions and interactions. Safeguarding
        job seekers' personal data and recruiters can trust that the candidates they are interacting with have valid and
        verified credentials.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div style={{ color: "black" }} className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
