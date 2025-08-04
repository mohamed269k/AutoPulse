import React from 'react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 's15-hyperdrift',
    name: 'S15 HyperDrift Pro',
    description: 'A top-tier chassis known for its aggressive styling and competitive performance. The HyperDrift Pro is engineered for enthusiasts who demand precision and control on the track.',
    price: 499.99,
    imageUrl: 'https://picsum.photos/seed/s15hyperdrift/800/600',
    specs: {
      scale: '1/10',
      motor: 'Brushless 4500KV',
      drivetrain: 'RWD',
    },
    gallery: [
      'https://picsum.photos/seed/s15hyperdrift/800/600',
      'https://picsum.photos/seed/s15-angle2/800/600',
      'https://picsum.photos/seed/s15-chassis/800/600',
      'https://picsum.photos/seed/s15-detail/800/600'
    ],
    features: ['Competition-grade RWD drift chassis', 'Front and rear adjustable suspension arms', 'Lightweight carbon fiber main chassis and upper deck', 'Full ball bearing set for smooth operation', 'Stealth body mounts for a clean look', 'High-angle steering system for extreme drifts'],
    whatsInTheBox: ['S15 HyperDrift Pro Chassis Kit (unassembled)', 'Clear polycarbonate S15 body', 'Wing and mirror set', 'Decal sheet', 'Window masks', 'Instruction manual'],
    requiredToComplete: ['2-channel radio system', 'Steering servo', 'ESC and Motor', '7.4V LiPo Battery & Charger', 'Drift tires and wheels', 'Polycarbonate paint for body'],
    reviews: [
        { rating: 5, author: 'DriftKing_88', comment: 'This chassis is on another level. The build was fun and the performance out of the box is incredible. Highly adjustable and capable.', date: '2023-10-15' },
        { rating: 4, author: 'SilviaFan', comment: 'Love the S15 body! The chassis is solid but requires a good amount of tuning to get just right. Not for beginners.', date: '2023-09-22' }
    ]
  },
  {
    id: 'ae86-apex',
    name: 'AE86 Apex King',
    description: 'A legendary classic, perfectly balanced for mastering the art of the drift. This RTR model is perfect for both beginners and seasoned drivers looking for a fun and iconic ride.',
    price: 349.99,
    imageUrl: 'https://picsum.photos/seed/ae86apex/800/600',
    specs: {
      scale: '1/10',
      motor: 'Brushed 540T',
      drivetrain: 'RWD',
    },
    gallery: [
      'https://picsum.photos/seed/ae86apex/800/600',
      'https://picsum.photos/seed/ae86-angle2/800/600',
      'https://picsum.photos/seed/ae86-chassis/800/600',
      'https://picsum.photos/seed/ae86-detail/800/600'
    ],
    features: ['Classic design with modern performance', 'Balanced weight distribution for smooth transitions', 'Includes brushed motor for predictable power delivery', 'Oil-filled shocks for stable handling', 'Ready-to-Run (RTR) - just charge and drive!', 'Iconic pop-up headlights (non-functional)'],
    whatsInTheBox: ['Assembled AE86 Apex King chassis', 'Painted and decaled AE86 body', '2.4GHz Radio Transmitter', '7.2V NiMH Battery and basic charger', 'Instruction manual'],
    requiredToComplete: ['4 x AA batteries for the transmitter'],
    reviews: [
        { rating: 5, author: 'TofuDelivery', comment: 'Bought this for the nostalgia, but was blown away by how well it handles. It\'s my go-to for chill drift sessions.', date: '2023-11-01' },
        { rating: 5, author: 'InitialD_Fan', comment: 'Perfect first drift car. It\'s easy to control and looks amazing on the shelf. The included battery gets you going right away.', date: '2023-10-28' }
    ]
  },
  {
    id: 'rx7-rotorstorm',
    name: 'RX7 RotorStorm',
    description: 'Unleash the storm with this iconic rotary-powered beast, built for high-speed slides. Its aggressive stance and powerful motor make it a force to be reckoned with.',
    price: 429.99,
    imageUrl: 'https://picsum.photos/seed/rx7rotorstorm/800/600',
    specs: {
      scale: '1/10',
      motor: 'Brushless 5000KV',
      drivetrain: 'RWD',
    },
    gallery: [
      'https://picsum.photos/seed/rx7rotorstorm/800/600',
      'https://picsum.photos/seed/rx7-angle2/800/600',
      'https://picsum.photos/seed/rx7-chassis/800/600',
      'https://picsum.photos/seed/rx7-detail/800/600'
    ],
    features: ['High-torque brushless motor system', 'Durable composite chassis', 'Adjustable turnbuckles for camber and toe tuning', 'Sealed gear differential', 'Includes hard compound drift tires', 'Officially licensed RX-7 body shell'],
    whatsInTheBox: ['RX7 RotorStorm ARTR (Almost Ready to Run)', 'Clear RX-7 body shell', 'Decal sheet', 'Instruction manual'],
    requiredToComplete: ['2-channel radio system', 'Steering servo', '7.4V LiPo Battery & Charger', 'Polycarbonate paint for body'],
    reviews: [
        { rating: 5, author: 'RotaryPower', comment: 'The power this thing has is insane! It breaks traction so easily and holds long, beautiful drifts. Looks just like the real deal.', date: '2023-10-05' },
        { rating: 4, author: 'JDM_Drifter', comment: 'Great car overall. It took some time to get the suspension dialed in, but now it handles like a dream. The ARTR aspect lets you pick your own electronics, which is a plus.', date: '2023-09-18' }
    ]
  },
  {
    id: 'supra-mk4-overdrive',
    name: 'Supra MK4 Overdrive',
    description: 'Dominate the track with the raw power and timeless design of the MK4 Supra. This model is built for one thing: pure, unadulterated drifting performance.',
    price: 529.99,
    imageUrl: 'https://picsum.photos/seed/supramk4/800/600',
    specs: {
      scale: '1/10',
      motor: 'Brushless 5500KV',
      drivetrain: 'RWD',
    },
    gallery: [
      'https://picsum.photos/seed/supramk4/800/600',
      'https://picsum.photos/seed/supra-angle2/800/600',
      'https://picsum.photos/seed/supra-chassis/800/600',
      'https://picsum.photos/seed/supra-detail/800/600'
    ],
    features: ['Ultra-powerful 5500KV brushless motor', '3mm carbon fiber chassis for maximum rigidity', 'Aluminum bulkheads and shock towers', 'Fully adjustable suspension with threaded aluminum shocks', 'Weight-forward design for aggressive turn-in', 'Includes replica Supra wing and aero parts'],
    whatsInTheBox: ['Supra MK4 Overdrive Chassis Kit (unassembled)', 'Clear polycarbonate Supra MK4 body', 'Decal sheet', 'Instruction manual'],
    requiredToComplete: ['High-torque steering servo', '3-channel radio system', 'ESC for brushless motors', '7.4V or 11.1V LiPo Battery & Charger', 'Drift tires and wheels', 'Polycarbonate paint'],
    reviews: [
        { rating: 5, author: 'BoostedJZA80', comment: 'This is the Supra RC I\'ve been waiting for. It\'s a pro-level kit with top-quality materials. Not for the faint of heart, but the performance is unmatched.', date: '2023-11-10' },
        { rating: 5, author: 'TrackDayHero', comment: 'Absolutely planted chassis. The amount of grip and control, even while sideways, is just mind-boggling. Worth every penny.', date: '2023-10-21' }
    ]
  },
    {
    id: 'r34-nitesky',
    name: 'R34 NiteSky GT-R',
    description: 'The icon of the midnight streets, engineered for precision and power. Features a switchable AWD/RWD drivetrain to conquer any surface.',
    price: 549.99,
    imageUrl: 'https://picsum.photos/seed/r34nitesky/800/600',
    specs: {
      scale: '1/10',
      motor: 'Brushless 6000KV',
      drivetrain: 'AWD (Switchable)',
    },
    gallery: [
      'https://picsum.photos/seed/r34nitesky/800/600',
      'https://picsum.photos/seed/r34-angle2/800/600',
      'https://picsum.photos/seed/r34-chassis/800/600',
      'https://picsum.photos/seed/r34-detail/800/600'
    ],
    features: ['Innovative switchable AWD/RWD drivetrain', 'High-speed 6000KV brushless motor', 'Belt-driven transmission for smooth power delivery', 'Aluminum and carbon fiber components throughout', 'Pre-installed LED light kit for night drifting', 'Highly detailed R34 GT-R body'],
    whatsInTheBox: ['Assembled R34 NiteSky GT-R chassis', 'Painted and decaled R34 body with LEDs', '2.4GHz Radio Transmitter', 'Instruction manual'],
    requiredToComplete: ['7.4V LiPo Battery & Compatible Charger', '4 x AA batteries for the transmitter'],
    reviews: [
        { rating: 5, author: 'GodzillaFan', comment: 'The switchable drivetrain is a game-changer! AWD for grip and RWD for pure drift. Plus it looks incredible with the lights on.', date: '2023-11-05' },
        { rating: 4, author: 'MidnightRunner', comment: 'Extremely fast and fun car. The belt drive is quiet. It\'s a bit complex, but the versatility is worth it. Eats batteries on the highest settings!', date: '2023-10-19' }
    ]
  },
  {
    id: 'starter-sidewinder',
    name: 'Starter Sidewinder',
    description: 'The perfect entry-level car to get you sideways and into the world of RC drifting. Simple, durable, and ready to run right out of the box.',
    price: 199.99,
    imageUrl: 'https://picsum.photos/seed/sidewinder/800/600',
    specs: {
      scale: '1/12',
      motor: 'Brushed 380T',
      drivetrain: 'RWD',
    },
    gallery: [
      'https://picsum.photos/seed/sidewinder/800/600',
      'https://picsum.photos/seed/sidewinder-angle2/800/600',
      'https://picsum.photos/seed/sidewinder-chassis/800/600',
      'https://picsum.photos/seed/sidewinder-detail/800/600'
    ],
    features: ['1/12 scale for easy indoor and outdoor use', 'Durable, impact-resistant chassis', 'Completely Ready-to-Run (RTR)', 'Gyro-stabilized steering for easier drifting', 'Rechargeable battery and USB charger included', 'Comes in multiple vibrant colors'],
    whatsInTheBox: ['Assembled Starter Sidewinder chassis', 'Painted body', '2.4GHz Radio Transmitter', 'Rechargeable battery pack', 'USB Charger', 'Instruction manual', 'Mini traffic cones for practice'],
    requiredToComplete: ['2 x AA batteries for the transmitter'],
    reviews: [
        { rating: 5, author: 'NewbieDrifter', comment: 'I bought this with zero experience and was drifting around my living room in minutes. The gyro is a huge help!', date: '2023-11-12' },
        { rating: 4, author: 'DadOfTwo', comment: 'Got this for my son and we both love it. It\'s tough enough to handle bumps and crashes. Battery life is decent for the price.', date: '2023-10-30' }
    ]
  },
];


export const AutoPulseLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 60" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <g fill="white">
      <path d="M 10 25 C 15 15, 25 15, 30 25 C 32 28, 35 28, 40 25 C 45 20, 50 20, 55 25 L 60 28 L 65 20 L 70 28 L 75 25 L 80 15 L 85 25 L 90 28 L 95 25 C 100 20, 105 20, 110 25 C 115 30, 130 30, 140 25 C 150 20, 160 18, 175 20 C 185 22, 190 25, 190 25 L 188 30 C 180 30, 160 35, 140 30 C 120 25, 110 25, 105 30 L 100 35 L 95 30 L 90 25 L 85 35 L 80 28 L 75 32 L 70 25 L 65 32 L 60 25 C 55 18, 45 18, 40 25 C 35 30, 30 30, 25 25 C 20 20, 15 20, 10 25 Z" />
      <polyline points="50,25 55,25 60,18 65,32 70,18 75,25 80,25" stroke="white" strokeWidth="1" fill="none" />
      <text x="30" y="50" className="font-orbitron font-bold text-[20px]">AutoPulse</text>
    </g>
  </svg>
);
