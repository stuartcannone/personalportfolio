import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import BioProfilePic from '../../public/images/profile/BioProfilePic.png'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

function AnimatedNumberFramerMotion({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
    if (isInView) {
        motionValue.set(value);
    }
}, 
    [motionValue, value, isInView]);

    useEffect(
    () =>
        springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0);
        }
}),
    [springValue, value]
);

    return <span ref={ref} />;
}

const about = () => {
    return (
<>
    <Head>
        <title>Stuart Cannone | About Me </title>
        <meta name="description" content= 'software engineer for hire in sydney'/>   
    </Head>

    <main className='flex w-full flex-col items-center justify-center dark:text-light '>
        <Layout className='pt-16'>
        
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className=' col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8 '>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'> About Me </h2>
            
                <p className='font-medium'>
                Hi, I'm Stuart, a web developer and tech lover with a passion for creating beautiful, functional, 
                and user-centered digital experiences.  I am always looking for new and innovative ways to bring my clients' visions to life.
                </p>
            
                <p className='my-4 font-medium'>
                I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users.            
                </p>

                <p className='font-medium'>
                Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
            
            <div className='relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1'>
            
            <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark dark:bg-light  "/>
                
            <Image
                className="h-auto w-full rounded-2xl"
                src={BioProfilePic}
                alt="Stuart Cannone"
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                priority />
            
            </div>
            
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">

            <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={7} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                Programming Languages Learned 
                </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={5} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                projects completed
                </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumberFramerMotion value={1} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                Year of experience
                </h2>
            </div>
        </div>    
        </div>

            <Skills />
            <Experience />
            <Education />

        </Layout>
    </main>

</>
    )
}

export default about