import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Sales and Marketing Manager"
              company="Sydney Watercraft Centre"
              companyLink="https://sydneywatercraft.com.au"
              time="2022-2023"
              address="Sydney, Australia"
              work="Co-ordinated all aspects of marketing from digital to direct to consumer marketing, 
              in order to generate new sales and service leads whilst maintaining and engaging current clients and followers"
            />

            <Details
              position="Human Resources Coordinator"
              company="McCabes Lawyers"
              companyLink="https://mccabes.com.au"
              time="2021-2022"
              address="Sydney, Australia."
              work="Worked in a team responsible for Human Resources in a medium sized law firm Collaborating with HR Advisor,
              key stakeholders, and the team to execute HR administration activities and core processes ."
            />

            <Details
              position="Sales and Marketing Manager"
              company="Ray White Northbridge"
              companyLink="https://raywhite.com"
              time="2018-2021"
              address="Sydney, Australia."
              work="Lead, coached and motivated a high-performing sales team to drive business development and successfully close sales. Sets weekly, 
              monthly and annual goals and develops new customer acquisition campaigns across multiple media platforms.
              Maintains strategic alliances with other Ray White offices, Ray White Marine and key stakeholders and industry partners."
            />

            <Details
              position="Waverunner Sales Manager"
              company="Sydney Watercraft Centre"
              companyLink="https://sydneywatercraft.com.au"
              time="2012 - 2018"
              address="Sydney, Australia."
              work="Held responsibility for Yamaha Waverunner sales and service departments working in a small cross functional team .
              Managed solid relationships with manufacturers and key stakeholders, and engaged and negotiated with customers to ensure optimal service and satisfaction. 
              Executed marketing campaigns, including seasonal promotions, social media marketing and industry networking."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
