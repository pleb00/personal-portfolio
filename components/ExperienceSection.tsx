import React from "react";
import fs from "fs";

interface Experience {
  title: string;
  workplace: string;
  details: string[];
  clients: string[];
}
const rawData = fs.readFileSync("./public/json/exp.json", "utf-8");
const experiences: Experience[] = JSON.parse(rawData);

const ExperienceSection = () => {
  return (
    <section id="experience">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {experiences.map((exp: Experience, idx: number) => {
            return (
              <div key={idx}>
                <div className="md:w-1/2">
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
