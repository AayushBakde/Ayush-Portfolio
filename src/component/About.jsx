import React from 'react';

function About() {
  return (
    <div
      name="About Us"
      className="max-w-screen-2xl bg-gradient-to-b from-[#5B21B6] to-[#7C3AED] container mx-auto px-4 md:px-20 pt-10 pb-14"
    >
      {/* ✨ Gradient Heading */}
      <h2 className="text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#00DBDE] via-[#FC00FF] to-[#00DBDE] drop-shadow-xl mb-10">
        👨‍💻 About Me
      </h2>

      {/* 📝 Summary */}
      <p className="text-white/90 leading-relaxed text-sm md:text-base mb-10">
        👋 Hi, I’m <span className="font-semibold text-white">Ayush</span> — a passionate Web Developer skilled in
        React.js, JavaScript, HTML5, CSS3, and backend technologies like PHP and MySQL. I’m currently learning Node.js
        and MongoDB to become a full-stack developer. I’m looking for opportunities to grow, build impactful products,
        and collaborate with experienced teams.
      </p>

      {/* 📚 Education */}
      <div className="space-y-8 text-white/90 text-sm md:text-base">
        <div>
          <h1 className="text-pink-300 font-semibold text-xl mb-1">🎓 Education</h1>
          <p>
            Masters in Computer Appliciation <br />
            LJ University<br />
            Passed Out: 2025 <br />
            Relevant Subjects: Mobile & Web Development
          </p>
        </div>

        {/* 🛠️ Skills */}
        <div>
          <h1 className="text-pink-300 font-semibold text-xl mb-1">🛠️ Skills</h1>
          <p>HTML | CSS | JavaScript | React JS | Tailwind CSS | MySQL | GitHub | Node Js</p>
        </div>

        {/* 💼 Experience */}
        <div>
          <h1 className="text-pink-300 font-semibold text-xl mb-1">💼 Professional Experience</h1>
          <p>
            Intern – Mobile & Web App (React Native) <br />
            App Developers India, Ahmedabad <br />
            🗓️ Jun 2025 – Sep 2025 <br />
            <br />
            <strong>Key Responsibilities:</strong><br />
            • Developed responsive and dynamic UI components using React.js, HTML, and CSS<br />
            • Worked closely with UI/UX designers to convert Figma designs into live web pages<br />
            • Improved code reusability and performance using component-based architecture
          </p>
        </div>

        {/* 🎯 Goal */}
        <div>
          <h1 className="text-pink-300 font-semibold text-xl mb-1">🎯 Career Goal</h1>
          <p>To become a skilled full-stack developer and work on real-world applications with modern tech stacks.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
