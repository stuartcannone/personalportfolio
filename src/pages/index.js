import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Avatar from "../../public/images/profile/Avatar.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import ContactMe from '@/components/ContactMe'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stuart Cannone Developer Portfolio</title>
        <meta name="description" content="Explore Stuart CAnnone's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles." />
      </Head>
      <TransitionEffect />
      
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
    
        <Layout className= "!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col"> 
              <div className="w-1/2 lg:hidden md:inline-block md:w-full">
                <Image src={Avatar} alt="Stuart Cannone" className='w-full h-auto' sizes="100vw" priority/>
              </div>
              <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                
                <AnimatedText 
                text="Crossing Between Technology And Reality Through Code" 
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                
                <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                As a skilled full-stack developer, I am dedicated to the creative process of converting ideas into impactful innovative applications. 
                Explore my latest projects and articles, showcasing my expertise in a variety of languages in the development environment.
                </p>
                <div className="mt-2 flex items-center self-start lg:self-center">

                  <Link href="/Resume Stuart Cannone.pdf" target={"_blank"}
                    className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base`}
                  download={true}
                  >Resume <LinkArrow className="ml-1 !w-6 md:!w-4"/> </Link>

                  <Link href="mailto:stuartcannone@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                  >Contact</Link>
                </div>
              </div>
          </div>
        </Layout>
        <ContactMe />
    </article>
    </>
  );
}
