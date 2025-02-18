import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, ArrowLeft } from 'lucide-react';

// Class Page Component
const ClassPage = ({ classes }: { classes: any[] }) => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const className = path.split('/').pop();
  const classData = classes.find(c => c.title.toLowerCase().replace(/\s+/g, '-') === className);

  if (!classData) {
    return <div>Class not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img 
            src={classData.image}
            alt={classData.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 p-2 rounded-full transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-5xl font-bold mb-4">{classData.title}</h1>
          <div className="w-20 h-1 bg-red-500/50 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
            <p className="text-gray-300 leading-relaxed">{classData.content}</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Key Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classData.title === "Principle of Business & Marketing" ? (
                <>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Programming Fundamentals</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Variables and Data Types</li>
                      <li>• Control Structures</li>
                      <li>• Functions and Methods</li>
                      <li>• Object-Oriented Programming</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Web Development</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• HTML and CSS</li>
                      <li>• JavaScript</li>
                      <li>• React Framework</li>
                      <li>• API Integration</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Data Structures</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Arrays and Lists</li>
                      <li>• Trees and Graphs</li>
                      <li>• Hash Tables</li>
                      <li>• Algorithm Analysis</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Best Practices</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Code Organization</li>
                      <li>• Version Control</li>
                      <li>• Testing</li>
                      <li>• Documentation</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Algebra</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Linear Equations</li>
                      <li>• Quadratic Functions</li>
                      <li>• Polynomials</li>
                      <li>• Systems of Equations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Geometry</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Geometric Proofs</li>
                      <li>• Triangles and Circles</li>
                      <li>• Area and Volume</li>
                      <li>• Transformations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Trigonometry</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Trigonometric Functions</li>
                      <li>• Right Triangle Trig</li>
                      <li>• Law of Sines/Cosines</li>
                      <li>• Polar Coordinates</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">Applications</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Word Problems</li>
                      <li>• Real-world Modeling</li>
                      <li>• Data Analysis</li>
                      <li>• Problem Solving</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Learning Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {classData.title === "Computer Science" ? (
                <>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Master programming fundamentals and advanced coding concepts</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Develop problem-solving skills through algorithmic thinking</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Learn system design principles and software architecture</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Implement industry best practices and coding standards</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Critical thinking and problem-solving</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Communication and presentation skills</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Business and marketing strategy development</span>
                  </div>
                  <div className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-[0.4rem] flex-shrink-0"></div>
                    <span className="text-gray-300 ml-3">Teamwork and leadership</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const classes = [
    {
      title: "Principle of Business & Marketing",
      image: "https://i.imgur.com/0EHOjXN.png",
      content: "In Computer Science, we dive deep into programming concepts, algorithms, and software development. The class covers fundamental programming principles, problem-solving strategies, and hands-on coding projects. We work with various programming languages and learn about computer systems, data structures, and software engineering practices."
    },
    {
      title: "Mathematics",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80",
      content: "Mathematics class focuses on advanced algebraic concepts, geometry, and mathematical problem-solving. We explore complex equations, geometric proofs, and real-world applications of mathematical principles. The course emphasizes critical thinking and analytical skills through challenging problems and mathematical modeling."
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
              <div className="absolute inset-0">
                <img 
                  src="https://i.imgur.com/3pSmz2i.jpeg"
                  alt="Background"
                  className="w-full h-full object-cover opacity-10"
                />
              </div>
              <div className="relative text-center text-white z-10 px-4">
                <h1 className="text-5xl font-bold mb-4">Dominick's Learning Journey</h1>
                <div className="w-20 h-1 bg-red-500/50 mx-auto mt-6 rounded-full"></div>
              </div>
            </header>

            {/* About Section */}
            <section className="relative py-16 px-4 bg-gray-900 overflow-hidden">
              {/* Static Red blur effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[128px]"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-500/10 rounded-full blur-[128px]"></div>
              </div>
              
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
                  <div className="w-20 h-1 bg-red-500/50 mx-auto rounded-full"></div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg text-center mb-8 max-w-2xl mx-auto">
                  Hello, my name is Dominick Fore, and I'm 14 years old. I'm in 9th grade and attend Mater Academy East.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
                  <div 
                    className="group relative text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] cursor-default before:absolute before:w-[100px] before:h-[100px] before:bg-red-500/20 before:blur-[50px] before:rounded-full before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none"
                    style={{ "--x": "0px", "--y": "0px" } as React.CSSProperties}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="https://i.imgur.com/INVUu09.png" alt="Achievements" className="w-12 h-12 mx-auto mb-4 text-red-400 transform group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2 text-white text-lg">Achievements</h3>
                    <p className="text-gray-300 text-sm">The achievement that I am proud of is creating a fully functional website with a sign-in/sign-up system with an auth system.</p>
                  </div>
                  
                  <div 
                    className="group relative text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] cursor-default before:absolute before:w-[100px] before:h-[100px] before:bg-red-500/20 before:blur-[50px] before:rounded-full before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none"
                    style={{ "--x": "0px", "--y": "0px" } as React.CSSProperties}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="https://i.imgur.com/N9sW2XI.png" alt="Strengths" className="w-12 h-12 mx-auto mb-4 text-red-400 transform group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2 text-white text-lg">Strengths</h3>
                    <p className="text-gray-300 text-sm">I like playing games in my free time and listening to music to help calm me down.</p>
                  </div>
                  
                  <div 
                    className="group relative text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 shadow-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] cursor-default before:absolute before:w-[100px] before:h-[100px] before:bg-red-500/20 before:blur-[50px] before:rounded-full before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none"
                    style={{ "--x": "0px", "--y": "0px" } as React.CSSProperties}
                    onMouseMove={handleMouseMove}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="https://i.imgur.com/EK5ycjX.png" alt="Goals" className="w-12 h-12 mx-auto mb-4 text-red-400 transform group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-2 text-white text-lg">Goals</h3>
                    <p className="text-gray-300 text-sm">I want to get my driver's license by the end of 2026.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Get in Touch</h2>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 shadow-xl">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                  <a href="mailto:devndom03@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-red-400">
                    <Mail className="w-5 h-5" />
                    <span>devndom03@gmail.com</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        } />
        <Route path="/class/:className" element={<ClassPage classes={classes} />} />
      </Routes>
    </Router>
  );
}

export default App;
