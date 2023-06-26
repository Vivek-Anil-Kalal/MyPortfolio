import { motion } from "framer-motion"


function Project({ title, projectVariant, proImage, projectLink , projectDesc}) {

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30
     flex flex-col justify-center items-center text-center md:p-16 p-2 text-deep-blue cursor-pointer`

    //  title = Project 1 
    //  projectTitle = project-1 
    const projectTitle = title.toLowerCase()
    console.log(projectTitle);
    return (
        <motion.div variants={projectVariant} className="relative">

            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-3">{projectDesc}</p>
                <a href={projectLink} className="mt-5 px-10 py-2 border-2 font-bold hover:bg-blue hover:text-white transition duration-1000 rounded-xl border-sky-500" rel="noreferrer" target="_blank">Link</a>
            </div>

            <img src={`${proImage}`} alt={projectTitle} />
        </motion.div>
    )
}

export default Project