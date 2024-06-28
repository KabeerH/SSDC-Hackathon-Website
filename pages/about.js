import Head from 'next/head'

export default function About() {
  return (
    <div className="flex flex-col h-full bg-gray-100">
        <Head>
            <title>About us</title>
        </Head>
        <main className="flex flex-col items-center justify-top w-full flex-1 px-20 text-center">
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="text-5xl sm:text-5xl font-medium text-gray-900 mb-4">
                            Welcome to the <span className='text-blue-500'> Seneca Software Development Club!</span>
                        </h1>
                        <p className="text-base leading-relaxed mx-auto">
                            The goals of the Seneca Software Developers Club are to create opportunities for students to collaborate on projects, attend workshops and events, and build a strong network within the tech community. Our aim is to provide access to resources and mentorship opportunities that will help members achieve their full potential in the field of software development. Additionally, we aim to provide a space for members to learn about new technologies, discuss current industry trends, and connect with industry professionals.           
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
                        <div className="px-2 sm:px-10 text-center">
                            <h2 className="title-font font-medium sm:text-4xl text-3xl mb-3">
                                Our Mission
                            </h2>
                            <p className="leading-relaxed text-md mb-4">
                                The mission of the Seneca Software Developers Club is to provide an inclusive, collaborative and educational environment for students to explore and develop their software development skills. We aim to foster an environment of creativity, learning, and problem-solving where members can grow both professionally and personally.
                            </p>
                            <p className="leading-relaxed text-md mb-4">
                            The Seneca Software Developers Club is dedicated to creating a vibrant and diverse community of software developers. We believe that community engagement is a critical part of our mission, and we strive to create opportunities for members to give back through volunteer and outreach programs. By creating a welcoming and inclusive environment for all members, we hope to inspire and empower the next generation of software developers, and build a strong and sustainable community that supports the growth and success of its members.
                            </p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center mt-6 gap-40 mb-32">
                <img className="rounded-full w-full h-auto md:w-48 md:h-48" src="working.png" alt="working image"/>
                <img className="rounded-full w-full h-auto md:w-48 md:h-48 hidden sm:block" src="computer.png" alt="computer image"/>
                <img className="rounded-full w-full h-auto md:w-48 md:h-48 hidden sm:block" src="community.png" alt="community image"/>
            </div>

        </main>
    </div>
  )
}
