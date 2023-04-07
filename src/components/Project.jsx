import { motion } from "framer-motion"


function Project({ title, projectVariant , proImage}) {

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30
     flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`

    //  title = Project 1 
    //  projectTitle = project-1 
    const projectTitle = title.toLowerCase()
    console.log(projectTitle);
    return (
        <motion.div variants={projectVariant} className="relative">

            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">Beneath the flickering streetlights, a stray cat darted across the empty alleyway, its eyes glowing in the darkness.</p>
            </div>

            <img src={`${proImage}`} alt={projectTitle} />
        </motion.div>
    )
}

export default Project