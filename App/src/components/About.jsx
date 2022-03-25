import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function About() {
  return (
    <section className="bg-white text-third">
      <div className="container grid grid-cols-1 md:grid-cols-3 py-16">
        <div className="grid grid-cols-1 gap-2">
          <h5 className="font-medium">Doc Review</h5>
          <p>
            Doc Review is dedicated towards continual development. If you have
            any thoughts on how to imporve our website. Please don't hesitate in
            get in touch
          </p>
          <h5 className="mt-4 font-medium">Follow us:</h5>
          <div className="flex gap-2">
            <a href="#">
              <FaGithubSquare size={32} />
            </a>
            <a href="#">
              <FaLinkedin size={32} />
            </a>
            <a href="#">
              <FaTwitterSquare size={32} />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-t-lightgrey my-4" />
      <footer className="container text-grey py-2 text-xs">
        Doc Review - a product from callum shaw
      </footer>
    </section>
  );
}

export default About;
