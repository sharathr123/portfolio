export const PROJECTS_RAW = [
  {
    id: 'mycore',
    slug: 'mycore',
    title: 'MyCORE',
    subtitle: 'Employee & Employer Operations App',
    category: 'Enterprise Workforce Management',
    badge: 'Live on App Store & Play Store',
    summary: 'A powerful enterprise mobile application for employees and employers with features like QR attendance check-in, shift planning, leave management, and instant CodePush updates.',
    description: 'Enterprise operations mobile application for employees and employers used across India and Europe. Delivered in multiple planned releases with reusable UI components, QR attendance tracking, OTP authentication, and CodePush hotfix deployments.',
    technologies: ['React Native', 'Redux', 'Context API', 'REST APIs', 'Tailwind CSS', 'FCM', 'QR Scanner', 'Deep Linking', 'React Navigation', 'Git', 'Sentry', 'CodePush'],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.infanion.absolutecore',
      appStore: 'https://apps.apple.com/be/app/mycore/id6572297951?l=nl',
    },
    accentColor: '#6650a4',
    secondaryColor: '#ede8f8',
    gradient: 'from-[#ede8f8] via-[#f7f4fc] to-[#fcfaff]',
    darkGradient: 'from-[#28213b] via-[#211b30] to-[#1a1626]',
    isFeatured: true,
    keyContributions: [
      'Worked closely with international clients to understand requirements and delivered features in multiple planned releases.',
      'Designed and implemented reusable React Native UI components to improve maintainability and accelerate feature development.',
      'Integrated OTP-based and password authentication flows via REST APIs.',
      'Built a QR-based attendance module to improve shift tracking accuracy and reduce manual errors.',
      'Coordinated with QA teams during UAT cycles, resolving issues before production launch.',
      'Integrated Sentry for crash monitoring and implemented CodePush (OTA updates) for faster production fixes.'
    ],
    metrics: [
      { label: 'Store Releases', value: '15+ Updates' },
      { label: 'Monitoring', value: 'Sentry Live' },
      { label: 'Hotfix Speed', value: 'CodePush OTA' }
    ]
  },
  {
    id: 'maxicon',
    slug: 'maxicon',
    title: 'Maxicon',
    subtitle: 'Employee HR & Real-Time Communication Platform',
    category: 'HR Operations & Collaboration',
    badge: 'Live on App Store & Play Store',
    summary: 'Comprehensive workplace application combining modern HR workflows with activity feeds, one-to-one real-time chat via Socket.io, time registration, and passwordless OTP verification.',
    description: 'Enterprise mobile platform for employees and companies across India & Europe. Unifies employee self-service HR operations (planning, time registration, leave requests) with instant bidirectional team messaging powered by Socket.io and background push notifications via FCM.',
    technologies: ['React Native', 'Redux', 'Socket.io', 'REST APIs', 'Tailwind CSS', 'FCM', 'OTP Autofill', 'AsyncStorage', 'React Navigation', 'Git'],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.infanion.maxicon',
      appStore: 'https://apps.apple.com/nl/app/maxicon/id6743873273',
    },
    accentColor: '#0284c7',
    secondaryColor: '#e0f2fe',
    gradient: 'from-[#e0f2fe] via-[#f0f9ff] to-[#ffffff]',
    darkGradient: 'from-[#0c2e46] via-[#082032] to-[#041019]',
    isFeatured: true,
    keyContributions: [
      'Developed activity feeds, post interactions, and one-to-one chat functionality for internal communication.',
      'Integrated Socket.io specifically for real-time chat messaging between users.',
      'Integrated OTP-based and password authentication flows via REST APIs with native autofill.',
      'Worked on HR features including planning, time registration, material requests, and leave management with REST API integration.',
      'Created reusable UI components and managed state using Redux to keep the app scalable and maintainable.',
      'Managed Google Play Store and Apple App Store build, review, and release pipelines.'
    ],
    metrics: [
      { label: 'Chat Engine', value: 'Socket.io Live' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Auth Flow', value: 'OTP-Based' }
    ]
  }
];
