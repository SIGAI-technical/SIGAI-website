"use client";

import { useState } from "react";

type Member = {
  name: string;
  role: string;
  branch: string;
  initials: string;
};

type YearData = {
  faculty: Member[];
  students: Member[];
};

const teamData: Record<string, YearData> = {
  "Core 2025-26": {
    faculty: [
      {
        name: "Faculty Coordinator",
        role: "Faculty Coordinator",
        branch: "SIGAI",
        initials: "FC",
      },
    ],
    students: [
      {
        name: "Student Name 1",
        role: "President",
        branch: "AI & ML",
        initials: "S1",
      },
      {
        name: "Student Name 2",
        role: "Vice President",
        branch: "CSE",
        initials: "S2",
      },
      {
        name: "Student Name 3",
        role: "Technical Lead",
        branch: "AI & ML",
        initials: "S3",
      },
      {
        name: "Student Name 4",
        role: "Event Lead",
        branch: "CSE",
        initials: "S4",
      },
      {
        name: "Student Name 5",
        role: "Design Lead",
        branch: "IT",
        initials: "S5",
      },
      {
        name: "Student Name 6",
        role: "Content Lead",
        branch: "CSE",
        initials: "S6",
      },
      {
        name: "Student Name 7",
        role: "Research Lead",
        branch: "AI & ML",
        initials: "S7",
      },
      {
        name: "Student Name 8",
        role: "Operations Lead",
        branch: "CSE",
        initials: "S8",
      },
    ],
  },

  "Core 2024-25": {
    faculty: [
      {
        name: "Faculty Coordinator",
        role: "Faculty Coordinator",
        branch: "SIGAI",
        initials: "FC",
      },
    ],
    students: [
      {
        name: "Student Name 1",
        role: "President",
        branch: "CSE",
        initials: "S1",
      },
      {
        name: "Student Name 2",
        role: "Technical Lead",
        branch: "AI & ML",
        initials: "S2",
      },
      {
        name: "Student Name 3",
        role: "Event Lead",
        branch: "CSE",
        initials: "S3",
      },
      {
        name: "Student Name 4",
        role: "Design Lead",
        branch: "IT",
        initials: "S4",
      },
      {
        name: "Student Name 5",
        role: "Content Lead",
        branch: "CSE",
        initials: "S5",
      },
      {
        name: "Student Name 6",
        role: "Research Lead",
        branch: "AI & ML",
        initials: "S6",
      },
    ],
  },

  "Core 2023-24": {
    faculty: [
      {
        name: "Faculty Coordinator",
        role: "Faculty Coordinator",
        branch: "SIGAI",
        initials: "FC",
      },
    ],
    students: [
      {
        name: "Student Name 1",
        role: "President",
        branch: "CSE",
        initials: "S1",
      },
      {
        name: "Student Name 2",
        role: "Technical Lead",
        branch: "AI & ML",
        initials: "S2",
      },
      {
        name: "Student Name 3",
        role: "Event Lead",
        branch: "CSE",
        initials: "S3",
      },
      {
        name: "Student Name 4",
        role: "Design Lead",
        branch: "IT",
        initials: "S4",
      },
      {
        name: "Student Name 5",
        role: "Content Lead",
        branch: "CSE",
        initials: "S5",
      },
    ],
  },
};

const years = Object.keys(teamData);

function MemberCard({
  member,
  index,
  faculty = false,
}: {
  member: Member;
  index: number;
  faculty?: boolean;
}) {
  return (
    <article
      className={`member-card ${faculty ? "faculty-card" : ""}`}
      style={{
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div className="card-shine" />

      <div className="member-top">
        <div className="avatar">
          <span>{member.initials}</span>
          <div className="avatar-ring" />
        </div>

        <div className="member-number">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <div className="member-info">
        <div className="member-role">{member.role}</div>

        <h3>{member.name}</h3>

        <p>{member.branch}</p>
      </div>

      <div className="card-footer">
        <span>{faculty ? "FACULTY" : "CORE TEAM"}</span>

        <span className="arrow">↗</span>
      </div>
    </article>
  );
}

export default function Team() {
  const [activeYear, setActiveYear] = useState("Core 2025-26");

  const currentTeam = teamData[activeYear];

  return (
    <>
      <style>{`
        .team-section {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 120px 6%;
          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(0, 170, 255, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(150, 60, 255, 0.12),
              transparent 30%
            ),
            #05070b;
          color: #fff;
        }

        .team-section *,
        .team-section *::before,
        .team-section *::after {
          box-sizing: border-box;
        }

        /* Animated grid */
        .team-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.035) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
        }

        /* Floating lights */
        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }

        .orb-one {
          width: 280px;
          height: 280px;
          top: 5%;
          left: -100px;
          background: rgba(0, 180, 255, 0.14);
          animation: floatOne 9s ease-in-out infinite alternate;
        }

        .orb-two {
          width: 320px;
          height: 320px;
          right: -130px;
          top: 35%;
          background: rgba(140, 50, 255, 0.12);
          animation: floatTwo 10s ease-in-out infinite alternate;
        }

        .orb-three {
          width: 220px;
          height: 220px;
          bottom: -100px;
          left: 40%;
          background: rgba(255, 190, 50, 0.08);
          animation: floatThree 8s ease-in-out infinite alternate;
        }

        .team-container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 0 auto;
        }

        /* Heading */
        .team-heading {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 65px;
          animation: fadeUp 0.8s ease forwards;
        }

        .team-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          color: #b8b8b8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          backdrop-filter: blur(12px);
        }

        .label-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00c8ff;
          box-shadow: 0 0 15px #00c8ff;
          animation: pulse 1.8s infinite;
        }

        .team-heading h2 {
          margin: 24px 0 18px;
          font-size: clamp(46px, 7vw, 82px);
          line-height: 0.95;
          letter-spacing: -4px;
          font-weight: 900;
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #fff,
            #8e8e8e,
            #fff
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: textShine 5s linear infinite;
        }

        .team-heading p {
          max-width: 650px;
          margin: auto;
          color: #858991;
          font-size: 16px;
          line-height: 1.8;
        }

        /* Year navigation */
        .year-navigation {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 65px;
          padding: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(20px);
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .year-button {
          position: relative;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 14px 25px;
          border-radius: 12px;
          background: transparent;
          color: #777;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1px;
          transition: all 0.35s ease;
        }

        .year-button:hover {
          color: #fff;
        }

        .year-button.active {
          color: #fff;
          background: rgba(255,255,255,0.08);
          box-shadow:
            inset 0 0 20px rgba(255,255,255,0.03),
            0 0 25px rgba(0,180,255,0.08);
        }

        .year-button.active::after {
          content: "";
          position: absolute;
          left: 20%;
          right: 20%;
          bottom: -1px;
          height: 2px;
          border-radius: 20px;
          background: linear-gradient(
            90deg,
            transparent,
            #00c8ff,
            transparent
          );
          box-shadow: 0 0 12px #00c8ff;
        }

        /* Section titles */
        .sub-heading {
          display: flex;
          align-items: center;
          gap: 18px;
          margin: 0 0 28px;
        }

        .sub-heading::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.12),
            transparent
          );
        }

        .sub-heading span {
          color: #e8e8e8;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .faculty-section {
          margin-bottom: 70px;
        }

        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        /* Member grid */
        .member-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Cards */
        .member-card {
          position: relative;
          min-height: 310px;
          padding: 26px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.075),
              rgba(255,255,255,0.025)
            );
          backdrop-filter: blur(18px);
          opacity: 0;
          transform: translateY(35px);
          animation: cardAppear 0.65s ease forwards;
          transition:
            transform 0.45s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease,
            background 0.45s ease;
        }

        .member-card:hover {
          transform: translateY(-12px);
          border-color: rgba(0,200,255,0.38);
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.11),
              rgba(255,255,255,0.035)
            );
          box-shadow:
            0 25px 70px rgba(0,0,0,0.55),
            0 0 35px rgba(0,180,255,0.08);
        }

        .member-card::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          top: -80px;
          right: -60px;
          border-radius: 50%;
          background: rgba(0,200,255,0.12);
          filter: blur(50px);
          transition: 0.6s ease;
        }

        .member-card:hover::before {
          transform: scale(2);
          opacity: 0.8;
        }

        .card-shine {
          position: absolute;
          inset: -100%;
          pointer-events: none;
          background: linear-gradient(
            120deg,
            transparent 40%,
            rgba(255,255,255,0.08) 50%,
            transparent 60%
          );
          transform: translateX(-50%);
          transition: transform 0.8s ease;
        }

        .member-card:hover .card-shine {
          transform: translateX(50%);
        }

        .member-top {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          z-index: 2;
        }

        .avatar {
          position: relative;
          width: 82px;
          height: 82px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.16),
              rgba(255,255,255,0.03)
            );
          border: 1px solid rgba(255,255,255,0.18);
          color: #fff;
          font-size: 21px;
          font-weight: 900;
          box-shadow:
            inset 0 0 25px rgba(255,255,255,0.03),
            0 0 25px rgba(0,180,255,0.04);
          transition: 0.45s ease;
        }

        .member-card:hover .avatar {
          transform: scale(1.08) rotate(5deg);
          border-color: rgba(0,200,255,0.55);
          box-shadow:
            0 0 30px rgba(0,200,255,0.15),
            inset 0 0 25px rgba(255,255,255,0.06);
        }

        .avatar-ring {
          position: absolute;
          inset: -7px;
          border: 1px solid rgba(0,200,255,0.18);
          border-radius: 50%;
          border-top-color: rgba(0,200,255,0.8);
          animation: spin 5s linear infinite;
        }

        .member-number {
          color: #4f555e;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .member-info {
          position: relative;
          z-index: 2;
          margin-top: 28px;
        }

        .member-role {
          color: #00c8ff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .member-info h3 {
          margin: 8px 0 8px;
          font-size: 21px;
          line-height: 1.2;
          font-weight: 850;
        }

        .member-info p {
          margin: 0;
          color: #737983;
          font-size: 13px;
        }

        .card-footer {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #555b64;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .arrow {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50%;
          color: #888;
          font-size: 15px;
          transition: 0.35s ease;
        }

        .member-card:hover .arrow {
          transform: rotate(-45deg);
          background: #fff;
          border-color: #fff;
          color: #000;
        }

        .faculty-card {
          min-height: 250px;
        }

        .faculty-card .avatar {
          border-color: rgba(255,205,70,0.35);
        }

        .faculty-card:hover {
          border-color: rgba(255,205,70,0.35);
        }

        .faculty-card .member-role {
          color: #ffd34e;
        }

        /* Bottom line */
        .team-bottom-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-top: 80px;
          color: #454a52;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .bottom-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00c8ff;
          box-shadow: 0 0 10px #00c8ff;
        }

        /* Animations */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatOne {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(80px, 50px);
          }
        }

        @keyframes floatTwo {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(-70px, 80px);
          }
        }

        @keyframes floatThree {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(80px, -50px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(0.7);
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes textShine {
          to {
            background-position: 200% center;
          }
        }

        /* Tablet */
        @media (max-width: 1050px) {
          .member-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .faculty-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 750px) {
          .team-section {
            padding: 85px 5%;
          }

          .team-heading h2 {
            letter-spacing: -2px;
          }

          .year-navigation {
            width: 100%;
            overflow-x: auto;
            justify-content: flex-start;
          }

          .year-button {
            flex: 0 0 auto;
            white-space: nowrap;
            padding: 13px 18px;
          }

          .member-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .faculty-grid {
            grid-template-columns: 1fr;
          }

          .member-card {
            min-height: 290px;
            padding: 20px;
          }

          .card-footer {
            left: 20px;
            right: 20px;
          }

          .avatar {
            width: 68px;
            height: 68px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .member-grid {
            grid-template-columns: 1fr;
          }

          .team-heading h2 {
            font-size: 43px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .member-card,
          .team-heading {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .orb,
          .avatar-ring,
          .gradient-text {
            animation: none;
          }
        }
      `}</style>

      <section className="team-section" id="team">

        <div className="team-grid" />

        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        <div className="team-container">

          {/* HEADER */}
          <div className="team-heading">

            <div className="team-label">
              <span className="label-dot" />
              SIGAI COMMUNITY
            </div>

            <h2>
              Meet the{" "}
              <span className="gradient-text">
                Minds
              </span>
            </h2>

            <p>
              The passionate students and faculty who turn
              ideas into innovation, research and real-world
              artificial intelligence solutions.
            </p>

          </div>

          {/* YEAR SELECTOR */}
          <div className="year-navigation">

            {years.map((year) => (
              <button
                key={year}
                className={`year-button ${
                  activeYear === year ? "active" : ""
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            ))}

          </div>

          {/* FACULTY */}
          <div className="faculty-section">

            <div className="sub-heading">
              <span>FACULTY COORDINATORS</span>
            </div>

            <div className="faculty-grid">

              {currentTeam.faculty.map((member, index) => (
                <MemberCard
                  key={`${activeYear}-faculty-${member.name}`}
                  member={member}
                  index={index}
                  faculty
                />
              ))}

            </div>

          </div>

          {/* STUDENTS */}
          <div>

            <div className="sub-heading">
              <span>CORE STUDENT TEAM</span>
            </div>

            <div className="member-grid">

              {currentTeam.students.map((member, index) => (
                <MemberCard
                  key={`${activeYear}-${member.name}`}
                  member={member}
                  index={index}
                />
              ))}

            </div>

          </div>

          {/* FOOTER */}
          <div className="team-bottom-line">
            <span className="bottom-dot" />
            BUILD • LEARN • INNOVATE
            <span className="bottom-dot" />
          </div>

        </div>
      </section>
    </>
  );
}