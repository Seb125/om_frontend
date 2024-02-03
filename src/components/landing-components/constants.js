import images from '../../assets/landing-assets/images'

import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const navLinks = [
  {
    id: "Log In",
    title: "Log In",
    route: "/login",
  },
  {
    id: "Register",
    title: "Register",
    route: "/register"
  },
];

export const features = [
  {
    id: "feature-1",
    icon: images.AccessIcon,
    title: "Access your files, anywhere",
    content:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: "feature-2",
    icon: images.Iconsecurity,
    title: "Security you can trust",
    content:
      "We employ cutting-edge technology to safeguard your data. If you misplace your login token, we generate a new one for your convenience.",
  },
  {
    id: "feature-3",
    icon: images.CollabrationIcon,
    title: "Collaboration",
    content:
      "You have the option to schedule an appointment through our online platform to consult with our expert team for strategic analysis plans.",
  },
  {
    id: "feature-4",
    icon: images.AnyfileIcon,
    title: "Store your company value",
    content:
      "We maintain the confidentiality and integrity of your information by utilizing reliable system tailored specifically for our customers.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Working with Opinion Magnet has been a game-changer for our IPO journey. Their insightful analysis of customer feedback allowed us to navigate the complexities of the process with confidence. Our value not only soared, but we also felt secure in the hands of true experts.",
    name: "John Doe",
    title: "CEO of Unicorn Tech",
    img: images.Profile1,
  },
  {
    id: "feedback-2",
    content:
      "As an investment banker, I rely on accurate data and strategic insights. Opinion Magnet delivered exactly that. Their ability to decipher customer sentiments ensured our IPO strategy was not only successful but also aligned with market expectations. Truly a partner in success.",
    name: "Mark Johnson",
    title: "CFO of Stellar Innovations",
    img: images.Profile2,
  },
  {
    id: "feedback-3",
    content:
      "The team at Opinion Magnet is unparalleled in their dedication to preserving a unicorn's value during the IPO process. Their comprehensive approach and attention to detail set them apart. I highly recommend their services for any company navigating the complexities of going public.",
    name: "Jane Smith",
    title: " Investment Banker",
    img: images.Profile3,
  },
];

export const contactInfo = [
  {
    id: "Phone",
    icon: images.iconPhone,
    link: "#",
    text: "+1-543-654-4567",
  },
  {
    id: "Email",
    icon: images.iconEmail,
    link: "#",
    text: " support@opinion-magnet.com",
  },
]




export const footerLinks = [
  {
    links: [
      {
        name: "About Us",
        link: "#",
      },
      {
        name: "Jobs",
        link: "#",
      },
      {
        name: "Press",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
    ],
  },
  {
    links: [
      {
        name: "Contact Us",
        link: "#",
      },
      {
        name: "Terms",
        link: "#",
      },
      {
        name: "Privacy",
        link: "#",
      },
    ],
  },
];


export const socialMedia = [
  {
    id: "facebook",
    img: faFacebookF,
  },
  {
    id: "twitter",
    img: faTwitter,
  },
  {
    id: "intsgram",
    img: faInstagram,
  },
];

