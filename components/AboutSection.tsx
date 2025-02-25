import React from "react"
import Image from "next/image"
import fs from 'fs'

const rawData = fs.readFileSync('./public/json/skills.json', 'utf-8')
const skills = JSON.parse(rawData)
const skillsOld = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "Node.js" },
    { skill: "Express.js" },
    { skill: "PosgreSQL" },
    { skill: "MongoDB" },
    { skill: "Vue.js" },
    { skill: "React.js" },
    { skill: "Next.js" },
    { skill: "Apollo GraphQL" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
]
console.log(skills)
console.log(skillsOld)

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Lets get acquainted!
                        </h1>
                        <p>
                            Hi, My name is Nuriel Kaunaini Muhammad
                        </p>
                        <br />
                        <p>
                            I graduated from Telkom University, Bandung in 2022 with a BE in Physical Engineering where I developed an interest in programming, particularly microcontroller and IoT integration.
                        </p>
                        <br />
                        <p>
                            After completing my degree, I enrolled in the Fullstack Javascript bootcamp at Hacktiv8 to enhance my programming skills. In just four months, i am now able to construct a client-server based application without a proper background in Computer Engineering.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item: { skill: string }, idx: number) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection