import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Mypic, ProfilePic, profileImage } from "../assets"
import SocialMediaIcons from '../components/SocialMediaIcons.jsx'

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 "
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              className="hover:filter transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] rounded-t-[100%]"
              src={ProfilePic}
              alt="profile"
            />

          </div>
        ) : (
          <img
            className="hover:filter transition duration-500 z-10 w-full max-w-[300px] md:max-w-[400px] rounded-t-[100%]"
            src={ProfilePic}
            alt="profile"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Vivek {" "}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute 
                 before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Kalal
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            My name is Vivek Kalal, and I am a full-stack web developer with expertise in the MERN stack. I am currently pursuing my B.Tech in Parul University and have been passionate about coding for several years. I take pride in my ability to develop user-friendly and intuitive web applications, paying attention to even the smallest details. As a coding enthusiast, I am always eager to learn and take on new challenges, striving to stay up-to-date with the latest web development trends and technologies. I believe that my strong work ethic and problem-solving skills make me a valuable asset to any team.</p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
             hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"
            >
              Let's Talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section >
  )
}

export default Landing