import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { fadeIn, textVariant } from "../animations";
import { servicesProps } from "../constants/services";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
  index: number;
  service: servicesProps;
}

// eslint-disable-next-line react-refresh/only-export-components
const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  service: { title, icon },
}) => {
  return (
    <div>
      <Tilt
        className="xs:w-[250px] w-full"
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]  flex justify-evenly items-center flex-col">
            <img src={icon} alt="" className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] text-center cursor-default">
              {title.split("\n")[0]}
              <br /> {title.split("\n")[1]}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        As an AI/ML Developer with a strong focus on building intelligent,
        data-driven solutions, I specialize in developing scalable AI
        applications that solve complex real-world challenges. My expertise
        spans machine learning, deep learning, MLOps, and data science, with
        hands-on experience in leveraging frameworks like TensorFlow, PyTorch,
        and Hugging Face. I have a proven track record of creating advanced
        solutions, from LLM-powered chatbots and image recognition systems to
        data pipelines and real-time analytics. I am skilled in deploying AI
        models on cloud platforms (AWS, GCP, Azure) and building automated MLOps
        pipelines for efficient model management. My passion lies in integrating
        AI with modern software architectures to enhance performance and
        usability. Whether it's NLP, computer vision, or generative AI, I am
        dedicated to delivering impactful solutions that drive innovation and
        business growth.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center grow">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} service={service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
