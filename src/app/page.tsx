'use client';
import Image from 'next/image';

import { 
ChartBarIcon, 
GlobeIcon, 
MapPinIcon, 
UsersIcon
} from '@phosphor-icons/react';

export default function HomePage() {
  return (
    <main>
      <section
        className='min-h-[90vh] flex flex-col justify-center items-center text-white text-center p-8 relative bg-cover bg-center bg-blend-color bg-[#9f3122]'
      >
        <div className='z-10'>
          <h1 className='text-4xl md:text-5xl font-bold'>Enhanced Emergency Response,</h1>
          <h1 className='text-4xl md:text-5xl font-bold'>Tailored for Santa Barbara, Iloilo</h1>
          <p className='text-base font-normal max-w-[690px] mx-auto mt-4'>
            EMERGE is an emergency management system that visualizes hazards, analyzes risk zones, and optimizes
            resource allocation using a clustering algorithm—empowering responders and protecting communities.
          </p>
        </div>

        <button
          className='bg-[#dde1e4] text-[#b92727] px-6 py-3 text-lg font-bold rounded-2xl cursor-pointer mt-12 border-none transition-all duration-300 z-10 hover:bg-[#b92727] hover:text-white'
          onClick={() => (window.location.href = '/risk-map')}
        >
          View Risk Map
        </button>

        <div className='absolute inset-0 w-full h-full z-0' />
      </section>


      <section className='bg-[#dde1e4] py-15 px-4'> 
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-3 mt-6 text-[#2e2c2f]'>
        How <span className='text-[#b92727]'>EMERGE</span> works
          </h2>
          <p className='text-center text-gray-700 mb-12'>
        A clustering-enhanced GIS workflow for hazard assessment and strategic resource allocation.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left'>
          <div className='flex items-center mb-4'>
            <MapPinIcon size={32} weight='bold' className='text-white' />
          </div>
          <h3 className='text-2xl font-bold mb-4'>Identify Hazard Areas</h3>
          <p className='text-sm'>
            EMERGE uses historical records of floods, earthquakes, and landslides in{` `}
            <span className='font-bold'> Santa Barbara, Iloilo</span> to identify hazard-prone areas.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left'>
          <div className='flex items-center mb-4'>
            <GlobeIcon size={32} weight='bold' className='text-white' />
          </div>
          <h3 className='text-2xl font-bold mb-4'>Visualize Risk Zones</h3>
          <p className='text-sm'>
            Hazards are plotted on an interactive GIS map, showing heat zones and vulnerability levels based on past data.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left'>
          <div className='flex items-center mb-4'>
            <UsersIcon size={32} weight='bold' className='text-white' />
          </div>
          <h3 className='text-2xl font-bold mb-4'>Resource Clustering</h3>
          <p className='text-sm'>
            Our system applies a clustering algorithm to suggest efficient responder and supply distribution based on
            population density and risk severity.
          </p>
        </div>
        <div className='bg-gradient-to-b from-[#e94d58] to-[#e94d58]/80 rounded-2xl p-6 text-white shadow text-left'>
          <div className='flex items-center mb-4'>
            <ChartBarIcon size={32} weight='bold' className='text-white' />
          </div>
          <h3 className='text-2xl font-bold mb-4'>Strategic Planning</h3>
          <p className='text-sm'>
            EMERGE recommends optimal responder assignments and pre-positioning strategies for high-risk zones.
          </p>
        </div>
          </div>
        </div>
      </section>

      <section className='bg-[#650000] py-15 px-4'>
        <div className='max-w-5xl mx-auto text-[#dde1e4]'> 
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-3 mt-6'>
            What <span className='text-[#dde1e4]'>EMERGE</span> can do
          </h2>
          <p className='text-center text-[#dde1e4] mb-12'>
            Core features that combine hazard mapping, data clustering, and resource optimization.
          </p>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-8 max-w-6xl mx-auto'>
      
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-3xl font-bold text-[#dde1e4] mb-2'>Hazard Heatmaps</h3>
            <p className='text-lg text-[#dde1e4]'>Visualize vulnerable areas using layered historical data.</p>
          </div>
          <div className='flex justify-end items-start'>
            <div className='bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]' />
          </div>
    
          <div className='flex justify-start items-end'>
            <div className='bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-3xl font-bold text-[#dde1e4] mb-2'>Strategic Resource Allocation</h3>
            <p className='text-lg text-[#dde1e4]'>Smart deployment of responders based on hazard clustering.</p>
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-3xl font-bold text-[#dde1e4] mb-2'>Barangay-Level Risk
            Insights</h3>
            <p className='text-lg text-[#dde1e4]'>Zoom in to identify at-risk areas
            and population density.</p>
          </div>
          <div className='flex justify-end items-start'>
            <div className='bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]' />
          </div>
       
          <div className='flex justify-start items-end'>
            <div className='bg-[#dde1e4] rounded-2xl w-full md:w-[600px] h-[280px]' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-3xl font-bold text-[#dde1e4] mb-2'>Data-Driven Recommendations</h3>
            <p className='text-lg text-[#dde1e4]'>Support planning with location-based suggestions and risk prioritization.</p>
          </div>
        </div>
      </section>

      <section className='bg-[#dde1e4] py-10 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center mb-10'>
            <div className='h-2 w-20 bg-[#b92727] mr-4' />
            <h2 className='text-2xl md:text-3xl font-bold text-[#222] mr-4'>Developed in Coordination With</h2>
            <div className='flex-1 h-2 bg-[#b92727] ml-2' />
          </div>
          <div className='flex justify-center gap-8'>
            <Image src='/wvsu-logo.PNG' alt='Logo 1' width={112} height={112} className='rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain' />
            <Image src='/cict-logo.PNG' alt='Logo 2' width={112} height={112} className='rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain' />
            <Image src='/sb-logo.png' alt='Logo 3' width={112} height={112} className='rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain' />
            <Image src='/sbdrrmo.jpg' alt='Logo 4' width={112} height={112} className='rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain' />
            <Image src='/trrdmo.jpg' alt='Logo 5' width={112} height={112} className='rounded-xl w-24 h-24 md:w-28 md:h-28 object-contain' />
          </div>
        </div>
      </section>

      <section className='bg-gradient-to-b from-[#b92727] to-[#3f0000]/80 py-15 px-4'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl mb-4 text-[#dde1e4]'>
            Want to know more about <span className='text-[#dde1e4] font-bold'>EMERGE</span>?
          </h2>
          <p className='text-md text-[#dde1e4] mb-8'>
            Read more about how EMERGE helps in building a safer, more resilient community.
          </p>
          <button
            className='bg-[#dde1e4] text-[#b92727] px-4 py-2 text-lg font-bold rounded-2xl cursor-pointer mt-5 border-none transition-all duration-300 z-10 hover:bg-[#b92727] hover:text-white'
            onClick={() => (window.location.href = '/risk-map')}
          >
            About EMERGE
          </button>
        </div>
      </section>
    </main>
  );
}
