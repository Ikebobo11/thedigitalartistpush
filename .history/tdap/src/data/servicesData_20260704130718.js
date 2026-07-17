import { FaSpotify } from "react-icons/fa6";
import { BsAppleMusic } from "react-icons/bs";
// import { FaWhatsapp } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { TiMediaFastForwardOutline } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { PiStrategyBold } from "react-icons/pi";
import { SlControlPlay } from "react-icons/sl";
import lastkid from "../assets/lastkid.jpg";
export const servicesData = [
  {
    id: "distribution",
    icon: AiOutlineGlobal,
    title: "Music Distribution Services",
    subtitle: "Get your music on all major streaming platforms worldwide",
    bgImage:
      "https://images.unsplash.com/photo-1508700115892-45ecd0ae6b2a?w=1200&q=80",
    description:
      "Professional song delivery to all major DSPs with full royalty management, content ownership protection, and monetization strategies.",
    subsections: [
      {
        title: "Song Delivery to DSPs",
        desc: "We deliver your music to all major digital streaming platforms including Spotify, Apple Music, Audiomack, Boomplay, and more, ensuring worldwide availability.",
      },
      {
        title: "Royalty Management",
        desc: "Full royalty collection and management system. We ensure you receive 100% of your earnings from streams, downloads, and digital sales.",
      },
      {
        title: "Content Ownership",
        desc: "You retain 100% ownership of your master recordings and intellectual property. We never take ownership of your music.",
      },
      {
        title: "Music Monetization",
        desc: "Strategic monetization across multiple platforms including streaming revenue, sync licensing opportunities, and digital sales channels.",
      },
      {
        title: "Release Scheduling",
        desc: "Plan and schedule your releases strategically for maximum impact. We help you pick optimal release dates for peak engagement.",
      },
      {
        title: "Metadata Management",
        desc: "Professional metadata tagging and management to ensure your music is properly categorized, discovered, and credited across all platforms.",
      },
    ],
    platforms: [
      "Spotify",
      "Apple Music",
      "Audiomack",
      "Boomplay",
      "YouTube Music",
      "TikTok",
      "Instagram Music",
      "Facebook Music",
    ],
    whatsapp: "I need music distribution services",
  },
  {
    id: "spotify",
    icon: FaSpotify,
    title: "Spotify Services",
    subtitle: "Dominate Spotify with playlisting, ads, and strategic promotion",
    bgImage:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd2?w=1200&q=80",
    description:
      "Complete Spotify promotion services from editorial playlisting to targeted ad campaigns.",
    subsections: [
      {
        title: "Editorial Playlisting",
        desc: "Professional submission process to Spotify editorial teams. We optimize your pitch for consideration on official Spotify playlists like New Music Friday, RapCaviar, and more.",
      },
      {
        title: "Curated Playlisting",
        desc: "Access to independent playlist networks with targeted audience segmentation. Organic listener acquisition through high-quality curated playlists.",
      },
      {
        title: "Spotify Ads",
        desc: "Targeted Spotify ad campaigns with precise audience targeting. We set up, manage, and optimize your ad spend for maximum stream growth and ROI.",
      },
    ],
    whatsapp: "I need Spotify promotion services",
  },
  {
    id: "apple-music",
    icon: BsAppleMusic,
    title: "Apple Music Services",
    subtitle: "Premium promotion on Apple Music ecosystem",
    bgImage:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    description:
      "Strategic Apple Music promotion including playlisting and advertising solutions.",
    subsections: [
      {
        title: "Editorial Playlisting",
        desc: "Strategic submissions to Apple Music editorial team for consideration on official playlists. We craft compelling pitches that highlight your music's unique value.",
      },
      {
        title: "Curated Playlisting",
        desc: "Network of Apple Music curator connections for playlist placements. Targeted audience growth through genre-specific and mood-based playlists.",
      },
      {
        title: "Apple Music Ads",
        desc: "Apple Music advertising solutions for targeted listener acquisition. Campaign optimization for maximum engagement and subscriber growth.",
      },
    ],
    whatsapp: "I need Apple Music promotion services",
  },
  {
    id: "audiomack",
    icon: SiAudiomack,
    title: "Audiomack Services",
    subtitle: "Grow your presence on Africa's favorite streaming platform",
    bgImage:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&q=80",
    description:
      "Audiomack promotion services for maximum visibility and engagement.",
    subsections: [
      {
        title: "Editorial Playlisting",
        desc: "Get featured on Audiomack's editorial playlists and front-page placements. We handle the submission process and optimize your profile for discovery.",
      },
      {
        title: "Curated Playlisting",
        desc: "Strategic placements on high-traffic Audiomack playlists. Targeted promotion to African and global audiences for organic growth.",
      },
      {
        title: "Audiomack Ads",
        desc: "Targeted advertising campaigns on Audiomack. Reach millions of active listeners with precision targeting and optimized ad spend.",
      },
    ],
    whatsapp: "I need Audiomack promotion services",
  },
  {
    id: "boomplay",
    icon: FaBold,
    title: "Boomplay Services",
    subtitle: "Expand your reach on Africa's largest music streaming service",
    bgImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    description:
      "Comprehensive Boomplay promotion services for the African market.",
    subsections: [
      {
        title: "Editorial Playlisting",
        desc: "Premium placements on Boomplay editorial playlists. We leverage our relationships with the Boomplay editorial team for maximum visibility.",
      },
      {
        title: "Curated Playlisting",
        desc: "Strategic playlist placements on high-traffic Boomplay playlists. Targeted promotion to African music lovers across the continent.",
      },
      {
        title: "Boomplay Ads",
        desc: "Targeted Boomplay advertising campaigns. Reach millions of active users across Africa with strategic ad placements and optimization.",
      },
    ],
    whatsapp: "I need Boomplay promotion services",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    title: "YouTube Services",
    subtitle: "Complete YouTube growth and monetization solutions",
    bgImage:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80",
    description:
      "Full suite YouTube services for channel growth, monetization, and audience acquisition.",
    subsections: [
      {
        title: "Growth Boost",
        desc: "Strategic subscriber growth and audience acquisition campaigns. Organic channel optimization for maximum reach and engagement.",
      },
      {
        title: "YouTube Ads",
        desc: "Targeted YouTube advertising campaigns. Precision audience targeting for video views, subscribers, and engagement growth.",
      },
      {
        title: "VEVO Channel Setup",
        desc: "Professional VEVO channel setup and verification. Access VEVO's premium distribution network and branding features.",
      },
      {
        title: "Official Artist Channel",
        desc: "Official Artist Channel (OAC) setup and optimization. Unify your YouTube presence and unlock artist-specific features.",
      },
    ],
    whatsapp: "I need YouTube promotion services",
  },
  {
    id: "tiktok",
    icon: FaTiktok,
    title: "TikTok Services",
    subtitle: "Go viral on the world's fastest-growing platform",
    bgImage:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80",
    description:
      "TikTok promotion services for viral campaigns and audience growth.",
    subsections: [
      {
        title: "Influencer Sound Promotion",
        desc: "Strategic influencer collaborations to promote your sound. We connect your music with top TikTok creators for viral sound campaigns.",
      },
      {
        title: "Organic Growth Boost",
        desc: "Natural audience growth through optimized content strategy. Engagement growth through targeted community interaction.",
      },
      {
        title: "TikTok Ads",
        desc: "Targeted TikTok advertising campaigns. Precision audience targeting for maximum engagement and follower growth.",
      },
    ],
    whatsapp: "I need TikTok promotion services",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    title: "Instagram Services",
    subtitle: "Build your brand on the visual platform",
    bgImage:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
    description:
      "Complete Instagram promotion services for artists and musicians.",
    subsections: [
      {
        title: "Sound/Reel Promotion",
        desc: "Strategic reel distribution through influencer networks. We promote your sound across Instagram Reels for maximum exposure.",
      },
      {
        title: "Organic Growth Boost",
        desc: "Natural follower growth through optimized content and engagement strategies. Build a genuine, engaged audience.",
      },
      {
        title: "Instagram Ads",
        desc: "Targeted Instagram advertising campaigns. Precision audience targeting for profile growth, engagement, and music promotion.",
      },
    ],
    whatsapp: "I need Instagram promotion services",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    title: "Facebook Services",
    subtitle: "Connect with fans on the world's largest social network",
    bgImage:
      "https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=1200&q=80",
    description:
      "Facebook promotion and community growth services for artists.",
    subsections: [
      {
        title: "Organic Growth Boost",
        desc: "Strategic community growth through optimized page management and content strategy. Build an engaged fan base.",
      },
      {
        title: "Facebook Ads",
        desc: "Targeted Facebook advertising campaigns. Advanced audience targeting for music promotion, event promotion, and fan acquisition.",
      },
    ],
    whatsapp: "I need Facebook promotion services",
  },
  {
    id: "twitter",
    icon: FaXTwitter,
    title: "X (Twitter) Services",
    subtitle: "Amplify your voice on the real-time conversation platform",
    bgImage:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1200&q=80",
    description:
      "Twitter/X promotion services for trend visibility and audience engagement.",
    subsections: [
      {
        title: "Organic Growth Boost",
        desc: "Strategic follower growth through optimized content and engagement. Build your brand presence on the platform.",
      },
      {
        title: "X Ads",
        desc: "Targeted advertising campaigns on X. Promote your music to relevant audiences with precision targeting.",
      },
    ],
    whatsapp: "I need Twitter/X promotion services",
  },
  {
    id: "media-pr",
    icon: TiMediaFastForwardOutline,
    title: "Media PR & Publicity",
    subtitle: "Get featured in top media publications",
    bgImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168d8c?w=1200&q=80",
    description:
      "Professional media relations and publicity services for brand awareness.",
    subsections: [
      {
        title: "Newspaper Publications",
        desc: "Strategic media outreach and press release distribution. Get featured in major newspapers and online publications for maximum visibility.",
      },
      {
        title: "Brand Awareness",
        desc: "Comprehensive PR campaigns that build your brand identity and public recognition. Strategic media placements for maximum impact.",
      },
    ],
    whatsapp: "I need media PR services",
  },
  {
    id: "blog",
    icon: FaBlog,
    title: "Blog Services",
    subtitle: "Promotion on top music blogs and news sites",
    bgImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    description: "Music blog promotions and news publication features.",
    subsections: [
      {
        title: "Music Blog Promotions",
        desc: "Feature your music on top blogs including TrendyBeatz, NetNaija, TrendySongs, and 9jaflaver. Drive downloads and streams.",
      },
      {
        title: "News Publications",
        desc: "Get featured on major news platforms like Gistlover, Tunde Ednut, Gistreel, Legit, and GossipMill. Maximum brand exposure.",
      },
      {
        title: "Traffic Generation",
        desc: "Strategic blog promotion campaigns that drive real traffic to your music. SEO-optimized content for long-term visibility.",
      },
    ],
    whatsapp: "I need blog promotion services",
  },
  {
    id: "google",
    icon: FaGoogle,
    title: "Google Services",
    subtitle: "Build your search presence and online authority",
    bgImage:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1200&q=80",
    description: "Google biography, knowledge panel, and Wikipedia services.",
    subsections: [
      {
        title: "Google Biography",
        desc: "Professional Google Biography creation that appears in search results. Establish your official online presence.",
      },
      {
        title: "Knowledge Panel",
        desc: "Google Knowledge Panel setup and optimization. Get the featured information box that appears when people search for you.",
      },
      {
        title: "Wikipedia Guidance",
        desc: "Expert guidance on Wikipedia article creation. Meet notability requirements and establish your authority.",
      },
    ],
    whatsapp: "I need Google services",
  },
  {
    id: "creative-design",
    icon: DiPhotoshop,
    title: "Creative Visual Design",
    subtitle: "Professional visual content for your music brand",
    bgImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    description:
      "Professional design services for album artwork, flyers, banners, and lyric videos.",
    subsections: [
      {
        title: "Music Artwork Design",
        desc: "Professional album cover and single artwork design. Eye-catching visuals that represent your music brand and attract listeners.",
      },
      {
        title: "Flyer & Banner Design",
        desc: "Promotional flyers and social media banners for release campaigns. Consistent branding across all marketing materials.",
      },
      {
        title: "Lyric Video Editing",
        desc: "Professional lyric video production. Engaging visual content for YouTube and social media promotion.",
      },
    ],
    whatsapp: "I need creative design services",
  },
];

export const testimonials = [
  {
    name: "Lastkid",
    role: "Afrobeat Artist",
    text: "The Digital Artist Push has been a game-changer for my music career. Their professionalism and dedication have helped me grow. I highly recommend their services to any artist looking to take their career to the next level!",
    rating: 5,
    avatar: lastkid,
  },
  {
    name: "Logicxxx",
    role: "Afrohiphop",
    text: "Professional, reliable, and results-driven. They got my music on every major platform and set up my YouTube Official Artist Channel. Highly recommended!",
    rating: ,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Emeka Nwosu",
    role: "Rap Artist",
    text: "Their distribution service is top-notch. My music is now available in over 200 countries. The team handles everything from metadata to royalties. Amazing!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

export const whyChooseUs = [
  {
    icon: IoMdCheckmark,
    title: "Proven Track Record",
    desc: "Years of experience helping independent artists achieve their music career goals with measurable results.",
  },
  {
    icon: AiOutlineGlobal,
    title: "Global Reach",
    desc: "Distribution and promotion across 200+ countries with access to major DSP editorial teams worldwide.",
  },
  {
    icon: MdOutlineWorkspacePremium,
    title: "Premium Quality",
    desc: "Professional-grade service delivery with attention to detail in every campaign we manage.",
  },
  {
    icon: MdOutlineContactSupport,
    title: "Dedicated Support",
    desc: "Personal account managers who work closely with you throughout your entire promotional journey.",
  },
  {
    icon: PiStrategyBold,
    title: "Data-Driven Strategy",
    desc: "We use real data and analytics to craft promotion strategies that deliver maximum ROI.",
  },
  {
    icon: SlControlPlay,
    title: "100% Ownership",
    desc: "You retain full rights to your music. We never take ownership or royalties from your work.",
  },
];

export const faqData = [
  {
    question:
      "How long does it take for my music to appear on streaming platforms?",
    answer:
      "After submission, your music typically appears on streaming platforms within 3-7 business days. However, some platforms like Spotify and Apple Music may take up to 2 weeks for initial processing.",
  },
  {
    question: "Do I retain 100% ownership of my music?",
    answer:
      "Absolutely. You retain 100% ownership of your master recordings, copyrights, and intellectual property. We are a service provider, not a label or publisher.",
  },
  {
    question: "How do I get paid my royalties?",
    answer:
      "Royalties are collected from all streaming platforms and paid out to you directly. We set up your accounts to ensure you receive 100% of your earnings from streams and downloads.",
  },
  {
    question: "What platforms do you distribute to?",
    answer:
      "We distribute to all major platforms including Spotify, Apple Music, Audiomack, Boomplay, YouTube Music, TikTok, Instagram Music, Facebook Music, and many more.",
  },
  {
    question: "Can you guarantee playlist placements?",
    answer:
      "While we cannot guarantee specific editorial playlist placements (as these decisions are made by platform editors), our submission process and playlist strategies significantly increase your chances of getting playlisted.",
  },
  {
    question: "How do I get started?",
    answer:
      'Simply click the "Reach Out On WhatsApp" button on any of our services and send us a message. Our team will respond promptly to discuss your needs and create a customized plan.',
  },
];

export const teamMembers = [
  {
    name: "Michael Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sarah Williams",
    role: "Head of Distribution",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "James Okonkwo",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Amara Eze",
    role: "Client Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export const timelineData = [
  {
    year: "2022",
    event:
      "The Digital Artist Push was founded with a vision to empower independent artists through professional music distribution and marketing services.",
  },
  {
    year: "2023",
    event:
      "Expanded operations to serve artists across Nigeria and international markets. Reached milestone of 100+ artists served.",
  },
  {
    year: "2024",
    event:
      "Launched advanced digital marketing services including Spotify Ads, YouTube promotion, and TikTok influencer campaigns.",
  },
  {
    year: "2025",
    event:
      "Expanded global reach to 10+ countries with partnerships across major DSPs and media outlets.",
  },
  {
    year: "2026",
    event:
      "Continuing global expansion with plans to reach 50+ countries and launch artist development programs.",
  },
];
