import React from 'react'
import Button from '../components/Button'

function Hero() {
    return (
        <div>
            <img
                src={require('../assets/heroImg.jpg')}
                alt='heroImage'
                style={{width: '100%'}}
            />
            <div className='bg-gradient-to-r from-darkColour_2 to-analogous_2 px-5 py-4 left-10 bottom-[120px] lg:w-[600px] lg:absolute'>
                <p className='text-white font-bold text-4xl md:text-5xl max-w-[1000px]'>
                    We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                </p>
                <div className='mt-3 md:mt-5'>
                    <Button text='GET FREE CONSULTATION'/>
                </div>
            </div>
            <div className='flex flex-col items-center px-5 md:px-8 lg:px-20 xl:px-32 py-3 md:py-8 gap-y-5 md:gap-y-8'>
                <div className='flex flex-col items-center md:flex-row md:justify-between gap-x-20 lg:gap-x-24'>
                    <img
                        src={require('../assets/desktop.png')}
                        alt='desktop'
                        className='w-[200px] lg:w-[300px]'
                    />
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-primary mb-4 font-bold text-2xl lg:text-3xl text-center'>Web & Mobile App Development</h1>
                        <p className='text-sm md:text-base lg:text-lg text-justify mb-4'>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                        <div className='mb-4'>
                            <Button text='LEARN MORE'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:flex-row-reverse md:justify-between gap-x-20 lg:gap-x-24'>
                    <img
                        src={require('../assets/search.png')}
                        alt='desktop'
                        className='w-[200px] lg:w-[300px]'
                    />
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-primary mb-4 font-bold text-2xl lg:text-3xl text-center'>Digital Strategy Consulting</h1>
                        <p className='text-sm md:text-base lg:text-lg text-justify mb-4'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                        <div className='mb-4'>
                            <Button text='LEARN MORE'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero