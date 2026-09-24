import {
  HeartHandshake,
  ShieldCheck,
  Brain,
  Stethoscope,
  Users,
  Home,
  PhoneCall,
  ClipboardCheck,
  UserCheck,
  CalendarCheck,
} from "lucide-react";

export const BRAND = {
  name: "CarebyKindHeart",
  phoneDisplay: "(908) 666-CARE",
  phoneHref: "tel:(908) 666-3853",
  email: "hello@carebykindheart.org",
  addressLine1: "821 N Stanley St",
  addressLine2: "Medical Lake, WA 99022",
  serviceAreaNote:
    "Proudly serving families across the Spokane county area. Ask us if we cover your ZIP code.",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const TRUST_STATS = [
  { label: "Available", value: "24/7", note: "Day, night, and holidays" },
  { label: "Background Checked", value: "100%", note: "Every caregiver, every time" },
  { label: "Serving Families", value: "10+ yrs", note: "Since 2014" },
  { label: "Compliant", value: "HIPAA", note: "Privacy-first care records" },
];

export const CORE_SERVICES = [
  {
    slug: "companion-care",
    icon: HeartHandshake,
    title: "Companion Care",
    summary:
      "Friendly, consistent support for daily life — meal prep, light housekeeping, and medication reminders.",
    details: [
      "Meal planning and preparation",
      "Light housekeeping and laundry",
      "Medication reminders",
      "Conversation, hobbies, and companionship",
      "Errands and grocery trips",
    ],
  },
  {
    slug: "personal-care",
    icon: UserCheck,
    title: "Personal Care",
    summary:
      "Hands-on help with the daily routines that keep your loved one comfortable, clean, and confident.",
    details: [
      "Bathing and grooming assistance",
      "Mobility and transfer support",
      "Dressing and toileting help",
      "Continence care",
      "Fall-risk monitoring",
    ],
  },
  {
    slug: "dementia-care",
    icon: Brain,
    title: "Dementia Care",
    summary:
      "Caregivers trained in Alzheimer's and Parkinson's support, focused on routine, patience, and safety.",
    details: [
      "Alzheimer's and dementia-trained caregivers",
      "Parkinson's support",
      "Structured daily routines",
      "Behavioral and memory support techniques",
      "Family coaching and respite guidance",
    ],
  },
  {
    slug: "post-op-care",
    icon: Stethoscope,
    title: "Post-Op & Recovery Care",
    summary:
      "Short-term, attentive care that helps loved ones heal safely at home after surgery or a hospital stay.",
    details: [
      "Post-surgical monitoring",
      "Mobility and physical-therapy follow-through",
      "Wound-care reminders (non-medical)",
      "Coordination with discharge instructions",
      "Transportation to follow-up appointments",
    ],
  },
  {
    slug: "live-in-care",
    icon: Home,
    title: "24/7 Live-In Care",
    summary:
      "Continuous, around-the-clock support from a dedicated caregiver for higher-need situations.",
    details: [
      "Overnight supervision and safety checks",
      "Full daily-living assistance",
      "Consistent, familiar caregiver",
      "Coordinated with family and care team",
      "Emergency response readiness",
    ],
  },
  {
    slug: "respite-care",
    icon: Users,
    title: "Respite Care",
    summary:
      "Short-term relief for family caregivers, from a few hours to a few days — without compromising care.",
    details: [
      "Flexible hourly or overnight scheduling",
      "Seamless hand-off from family caregivers",
      "Same trusted care standards",
      "Ideal for travel, rest, or emergencies",
      "No long-term commitment required",
    ],
  },
];

export const DIFFERENTIATORS = [
  {
    icon: ClipboardCheck,
    title: "Customized Care Plans",
    description:
      "No two families are the same. Every plan starts with an in-home assessment and adjusts as needs change.",
  },
  {
    icon: UserCheck,
    title: "Match-Your-Caregiver Guarantee",
    description:
      "We carefully pair caregivers to personality and needs — and if it's not the right fit, we'll rematch at no cost.",
  },
  {
    icon: ShieldCheck,
    title: "Regular Quality Audits",
    description:
      "Our care team checks in on every case on a set schedule, so small concerns get caught before they grow.",
  },
];

export const CARE_PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Initial Phone Consultation",
    description:
      "A brief, no-pressure call to understand your loved one's needs, schedule, and what kind of support you're looking for.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "In-Home Assessment",
    description:
      "A registered care coordinator visits your home to assess daily routines, safety, and the right level of care.",
  },
  {
    step: "03",
    icon: UserCheck,
    title: "Custom Caregiver Match",
    description:
      "We match a caregiver based on skills, personality, and availability — introduced before care ever begins.",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Care Begins, With Ongoing Audits",
    description:
      "Care starts on your schedule, with regular quality check-ins to make sure the plan keeps working for your family.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The caregiver they matched with my mother felt like family within a week. We finally sleep at night knowing she's safe.",
    name: "Melissa R.",
    relation: "Daughter of a client",
  },
  {
    quote:
      "After my father's surgery, CareNest handled everything — the schedule, the check-ins, the small details we hadn't thought of.",
    name: "David T.",
    relation: "Son of a client",
  },
  {
    quote:
      "Their dementia training made a real difference. Our caregiver knew how to redirect hard moments instead of forcing them.",
    name: "Priya K.",
    relation: "Family caregiver",
  },
  {
    quote:
      "Respite care gave me my first full weekend off in two years. I came back rested, and Mom was happy and well cared for.",
    name: "Angela M.",
    relation: "Primary family caregiver",
  },
];

export const SERVICE_REQUIRED_OPTIONS = [
  "Companion Care",
  "Personal Care",
  "Dementia Care",
  "Post-Op & Recovery Care",
  "24/7 Live-In Care",
  "Respite Care",
  "Not sure yet",
];

// ZIP codes CareNest currently serves (demo data for the service-area finder).
export const SERVICED_ZIP_PREFIXES = ["800", "801", "802", "803", "804"];
