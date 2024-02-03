import { Navbar, Hero, Feature, Howitworks, Testimonial, Footer } from '../components/landing-components';

function Landing() {
    return (
        <div className='w-full bg-primary-hero-bluecolor'>
            <Navbar />
            <Hero />
            <div className='bg-primary-mainbody-bluecolor'>
                <div className=' px-4 py-4 md:px-16 md:py-8'>
                    <Feature />
                    <Howitworks />
                    <Testimonial />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing
