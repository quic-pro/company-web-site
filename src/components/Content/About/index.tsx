import React from 'react';

import coverImg from './cover.jpg';


export default function About() {
  return (
    <section id="About" className="bg-companyBlue-100">
      <div className="container py-20">
        <div className="mb-8">
          <p className="text-3xl font-medium text-companyBlue-600 text-center">About Us</p>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="md:flex-1 bg-white md:mr-3">
            <img src={coverImg}
                 className="max-w-full h-auto border border-solid border-gray-200 rounded p-1"
                 alt="About Us"/>
          </div>
          <div className="md:flex-1 md:ml-3">
            <p className="md:text-left text-center">
              IT - startup, dealing with the projects in blockchain, telecommunications,
              cryptography and at the intersections of these fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
