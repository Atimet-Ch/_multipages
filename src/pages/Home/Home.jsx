import React, { useState } from "react";
import { FaFacebook, FaLine } from "react-icons/fa";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css"; // นำเข้า Bootstrap

function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <MainContent activeSection={activeSection} />
    </div>
  );
}

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <img src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/399450928_122104971776099659_6747682626573039095_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9hj0IwUaFKEQ7kNvgEYBQ7-&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&_nc_gid=AHJyMSXRdfc6LOesk4oP4TA&oh=00_AYBF6RwhyRBBVRCC7zNe88KA9Vi7PguSGZdS6eKWgzSvhQ&oe=671EC825" alt="Profile" className="profile-img"/>
      <h2>อติเมธ ไชยชนะ</h2>
      <p className="P-1">นักศึกษา มหาลัยศรีปทุม</p>

      <nav className="navbar">
        <ul>
          <li>
            <button
              className={`btn ${
                activeSection === "home"
                  ? "btn-outline-primary active-btn"
                  : "btn-outline-secondary"
              } btn-custom`}
              onClick={() => setActiveSection("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`btn ${
                activeSection === "skills"
                  ? "btn-outline-primary active-btn"
                  : "btn-outline-secondary"
              } btn-custom`}
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`btn ${
                activeSection === "work"
                  ? "btn-outline-primary active-btn"
                  : "btn-outline-secondary"
              } btn-custom`}
              onClick={() => setActiveSection("work")}
            >
              Work
            </button>
          </li>
        </ul>
      </nav>

      <div className="social-icons">
        <a
          href="https://www.facebook.com/atimet.n"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={32} />
        </a>
        <a
          href="https://line.me/ti/p/atimet123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLine size={32} />
        </a>
      </div>
    </div>
  );
}

function MainContent({ activeSection }) {
  return (
    <div className={`main-content ${activeSection}`}>
      <section id="home" className={activeSection === "home" ? "active" : ""}>
        <h1 className="title">About Me</h1>
        <p className="content">
          ชื่อ: อติเมธ ไชยชนะ <br />
          อายุ: 22 ปี <br />
          สัญชาติ: ไทย <br />
          เพศ: ชาย <br />
          อาชีพ: นักศึกษา <br />
          มหาวิทยาลัย: มหาลัยศรีปทุม <br />

        </p>
        <h1 className="title">Education</h1>
        <p className="content">
          ชั้น ประถมศึกษา: โรงเรียนวัดเทวสุนทร - จบปี 2557 <br />
          มัธยมศึกษา (ต้น): โรงเรียนสารวิทยา - จบปี 2560 <br />
          มัธยมศึกษา (ปลาย): โรงเรียนสารวิทยา - จบปี 2563 <br />
          มหาวิทยาลัย: มหาลัยศรีปทุม - กำลังศึกษา <br />
          คณะ เทคโนโลยีสารสนเทศ สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ (CSI)
        </p>
        <h1 className="title-home">My Interests & Hobbies</h1>
        <p className="content-home">
          <li className="content-list">การลงทุนในสินทรัพย์ เช่น กองทุน หุ้น กองทุน ฯลฯ ที่มีผลตอบแทนตามความเสี่ยงที่ดี</li>
          <li className="content-list">เล่นเกม และอยากลองเป็น คนสร้างคอนเทนต์ และการสร้างเกมในอนาคต</li>
        </p>
      </section>

      <section
        id="skills"
        className={activeSection === "skills" ? "active" : ""}
      >
        <h1 className="title">Skills</h1>
        <p className="content-home">Skills ที่มีและ กำลังเรียนรู้เพิ่มเติเมเพื่อเป็นทักษะในอนาคต
            <li className="content-list">UX-UI - 60%</li>
            <li className="content-list">HTML - 15%</li>
            <li className="content-list">CSS - 15%</li>
            <li className="content-list">Javascript - 5%</li>
            <li className="content-list">React - 5%</li>
            รวมเต็ม 100% ด้ายการเขียนโปรแกรม
            <li className="content-list">การปรับตัวในการทำงานกลุ่ม - 50%</li>
            <li className="content-list">การเข้าสังคมที่ไม่รู้จัก - 20%</li>
            <li className="content-list">การคุมอารมณ์ ความรู้สึก - 30%</li>
            รวมเต็ม 100% ด้ายการเข้าสังคม
        </p>
      </section>

      <section id="work" className={activeSection === "work" ? "active" : ""}>
        <h1 className="title">Work Experience</h1>
        <p className="content-home">เคย ทำงานกับร้านขายของ ที่เปิดบริเล็กๆ ช่วงที่ดรอปเรียน ตอน โค-วิด19 ทำเกี่ยวกับ<br />
            <li className="content-list">งานบริการลูกค้า </li>
            <li className="content-list">ดูแล ร้าน</li>
            <li className="content-list">ดูแล แพลตฟอร์มออนไลน์</li>
            <li className="content-list">กราฟิก(ออกแบบรูปสินค้า ป้าย ฯลฯ)</li>
        </p>   
      </section>
    </div>
  );
}

export default Home;
