import { IconType } from "react-icons"; 

import { FaFacebook, FaGlobe, FaInstagram, FaYoutube } from "react-icons/fa";

interface SocialLink {
  icon: IconType;
  url: string;
}

export const SOCIALS = {
  title: "Social",
  socialLinks: [
    {
      icon: FaGlobe,  
      url: "https://dev-boutique-clothing.vercel.app/",
    },
    {
      icon: FaFacebook,
      url: "https://facebook.com/yourFacebookPage",
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/yourInstagramPage",
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/yourYoutubeChannel",
    },
  ] as SocialLink[],
};


export const NAV_LINKS = [
  { href: '/',  label: 'Home' },
  { href: '/',  label: 'How Hilink Work?' },
  { href: '/',  label: 'Services' },
  { href: '/',  label: 'Pricing ' },
  { href: '/',  label: 'Contact Us' },
];

export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SERVICES_INFO = [
  {
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    img: '/weather.png'
  },
  {
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    img: '/plane.png'
  },
  {
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
    img: '/sing.png'
  },
  {
    title: 'Road Travels',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    img: '/travel.png'
  },
]