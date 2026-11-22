export const TECH_ARSENAL = [
  { id: 'react-native', name: 'React Native', icon: 'react', color: '#61DAFB' },
  { id: 'react-js', name: 'React.js', icon: 'react', color: '#61DAFB' },
  { id: 'javascript', name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { id: 'typescript', name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
  { id: 'redux', name: 'Redux', icon: 'redux', color: '#764ABC' },
  { id: 'nodejs', name: 'Node.js', icon: 'nodejs', color: '#339933' },
  { id: 'github', name: 'GitHub', icon: 'github', color: '#181717' },
  { id: 'gitlab', name: 'GitLab', icon: 'gitlab', color: '#FC6D26' },
  { id: 'firebase', name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
  { id: 'android', name: 'Android', icon: 'android', color: '#3DDC84' },
  { id: 'apple', name: 'iOS', icon: 'apple', color: '#000000' },
];

export const SKILL_CATEGORIES = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'mobile',
    color: '#3b82f6',
    bg: '#eff6ff',
    darkBg: '#1e293b',
    skills: ['React Native', 'React.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Cross-platform mobile applications for Android & iOS with modular, reusable components and clean architecture.',
    items: ['React Native', 'React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'state',
    title: 'State Management',
    icon: 'layers',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    darkBg: '#2e1065',
    skills: ['Redux', 'Context API', 'React Navigation'],
    description: 'Scalable state architectures reducing state-related bugs, predictable data flows, and smooth navigation stacks.',
    items: ['Redux', 'Context API', 'React Navigation', 'AsyncStorage', 'State Caching']
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: 'puzzle',
    color: '#6366f1',
    bg: '#eef2ff',
    darkBg: '#1e1b4b',
    skills: ['FCM', 'Socket.io', 'APIs'],
    description: 'Real-time features via Socket.io, push notifications via FCM, REST APIs with pagination & error handling, QR scanning & camera.',
    items: ['FCM (Firebase Cloud Messaging)', 'Socket.io', 'REST APIs', 'Camera & QR Scanner', 'Location & Storage', 'Deep Linking', 'React Native Stallion']
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: 'tools',
    color: '#06b6d4',
    bg: '#ecfeff',
    darkBg: '#164e63',
    skills: ['Git', 'GitLab', 'CI/CD'],
    description: 'Play Store & App Store release management, CodePush OTA updates, Sentry crash monitoring, and Android Studio/Xcode builds.',
    items: ['Git & GitHub', 'GitLab', 'Postman', 'Firebase', 'Android Studio', 'Xcode', 'Sentry', 'Firebase Crashlytics', 'CodePush (OTA)']
  }
];
