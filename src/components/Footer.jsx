import React from 'react'

function Footer() {
    return (
        <div className='bg-primary flex flex-col text-white px-5 md:px-8 lg:px-14 pt-4 py-2'>
            <div className='lg:grid lg:grid-cols-2 pb-6'>
                <div className='pb-6'>
                    <div className='flex gap-2 pb-3 cursor-pointer'>
                        <img
                            src= {require('../assets/logo.png')}
                            width={45}
                            alt='logo'
                        />
                        <h1 className='text-3xl font-bold pb-2'>AT DIGITAL</h1>
                    </div>
                    <p
                        className='text-sm max-w-[400px] lg:max-w-[500px] lg:text-base'
                    >Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
                <div className='flex flex-col gap-6 md:grid md:grid-cols-2'>
                    <div className='flex flex-col'>
                        <h1 className=' text-lg font-medium pb-2'>Our Technologies</h1>
                        <div className='gap-1 flex flex-col text-sm'>
                            <span>ReactJS</span>
                            <span>Gatsby</span>
                            <span>NextJS</span>
                            <span>NodeJS</span>
                            <span>GraphQL</span>
                            <span>Laravel</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className=' text-lg font-medium pb-2'>Our Services</h1>
                        <div className='gap-1 flex flex-col text-sm'>
                            <span>Social Media Marketing</span>
                            <span>Web & Mobile App Development</span>
                            <span>Data & Analytics</span>
                            <span>Google Marketing Solutions</span>
                            <span>Search Engine Optimization</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='md:w-[630px] md:mx-auto'/>
            <div className='flex justify-center text-sm py-1.5 divide-x'>
                <a href='/' className='px-5'>Privacy Policy</a>
                <a href='/' className='px-5'>Terms & Conditions</a>
            </div>
        </div>
    )
}

export default Footer