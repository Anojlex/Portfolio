

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

const Navbar = () => {
  const fileUrl = "/Anoj-Resume.pdf";

  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-14" src={logo} alt="" /> */}
        {/* <img width="30" height="30" src="https://img.icons8.com/water-color/50/a.png" alt="a"/> */}
       
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/Anojlex">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anoj-k-jayan-235373125/">
          <FaLinkedin />
        </a>

        <SiReaddotcv
          title="Download CV" // Tooltip added here
          onClick={() => {
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "Anoj-CV.pdf"; // The name of the file after download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
          }}
          className="cursor-pointer text-blue-600"
        />

       
      </div>
    </nav>
  );
};

export default Navbar;
