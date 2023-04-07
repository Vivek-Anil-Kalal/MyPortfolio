import { skills } from "../assets"
import LineGradient from "../components/LineGradient"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
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
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        My <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        These are some of my Areas where I can help you up.
                    </p>
                </motion.div>

                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img
                                className="z-10"
                                src={skills}
                                alt="skills"
                            />

                        </div>
                    ) : (
                        <img
                            className="z-10"
                            src={skills}
                            alt="skills"
                        />
                    )}
                </div>
            </div>

            {/* SKILLS */}

            <div className="md:flex md:justify-between mt-16 gap-32">
                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >

                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Experience</p>
                        </div>
                        <div className="w-1/2 md:w/3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        As someone with more than one year of experience in web development and three years of experience in core Java, I have developed a strong foundation in programming and possess excellent knowledge in both areas. Having participated in a hackathon and worked on ReactJS, I have gained practical experience and a deeper understanding of web development technologies. I feel confident in my ability to solve complex problems, write efficient and scalable code, and work collaboratively with a team of developers.
                    </p>
                </motion.div>

                {/* EXPERIENCE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >

                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w/3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        As an innovative individual, I am constantly seeking out new and creative ways to approach challenges and achieve success. One example of my innovative thinking is demonstrated through my creation of a TechBlog Website that boasts strong functionalities and an innovative UI design. In addition to my technical skills, I am also constantly generating new business ideas that I believe can be successfully implemented. 
                    </p>
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    // this shows thas 0.5(50%) jab ye div viewport par ayga tab once ye animation chalega
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >

                    <div className="relative h-32">
                        <div className="z-10">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                        <div className="w-1/2 md:w/3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
                    </div>
                    <p className="mt-5">
                        As an imaginative person, I am always seeking out new ideas and ways of thinking that can help me approach challenges in unique and creative ways. I have a natural curiosity about the world around me and enjoy staying up to date on current events and trends, often using this knowledge to fuel my imagination and brainstorm new possibilities. When faced with a particular situation or problem, I find myself naturally imagining different scenarios and outcomes, constantly exploring what could be done differently or better. 
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default MySkills