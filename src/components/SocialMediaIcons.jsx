import React from 'react'
import { github, instagram, linkedin, twitter } from '../assets'

const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start sm:my-10 my-2 gap-7'>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/vivek-kalal-848397205/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={linkedin} alt="linkedin" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/vivekkalal20/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={instagram} alt="instagram" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://twitter.com/AyaanSh50111305?t=EdLYUswlscNkvoLP4PiX9A&s=09"
                target="_blank"
                rel="noreferrer"
            >
                <img src={twitter} alt="twitter" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/Vivek-Anil-Kalal"
                target="_blank"
                rel="noreferrer"
            >
                <img src={github} alt="github" width="30px"/>
            </a>
        </div>
    )
}

export default SocialMediaIcons