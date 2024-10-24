import Port from "../assets/Port.png";
import Planora from "../assets/Planora.png";
import chatapp from "../assets/chatapp.png";

export const projectData = [
  {
    id: 1,
    image: Planora,
    summary:
      "This project aims to provide users with a seamless experience in organizing their trips, exploring destinations, and utilizing AI-generated suggestions for their itineraries.",
    overlay: "Trip Planner Web Application",
    title:
      "Building a Fullstack AI Trip Planner with React, Gemini AI, TailwindCSS & Firebase",
    features: [
      "AI-Driven Recommendations: The app uses Gemini AI to generate personalized trip itineraries based on user preferences, helping travelers discover new places and activities tailored to their interests.",
      "Google Integration: Users can easily search for locations and receive autocomplete suggestions through the Google Places API, making it effortless to find and select destinations.",
      "Photo Displays: Enhance trip planning with visuals by displaying stunning images of places using the Google Photo API.",
      "Firebase Backend: The app utilizes Firebase for secure data storage and user authentication, allowing for easy login via Google and maintaining user trip histories.",
      "Responsive Design: Built with TailwindCSS, the app ensures full responsiveness across devices, providing an optimal experience on mobile and desktop.",
      "User-Friendly Interface: The app incorporates intuitive navigation and modern UI components, ensuring a pleasant user experience.",
    ],
    techStack: ["React", "Gemini AI", "TailwindCSS", "Firebase"],
    links: [
      "https://planora-ai-trip-planner.vercel.app/",
      "https://github.com/voidGlitch/Planora-Ai-Trip-Planner",
    ],
  },
  {
    id: 2,
    image: Port,
    summary: "Portfolio Web-app made using React & Tailwind CSS.",
    overlay: "Portfolio- Webapplication",
    title: "Portfolio Web-app",
    features: ["My Portfolio web application is based on GOOGLE theme."],
    techStack: ["React", "Tailwind CSS"],
    links: [
      "https://portfolio-alpha-two-62.vercel.app/",
      "https://github.com/voidGlitch/Portfolio",
    ],
  },

  {
    id: 3,
    image: chatapp,
    summary:
      "A feature-rich, real-time chat application with support for chat rooms, message reactions, social media authentication, role-based access control, file uploads, audio messages, and instant notifications.",
    overlay: "Chat App - Web Application",
    title: "Chat App Web Application",
    features: [
      "Some key features are: ",
      "1. Real-time messaging with Firebase Realtime Database.",
      "2. Like messages and engage with your chat.",
      "3. Social media authentication (Google and Facebook).",
      "4. Role-based permissions for users.",
      "5. File uploads and sharing within chat.",
      "6. Audio messages for voice communication.",
      "7. Instant notifications via Firebase Cloud Messaging (FCM).",
    ],
    techStack: ["React", "Firebase", "SASS", "RSuite (React Suite)"],
    links: [
      "https://chat-web-app-9eb34.firebaseapp.com/signin",
      "https://github.com/voidGlitch/Chat-app",
    ],
  },
];
