import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../animations";
import { projectsProps } from "../constants/projects";
import classnames from "classnames";

// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard: React.FC<{ project: projectsProps; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.min(index * 0.15, 1.5), 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <svg className="w-1/2 h-1/2" fill="white" viewBox="0 0 24 24">
                <path d="M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7v2H5v16h14v-7h2z M15 2h7v7h-2V4.41L13.41 11 12 9.59 18.59 3H15V2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white text-start font-bold text-[24px]">
            {project.name}
          </h3>
          <p className="mt-2 text-secondary text-start text-[14px]">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={classnames("text-[14px]", tag.color)}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work?
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects presented here exemplify my skills and expertise by
          showcasing real-world instances of my work. Each project is concisely
          described and accompanied by links to code repositories and live
          demos. They serve as a testament to my proficiency in solving
          intricate problems, collaborating with diverse technologies, and
          effectively managing projects.
        </motion.p>
      </div>

      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Works, "");
