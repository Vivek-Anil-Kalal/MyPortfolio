import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="sm:mt-0 mt-28 h-max bg-red xs:pt-10 pt-4">
      <div className="w-10/12 mx-auto justify-center">
        <div className="justify-center">
          <SocialMediaIcons />
        </div>
        <div className="md:flex justify-center flex-col gap-2 text-center ">
          <p className="font-playfair font-semibold md:text-4xl text-2sxl text-yellow">
            VIVEK KALAL
          </p>
          <p className="font-playfair md:text-2xl text-xl text-md text-yellow">
            ©2022 VIVEK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;