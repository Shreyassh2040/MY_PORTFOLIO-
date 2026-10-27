import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Smart City Assistance",
    category: "Full Stack Civic Platform",
    tools: "HTML, CSS, JavaScript, Node.js, Express.js, MySQL, JWT, bcrypt",
    image: "/images/smart_city.jpg",
    link: "https://github.com/Shreyassh2040",
  },
  {
    title: "DocuMind RAG System",
    category: "Generative AI & LLMs",
    tools: "Python, LangChain, Google Gemini, FAISS, Streamlit, pypdf",
    image: "/images/documind.jpg",
    link: "https://github.com/Shreyassh2040",
  },
  {
    title: "SIH 2025 Solution",
    category: "Smart India Hackathon",
    tools: "React.js, Node.js, Express.js, REST API, MySQL, Team Collaboration",
    image: "/images/sih_hackathon.jpg",
    link: "https://github.com/Shreyassh2040",
  },
  {
    title: "GenAI Chatbot Engine",
    category: "AI & Fine-Tuning",
    tools: "Generative AI, LangChain, LLMs, Fine Tuning, Streamlit, AWS",
    image: "/images/genai_chatbot.jpg",
    link: "https://github.com/Shreyassh2040",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
