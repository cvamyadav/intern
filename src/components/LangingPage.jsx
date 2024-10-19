import React from 'react';

const LangingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-blue-900 p-4 flex-wrap">
        <div>
          <div className="text-white text-2xl font-bold">HirePath</div>
          <p className="text-sm text-azure">Your next career move starts here!</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition">Home</a>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition">Find a Job</a>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition">About</a>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white text-center py-20 rounded-lg my-8 relative">
        <h2 className="text-4xl font-serif mb-4">Your Gateway to Career Success</h2>
        <p className="text-lg mb-6">Find jobs that fit your skills and aspirations with our curated job listings, internships, and tools designed for success.</p>
        <input type="text" className="py-2 px-4 rounded-full text-black w-1/2" placeholder="Search for jobs..." />
        <button className="bg-yellow-300 text-black py-2 px-8 rounded-full ml-4 transition hover:bg-yellow-400">Explore Jobs</button>
      </section>

      {/* Career Transformation Section */}
      <section className="flex items-center justify-between my-8 gap-6">
        <div className="w-1/2 text-center">
          <h2 className="text-4xl font-serif text-green-600 animate-bounce">Transform Your Career to New Heights</h2>
        </div>
        <img className="w-1/2 rounded-lg" src="https://i0.wp.com/picjumbo.com/wp-content/uploads/job-search-im-unemployed-free-photo.jpg?w=600&quality=80" alt="Job Searching" />
      </section>

      {/* Opportunities Section */}
      <section className="text-center my-16">
        <h1 className="text-4xl mb-8">Opportunities We Provide</h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Opportunity Item 1 */}
          <div className="max-w-sm text-justify shadow-lg rounded-lg p-6">
            <h3 className="text-2xl mb-4">Regular Job & Internship Updates</h3>
            <img className="w-full rounded-lg mb-4 transition transform hover:scale-105" src="https://i.pinimg.com/736x/5a/fc/eb/5afceb71940a5776951bf92a7b508664.jpg" alt="Job Updates" />
          </div>

          {/* Opportunity Item 2 */}
          <div className="max-w-sm text-justify shadow-lg rounded-lg p-6">
            <h3 className="text-2xl mb-4">Job Listing</h3>
            <ul className="text-left mb-4">
              <li><i className="fas fa-check-circle mr-2"></i>Search by Keyword</li>
              <li><i className="fas fa-globe mr-2"></i>Remote Jobs</li>
              <li><i className="fas fa-briefcase mr-2"></i>Full-Time, Part-Time, Freelance Jobs</li>
            </ul>
            <img className="w-full rounded-lg transition transform hover:scale-105" src="https://www.hrnow.je/media/1fxhuudj/productivity.png" alt="Job Listings" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-center my-16">
        <h1 className="text-4xl mb-8">What Our Users Say</h1>
        <div className="max-w-lg mx-auto shadow-lg rounded-lg p-6 mb-6">
          <p>"HIREPATH helped me land my dream job! The resources are invaluable." - Bhumi</p>
        </div>
        <div className="max-w-lg mx-auto shadow-lg rounded-lg p-6">
          <p>"I found the perfect internship through HIREPATH. Highly recommend!" - Muskan</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center bg-blue-900 text-white py-12 rounded-b-lg">
        <h1 className="text-3xl font-serif mb-4">About Us</h1>
        <p className="text-lg mb-6">Founded by a team of recruitment specialists, tech enthusiasts, and career coaches, HIREPATH bridges the gap between talent and opportunity, making job searching smoother and more effective.</p>

        <h2 className="text-2xl mb-4">Our Values</h2>
        <p className="text-lg mb-6">
          <strong>Integrity:</strong> Transparency, reliability, and fairness in every interaction.<br />
          <strong>Empowerment:</strong> Resources to empower job seekers and employers.<br />
          <strong>Innovation:</strong> Evolving to meet the job market’s changing needs with technology.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-white text-2xl hover:text-yellow-300"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white text-2xl hover:text-yellow-300"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white text-2xl hover:text-yellow-300"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="flex justify-center gap-4">
          <input type="email" className="py-2 px-4 rounded-full text-black w-1/3" placeholder="Enter your email..." />
          <button className="bg-yellow-300 text-black py-2 px-8 rounded-full transition hover:bg-yellow-400">Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default LangingPage;


