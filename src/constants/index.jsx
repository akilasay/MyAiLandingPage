import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Alice Cooper",
    company: "Pioneer Solutions",
    image: user1,
    text: "The service exceeded my expectations. The team was highly efficient, knowledgeable, and delivered exceptional results.",
  },
  {
    user: "Mark Taylor",
    company: "NextGen Enterprises",
    image: user2,
    text: "I'm thrilled with the results of our collaboration. Their innovative approach and attention to our needs made a huge difference.",
  },
  {
    user: "Sophia Lee",
    company: "InnovaTech",
    image: user3,
    text: "A truly seamless experience. The team was thorough, professional, and committed to delivering the highest quality.",
  },
  {
    user: "Ethan Wright",
    company: "Dynamic Ventures",
    image: user4,
    text: "Partnering with this team was the best decision for our project. Their expertise and creative thinking propelled us to success.",
  },
  {
    user: "Olivia Martinez",
    company: "Aspire Creations",
    image: user5,
    text: "Their dedication and professionalism were evident in every step of the process. I'm grateful for the outstanding results they delivered.",
  },
  {
    user: "Liam Thompson",
    company: "Core Synergies",
    image: user6,
    text: "This team went the extra mile to ensure everything was perfect. Their commitment to excellence was truly inspiring.",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Understand Customer Needs",
    description:
      "Analyze customer requirements and business objectives to design a chatbot that meets their specific needs.",
  },
  {
    icon: <Fingerprint />,
    text: "Develop Intelligent Conversations",
    description:
      "Use AI to create natural, engaging, and context-aware conversational flows for enhanced user interaction.",
  },
  {
    icon: <ShieldHalf />,
    text: "Deploy with Ease",
    description:
      "Seamlessly integrate the chatbot into the customer’s existing platforms, ensuring minimal disruption.",
  },
  {
    icon: <BatteryCharging />,
    text: "Provide Real-Time Assistance",
    description:
      "Enable 24/7 support with the chatbot handling queries instantly and efficiently, backed by AI-driven insights.",
  },
  {
    icon: <PlugZap />,
    text: "Analyze Performance",
    description:
      "Monitor chatbot interactions and gather data to improve responses, enhance accuracy, and better serve users.",
  },
  {
    icon: <GlobeLock />,
    text: "Support Beyond Automation",
    description:
      "Combine AI chatbot services with human expertise to ensure comprehensive customer satisfaction and loyalty.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, nesciunt tenetur explicabo provident ratione.",
  },
  {
    title: "Review code without worry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, nesciunt tenetur explicabo provident ratione.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, nesciunt tenetur explicabo provident ratione.",
  },
  {
    title: "Share work in minutes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis, nesciunt tenetur explicabo provident ratione.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
];
