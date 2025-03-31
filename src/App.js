function App() {
  return (
    <main className="min-h-screen p-6 bg-white text-gray-900">
      <section className="max-w-3xl mx-auto space-y-6">
        {/* Name + Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">Harish Kumar</h1>
          <p className="text-lg text-gray-600">Software Developer</p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <p>📧 hxk32150@ucmo.edu</p>
          <p>📱 +1 913-326-7468</p>
        </div>

        <div className="text-center mt-4">
          <a
            href="/Resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
          📄 Download Resume
          </a>
        </div>


        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 gap-1 text-sm">
            <li>Java 8+, Spring Boot</li>
            <li>Microservices, REST APIs</li>
            <li>React, Angular</li>
            <li>AWS (EC2, S3, RDS)</li>
            <li>Kafka, Docker</li>
            <li>JUnit, Git, Agile</li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Investment Portfolio Management System</li>
            <li>Retail Management System</li>
            <li>Health Care Dashboard</li>
            <li>AWS Food Order & Password Manager</li>
            <li>Drunk & Drowsiness Detection using Raspberry Pi</li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Vanguard</strong> – Java Developer (Aug 2023 – Present)</li>
            <li><strong>TCS</strong> – Java Developer (Sep 2019 – Jul 2022)</li>
            <li><strong>Axness Technologies</strong> – Associate Software Developer (Jan 2019 – Aug 2019)</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <ul className="space-y-2 text-sm">
            <li>University of Central Missouri – M.S. in Computer Science</li>
            <li>MVSR Engineering College – B.E.</li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside text-sm">
            <li>AWS Cloud Developer Associate</li>
            <li>Oracle Certified Associate, Java SE 8 (OCAJP)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
