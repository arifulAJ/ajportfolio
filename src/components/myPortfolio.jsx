"use client";

import ProductFilter from "@/app/utils/productsFilter";
import Image from "next/image";
import React, { useState } from "react";
const projects = [
  {
    id: 1,
    name: "Project 1",
    category: "Web Development",
    animation: "animate-portfolio-enter-top-right",
    url: "https://c8.alamy.com/compfr/ejch7t/l-ordinateur-et-les-peripheriques-mobiles-connectes-ejch7t.jpg",
  },
  {
    id: 2,
    name: "Project 2",
    category: "Wordpress developer",
    animation: "animate-portfolio-enter-bottom-right",
    url: "https://elements-cover-images-0.imgix.net/914c2969-88ba-4b7e-b141-0e7f1a20f970?auto=compress%2Cformat&w=900&fit=max&s=2b29806ef73fd9d5ebe1877edf244ae1",
  },
  {
    id: 3,
    name: "Project 3",
    category: "Email Signature",
    animation: "animate-portfolio-enter-left",
    url: "https://elements-cover-images-0.imgix.net/914c2969-88ba-4b7e-b141-0e7f1a20f970?auto=compress%2Cformat&w=900&fit=max&s=2b29806ef73fd9d5ebe1877edf244ae1",
  },
  {
    id: 4,
    name: "Project 4",
    category: "Wordpress developer",
    animation: "animate-portfolio-enter-top",
    url: "https://elements-cover-images-0.imgix.net/914c2969-88ba-4b7e-b141-0e7f1a20f970?auto=compress%2Cformat&w=900&fit=max&s=2b29806ef73fd9d5ebe1877edf244ae1",
  },
  // Add more projects with different categories
];
const MyPortfolio = (selectedCategory) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const categories = [
    "Web Development",
    "Email Signature",
    "Wordpress developer",
  ];

  const handleFilter = (selectedCategory) => {
    if (selectedCategory === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="pt-24 px-1 md:px-16 lg:px-32  ">
      <div className="flex mb-4 justify-center  ">
        <p className="flex ">
          {" "}
          <span className="animate-pulse">
            <Image
              src="https://i.ibb.co/fCdrZ9J/star.png"
              alt="star"
              width={20}
              height={20}
            />
          </span>
          <span className="ml-2 font-semibold">My Portfolio</span>
        </p>
      </div>
      <h1 className="text-center font-extrabold text-2xl md:text-5xl pt-4 pb-24 ">
        VISIT MY PORTFOLIO
      </h1>

      <div>
        <ProductFilter categories={categories} onFilter={handleFilter} />
        {/* Render your filtered projects */}
        <div className="grid py-12  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded"
            >
              <div className="rounded-lg shadow-lg transition-transform transform scale-100 group-hover:scale-105">
                <Image
                  className={`object-cover w-full h-full ${project.animation} `}
                  width={600}
                  height={600}
                  src={project.url}
                  alt={`Project ${project.id}`}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col justify-center h-full text-white text-center transition-all transform group-hover:translate-y-2">
                  <p className="text-lg font-bold">{project.title}</p>
                  <p>{project.description}</p>
                  <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="text-white ">
                      Click here for more details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
