import React from 'react'

const About = () => {
    return (
        <section className='relative overflow-hidden text-color1 py-10'>
            <div className='container relative'>
                <div className=' max-w-4xl mx-auto mb-32'>
                    <div  className='space-y-12 mb-16'>
                        <span className='uppercase text-color1/60 tracking-[0.2em]'>about me</span>
                        <div className='grid md:grid-cols-2  mt-5 gap-12'>
                            <div className='space-y-6'>
                                <h1 className='text-5xl tracking-tight'>
                                    Hi, I'm <span className='text-blue1'>Aman Rajwar</span>
                                </h1>
                                <div className='space-y-4'>
                                    <div> <span className='text-color1/60'>Based in Uttarpradesh, India</span></div>
                                    <div> <span className='text-color1/60'>25 Years Old</span></div>
                                    <div> <span className='text-color1/60'>Full Stack Developer</span></div>
                                    <div> <span className='text-color1/60'>1 Year of Work Experience</span></div>
                                </div>
                                <p className='text-lg leading-relaxed'>As a dedicated developer based in the heart of Bavaria, I bring German precision and creative innovation to every project. I specialize in creating robust, scalable web applications that combine cutting-edge technology with intuitive user experiences.</p>
                                <div className='space-x-4'>
                                    <a href="" className=' bg-blue1 px-6 py-3 rounded-lg'>GetIn Touch</a>
                                    <a href="" className=' border border-blue1/60 px-6 py-3  rounded-lg'>View Projects</a>
                                </div>
                            </div>

                            <div className='space-y-6 relative'>
                                <div className='space-y-4'>
                                    <h3 className='text-2xl '>
                                        Key Skills
                                    </h3>
                                    <div className=' flex flex-wrap gap-2'>
                                        <span className='px-4 py-2 rounded-full bg-blue1/20  text-center inline-block leading-[0] '> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                        <span className='px-2 py-3 rounded-full border'> typescript</span>
                                    </div>

                                    <div className='space-y-4'>
                                        <h3 className='text-2xl'>Services</h3>
                                        <ul className='space-y-2'>
                                            <li>Full Stack Development</li>
                                            <li>Full Stack Development</li>
                                            <li>Full Stack Development</li>
                                            <li>Full Stack Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About