import { Navbar, Footer } from '../components/landing-components';
import images from '../assets/landing-assets/images';


function HowOpinionMagnetWorks() {
  return (
    <div className='w-full bg-primary-hero-bluecolor'>
      <Navbar />
      <section id="hero-section" className="mt-4 flex flex-col flex-1 justify-center items-center text-center relative z-50">
        <picture className="absolute bottom-0 left-0 -z-50 w-full">
          <source media="(min-width:375px )" srcset={images.BackgroundCurveDesktop} />
          <img src={images.BackgroundCurveMobile} alt="background-image" />
        </picture>
        <div className="max-w-[800px] text-white text-xl leading-relaxed font-raleway text-left">
          <h2 className='font-bold mb-4 text-center'> WHAT IS THE UNICORN COMPANY ?</h2>
          Unicorn companies typically go through a process of raising significant funding from private investors and venture capital firms before going public. This phase is often referred to as the "pre-IPO financing round" or simply the "series financing round." During this stage, unicorn companies secure substantial funding at high valuations from investors.
          However, the culmination of this pre-public phase is usually the "IPO (Initial Public Offering)." An IPO marks the point at which a company decides to make its shares available to the general public. The company issues its shares on the stock market, and from that moment onward, investors can buy and trade these shares on the public exchange.

          <h2 className='font-bold mb-4 mt-4 text-center'> WHY IS THIS PROCESS IMPORTANT  ?</h2>
          Assessing customer feedback and reviews can play a significant role for investment banks guiding unicorn companies through the IPO process. Here are key contributions that such feedback can provide:
          Reputation and Trust: Customer feedback and reviews can reflect a company's reputation and customer trust, presenting a positive impression to potential investors. A strong reputation is crucial for gaining investor confidence during the IPO process.
          Risk Assessment: Negative feedback and reviews can help identify potential risks that the company may face. This assists investors in understanding and preparing for these risks more effectively.
          Market Perception: Customer feedback provides insights into how the market perceives the company's products or services. Investors may use this information to gauge how the company and its brand are perceived in the market.
          Operational Efficiency: Positive feedback highlights the company's operational efficiency and the quality of its customer services. This gives investors a perspective on how the company focuses on operational processes and customer satisfaction.
          Strategic Direction: Feedback and reviews serve as a valuable source for understanding the company's strategic management and future growth plans. Investors may use this information to assess the company's vision for the future.
          Competitive Advantage: Customer feedback can emphasize the company's competitive advantages and unique features compared to competitors. This helps demonstrate the company's strength and position in the market.

          <h2 className='font-bold mb-4 mt-4 text-center'> WHO IS OUR CUSTOMER ?</h2>
          Investment banks can leverage such feedback to accentuate the company's strengths or address weaknesses during the IPO process. However, these insights are just one part of the evaluation process and should be considered alongside financial indicators, market conditions, and other relevant factors.
          We want to share with our esteemed customers how you can make the most of the services we offer.
          We will guide you through each step here.
          <h2 className='underline mt-4 mb-4'>Step 1</h2>
          To begin, please install the `npm install react-opinion-magnet`` package from <a href='https://www.npmjs.com/package/react-opinion-magnet'> Npm Registry </a>
          By following the instructions provided, you will be able to seamlessly install the npm package on your page. Should you encounter any issues, feel free to reach out to us for assistance.
          <h2 className='underline mt-4 mb-4'>Step 2</h2>
          In the below picture you can see all related adjustments for the app.jsx file.
          Customize the package content to match the style of your current page,including adjustments such as measurements.
          <img src={images.App} alt="app.png" className="mx-auto my-4 mb-4 mt-4" />
          <h2 className='underline mt-4 mb-4'>Step 3</h2>
          Please ensure that reac-opinion-magnet has already existed in your package.json file.
          You can find picture as below
          <img src={images.PacketJson} alt="packet.json" className="mx-auto my-4 mb-4 mt-4" />
          <h2 className='underline mt-4 mb-4'>Step 4</h2>
          You can sign up by visiting the mentioned website. Once registered, you will be prepared to access the services outlined above. We will take care of analyzing all the remaining details on your behalf.
          We aggregate all comments from relevant pages on the data page and provide their analyses on our website. Access to these analyses requires logging in with an access token. Should you wish to discuss your opinions and strategic plans based on the analysis reports with our experts, you can conveniently arrange online meetings. For any technical assistance you may need, feel free to reach out to us through the help desk button.
          Always remember, we are here as your solution partner.
        </div>
      </section >
      <Footer />
    </div >
  )
}

export default HowOpinionMagnetWorks
