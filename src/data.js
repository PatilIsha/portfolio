// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Abhijit Patil',
  role: 'UI/UX & Graphic Designer',
  location: 'Deccan, Pune',
  phone: '+91 97662 63649',
  phoneRaw: '+919766263649',
  email: 'abhipatil9449@gmail.com',
  // Put your photo at public/abhijit.jpg (from the CV). Initials show until then.
  photo: '/abhijit.jpg',
  cv: '/Abhijit-Patil-CV.pdf',
  intro:
    "I'm a UI/UX & graphic designer from Pune with 3.5+ years of turning ideas into clean, user-friendly websites and mobile apps.",
  about:
    'I enjoy turning ideas into wireframes and prototypes that feel seamless and visually striking. I’ve worked across different teams and always keep usability and accessibility in mind. My background in graphic design, painting and theatre gives me a creative edge — and I use it to make designs that genuinely connect with people.',
  links: {
    behance: 'https://www.behance.net/abhijitpatil15',
    linkedin: 'https://www.linkedin.com/in/',
    allDesigns: 'https://drive.google.com/drive/folders/13Lnoua9heKbyQgH_XPJFIqbkVdBZriW6?usp=sharing',
    mockups: 'https://drive.google.com/drive/folders/1k5CtV7XoyMdQBY5-cH_ngh8q73NRlZP4?usp=sharing',
  },
}

export const stats = [
  { value: 3.5, suffix: '+', label: 'Years experience', decimals: 1 },
  { value: 14, suffix: '+', label: 'Featured projects' },
  { value: 3, suffix: '', label: 'Companies + freelance' },
  { value: 1, suffix: '', label: 'Project of the Season award' },
]

// type: 'uiux' | 'graphic'
// image: file in public/projects. Without an image, a generated cover (accent colour) is shown.
export const projects = [
  {
    title: 'MediTree — Mobile App',
    tag: 'Mobile app UI/UX',
    type: 'uiux',
    image: '/projects/meditree-app.jpg',
    link: 'https://www.behance.net/gallery/190107573/UI-UX-Mobile-App-Design-MediTree',
    award: 'Project of the Season',
    desc: 'End-to-end healthcare app — research, personas, user flows, wireframes and hi-fi UI.',
    featured: true,
  },
  {
    title: 'Tracker System',
    tag: 'SaaS dashboard · Geofences',
    type: 'uiux',
    image: '/projects/tracker.jpg',
    link: 'https://www.figma.com/proto/RZN45ud56r3lRe3JkvEYSB/task-Geofences?node-id=90-3461&starting-point-node-id=90%3A3461',
    secondary: { label: 'Case study', href: 'https://www.behance.net/gallery/197979615/Tracker-System-Visual-designing' },
    desc: 'Asset-tracking dashboard with live maps, geofence management and real-time alerts.',
    featured: true,
  },
  {
    title: 'MediTree — Showcase',
    tag: 'UI visual design',
    type: 'uiux',
    image: '/projects/meditree.jpg',
    link: 'https://www.behance.net/gallery/219278715/Meditree',
    desc: 'Polished visual presentation of the MediTree product ecosystem.',
  },
  {
    title: 'HSX App',
    tag: 'Mobile app · Prototype',
    type: 'uiux',
    color: '#7c5cff',
    image: '/projects/hsx.png',
    fit: 'contain',
    bg: '#1a2a3a',
    link: 'https://www.figma.com/proto/qgvxgS4ZXDz02hhs84gsDg/HSX-APP?node-id=36-800&starting-point-node-id=36%3A800&t=aP0LuNFFmreMskv8-1',
    desc: 'Interactive mobile prototype with complete navigation flow.',
  },
  {
    title: 'B2B App',
    tag: 'B2B commerce · Prototype',
    type: 'uiux',
    color: '#ff6b3d',
    image: '/projects/b2b.png',
    fit: 'contain',
    bg: '#163d73',
    link: 'https://www.figma.com/proto/azjcGOMRM0TqXz33LkkWPS/B2B-App?node-id=1-2303&starting-point-node-id=1%3A2267',
    desc: 'Ordering and catalogue experience for business buyers.',
  },
  {
    title: 'Wizio',
    tag: 'UI design project',
    type: 'uiux',
    color: '#22c7a9',
    image: '/projects/wizio.png',
    fit: 'contain',
    bg: '#0b3a73',
    link: 'https://www.figma.com/proto/pduymgCie3EJDzB63uakHI/Wizio-UI-Design-project?node-id=1',
    desc: 'Clean, modern UI system and screens for the Wizio product.',
  },
  {
    title: 'Abhizz Bakehouse',
    tag: 'Bakery app · Prototype',
    type: 'uiux',
    color: '#3d8bff',
    image: '/projects/bakehouse.png',
    fit: 'contain',
    bg: '#3f4d0a',
    link: 'https://www.figma.com/proto/YLEHVzwWNx2A24gwSntZ3g?node-id=0-1&t=AdUNVKAT2d7ol3YA-6',
    desc: 'Bakery ordering app — splash, browsing and checkout flow in a clickable prototype.',
  },
  {
    title: 'Dataeaze Pitch Deck',
    tag: 'Presentation design',
    type: 'graphic',
    color: '#ff3d8b',
    image: '/projects/pitch-deck.png',
    position: 'top',
    link: 'https://www.figma.com/design/J4UYlzFWmGsKqz4VaVsVgK/PPT-Presentation?node-id=0-1&t=VuC8YYCl9qehXZ4A-1',
    desc: 'Company presentation for Dataeaze — data-driven storytelling with a strong visual hierarchy.',
  },
  {
    title: 'Graphics Work',
    tag: 'Ads · Social · Print',
    type: 'graphic',
    image: '/projects/graphics-work.jpg',
    link: 'https://www.behance.net/gallery/230291569/Graphics-Work',
    desc: 'Product ads, social media creatives and brand campaigns.',
    featured: true,
  },
  {
    title: 'Social Media Posts',
    tag: 'Instagram · Campaigns',
    type: 'graphic',
    color: '#d92332',
    image: '/projects/social-posts.jpg',
    fit: 'contain',
    center: true,
    bg: '#2a1416',
    link: 'https://drive.google.com/drive/folders/1hyB7V-DJsvhyoDowSrSnoA3xzEyF9d0j',
    desc: 'Campaign posts, carousels and event creatives for Life Saver Army & JJF India.',
  },
  {
    title: 'Banner & Standees',
    tag: 'Print · Event branding',
    type: 'graphic',
    color: '#d92332',
    image: '/projects/banner.jpg',
    fit: 'contain',
    center: true,
    bg: '#2a1416',
    link: 'https://drive.google.com/drive/folders/113elVV6KpnBriCq7rXqHVGmdBSxvkVFc',
    desc: 'Large-format banners and standees for blood donation drives and festivals.',
  },
  {
    title: 'LSA Logo Design',
    tag: 'Logo · Brand identity',
    type: 'graphic',
    color: '#f2b544',
    image: '/projects/lsa-logos.jpg',
    fit: 'contain',
    center: true,
    bg: '#2b2118',
    link: 'https://drive.google.com/file/d/13gIdcta4yKJykNibarnf7b482pr4pqwS/view?usp=drivesdk',
    desc: 'Logo explorations for Life Saver Army and Jainam Jivika Foundation — big & small lockups.',
  },
  {
    title: 'Magazine Work',
    tag: 'Editorial · Magazine',
    type: 'graphic',
    color: '#f0b400',
    image: '/projects/magazine.jpg',
    fit: 'contain',
    center: true,
    bg: '#16222e',
    link: 'https://drive.google.com/drive/folders/1SJOm4lVtmAGPWPMQqcD1CXlQ22A4FBDO',
    desc: 'Magazine and company profile layouts — LSA Magazine and JJF India profile.',
  },
  {
    title: 'Wizio AI Leaflet',
    tag: 'Print · Tri-fold leaflet',
    type: 'graphic',
    color: '#ffb800',
    image: '/projects/wizio-leaflet.png',
    fit: 'contain',
    center: true,
    bg: '#f2f4f8',
    link: 'https://drive.google.com/file/d/1cuQHotJ2nBNx3xvek4gskgkcS-tArKtG/view?usp=sharing',
    desc: 'Tri-fold print leaflet for Wizio AI Physiotherapy — services, benefits and contact.',
  },
]

export const experience = [
  {
    company: 'JJF India Pvt. Ltd.',
    role: 'UI & Graphic Designer',
    period: 'Aug 2025 — Present',
    points: [
      'Design engaging graphics, infographics, magazines and social media visuals with consistent branding.',
      'Create intuitive website UI screens and Android/iOS app interfaces with user-centric layouts.',
    ],
  },
  {
    company: 'Hibilter IT System',
    role: 'UI Designer',
    period: 'Mar 2024 — Jul 2025',
    points: [
      'Designed visually stunning, user-friendly interfaces for web & mobile applications.',
      'Sketched flows, wireframes and prototypes in Figma so teams could feel the product before build.',
      'Delivered polished UI components — buttons, menus, icons — consistent with the brand.',
    ],
  },
  {
    company: 'Dataeaze Systems Pvt. Ltd.',
    role: 'UI Designer · Freelance',
    period: '2024 — 2025',
    points: [
      'Translated stakeholder and user requirements into storyboards, sitemaps and user flows.',
      'Created wireframes, prototypes and hi-fi UI in Figma & Adobe Creative Suite.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Graphic & UI Designer',
    period: 'Ongoing',
    points: ['Continuous freelance work across branding, social media creatives and UI design.'],
  },
]

export const services = [
  { title: 'App UI/UX', desc: 'Research, personas, user flows, wireframes & hi-fi mobile screens for iOS & Android.' },
  { title: 'Website design', desc: 'Landing pages, redesigns and responsive websites with clickable prototypes.' },
  { title: 'Graphic design', desc: 'Social media creatives, ads, infographics, magazines & print collateral.' },
  { title: 'Design systems', desc: 'Components, styles and clean developer handoff for cross-platform consistency.' },
]

export const tools = ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'Canva', 'Sketch']

export const skills = [
  'User Interface', 'Wireframing', 'Prototyping', 'Visual Design', 'User Personas',
  'Web Design', 'User Flows', 'Design Systems', 'Branding', 'Social Media Design',
]

export const education = [
  { title: 'UI/UX Designing Course', place: 'The DSchool', year: '2023' },
  { title: 'Graphic Designing Course', place: 'MAAC Institute', year: '2023' },
  { title: 'B.E. Electrical Engineering', place: 'Shivaji University · First Class with Distinction', year: '2018' },
]
