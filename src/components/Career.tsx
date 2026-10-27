import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Information Science</h4>
                <h5>Bapuji Institute of Engineering &amp; Technology</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing Bachelor of Engineering (2023–2027) in Davanagere with a CGPA of 8.95. Strong coursework in Data Structures, DBMS, OOP, Operating Systems, Computer Networks, Full Stack Web Development, and AIML Technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SIH Qualifier &amp; SWC Secretary</h4>
                <h5>Leadership &amp; Hackathons</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Qualified at college level in Smart India Hackathon (SIH) 2025 solving real-world problem statements. Served as Go Green Discipline Secretary in the Student Welfare Council (SWC) leading 10+ campus initiatives for 500+ students, and elected Class Representative.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-University (PCMB)</h4>
                <h5>Sai Niketan PU College, Jamkhandi</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed Pre-University education (2021–2023) with 94.5% distinction in Physics, Chemistry, Mathematics, and Biology, mastering analytical problem solving and scientific fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SSLC (CBSE)</h4>
                <h5>BLDE Associations Public School</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Secured 78.5% in 10th standard CBSE board examinations with solid academic foundations in mathematics and science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
