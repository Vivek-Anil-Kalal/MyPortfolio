import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"
import Project from "../components/Project"
import { Login, Techblog, ai, project1, project2, project3, project4, project5, project6, project7, robot } from "../assets"

const Projects = () => {

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="projects" className="pt-24 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Behold, my collection of innovative and impactful projects.
        </p>
      </motion.div>


      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-2 sm:my-0 my-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* ROW 1 */}

          <div className="flex justify-center items-center text-center p-10 bg-red 
           max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="SocioPedia" projectDesc="SoicioPedia is a Social Media application(MERN) With posting content, likes the content , Drag n Drop , Dark/Light Theme You can add and remove friends in your list, Complete mobile responsive" proImage={project1} projectLink={"https://www.linkedin.com/posts/vivek-kalal-848397205_share-socialmedia-mode-activity-7048723183679475712-gDBP?utm_source=share&utm_medium=member_desktophttps://www.linkedin.com/posts/vivek-kalal-848397205_share-socialmedia-mode-activity-7048723183679475712-gDBP?utm_source=share&utm_medium=member_desktop"} projectVariant={projectVariant} />

          <Project title="LoginForm" projectDesc="This project involves building a secure login form application using MERN stack technologies, including password reset, recovery, OTP generation, and email messaging functionalities ..." proImage={Login} projectLink={"https://github.com/Vivek-Anil-Kalal/login_app"} projectVariant={projectVariant} />

          <Project title="GPT-3" projectLink={"https://chatgpt-3-orpin.vercel.app/"} projectDesc={"Modern UI in ReactJS."} proImage={ai} projectVariant={projectVariant} />

          {/* ROW 2 */}
          <Project title="TechBlog" projectDesc="TechBlog is a Blog site where user can read and posts the blogs related to tech. Also profile updating feature.. Completely made in java(Backend - JSP Servlets) , BootStrap." proImage={Techblog} projectLink={"https://github.com/Vivek-Anil-Kalal/TechBlog"} projectVariant={projectVariant} />

          <Project title="Bank Payment Form" proImage={robot} projectDesc="Bank Payment form is modern UI Web App . Created In React And TailwindCSS . This is the future of payment method and Web Application UI." projectLink={"https://github.com/Vivek-Anil-Kalal/Bank-Payment-Form"} projectVariant={projectVariant} />


          {/* ROW 2 */}
          <Project title="Yet To Come" proImage={project6} projectVariant={projectVariant} />
          <Project title="Yet To Come" proImage={project7} projectVariant={projectVariant} />

          <div className="flex justify-center items-center text-center p-10 bg-blue 
           max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects