import images from '../../assets/landing-assets/images'
import Button from './Button';

const Hero = () =>
(
  <section id="hero-section" className="mt-4 flex flex-col flex-1 justify-center items-center text-center relative z-50">
    <picture className="absolute bottom-0 left-0 -z-50 w-full">
      <source media="(min-width:375px )" srcset={images.BackgroundCurveDesktop} />
      <img src={images.BackgroundCurveMobile} alt="background-image" />
    </picture>
    <div className="max-w-[500px] ">
      <img src={images.IllustrationIntro} alt="hero-image" className={`w-full object-fit`} />
      <h1 className="text-white text-2xl leading-relaxed font-raleway">
        Strategic IPO Guidance through Customer Insights.
      </h1>
      <p className="text-white text-sm sm:text-[16px] my-4 leading-10 mx-8 text-white/60 ">
        Welcome to Opinion Magnet,  where we empower investment banks in steering the IPO journey of unicorn companies with precision.
        Through meticulous analysis of customer feedback and reviews, we not only redefine the path to a successful public offering
        but also safeguard the Unicorn's intrinsic value, ensuring it doesn't diminish in the dynamic landscape of the IPO process.
      </p>
      <Button style={{ maxWidth: 250, }} route={"/register"} >
        Get Started
      </Button>
    </div>
  </section>
)


export default Hero