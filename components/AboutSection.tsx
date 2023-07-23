"use client"
import React from 'react'

const AboutSection = () => {
    return (
        <section id='about'>
            <div>
                <h1 className='text-center font-bold text-4xl'>
                    About Me
                </h1>
                <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10  '>
                    <div>
                        <h1>
                            Let's get acquainted!
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
                    <div>
                        <h1>
                            My skills
                        </h1>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection