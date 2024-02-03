import images from '../../assets/landing-assets/images';

const Howitworks = () =>
(
  <section className='grid  grid-rows-1 grid-cols-1  sm:grid-cols-2 gap-5 mt-10 px-12'>
    <div className='max-w-[600px] mb-8'>
      <img src={images.IllustrationSproductive} alt="stay productive" className='object-contain w-full' />
    </div>
    <div className='text-white mt-8 sm:mt-[6rem]'>
      <h2 className=' text-2xl sm:text-4xl mb-8'>Our Approach</h2>
      <p className='text-white/80 leading-7 text-[16px] font-opensans mb-4'>
        Our integrated feedback system operates across all our web properties, providing a user-friendly experience for clients to share
        their thoughts, suggestions, and reviews. This iterative feedback loop empowers us to refine our services, ensuring that we not
        only meet but exceed the expectations of those we serve.
        <br></br>
        <br></br>
        Our commitment to excellence extends beyond strategy.This system allows us to gather valuable insights directly
        from our clients, enabling us to tailor our strategic guidance to their unique needs and preferences.
      </p>
      <a href="/usage" className='text-[15px]  border-b-[1px] border-secondary-cyangradient text-secondary-cyangradient pb-1'>
        <span>See how Opinion Magnet works</span><img src={images.ArrowIcon} alt="arrow" className='inline ml-1 w-[20px]' />
      </a>
    </div>
  </section>
)
export default Howitworks