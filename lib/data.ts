export interface Module {
  id: string;
  title: string;
  duration: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  level: string;
  modules: Module[];
}

export const courses: Course[] = [
  {
    id: "aero-101",
    title: "Principles of Flight",
    category: "Aerodynamics",
    description: "Master the fundamental principles of aerodynamics, including lift, weight, thrust, and drag.",
    duration: "10 hours",
    level: "Beginner",
    modules: [
      { id: "m1", title: "Atmospheric Properties", duration: "1h" },
      { id: "m2", title: "Airflow and Bernoulli's Principle", duration: "2h" },
      { id: "m3", title: "Airfoils and Lift Generation", duration: "3h" },
      { id: "m4", title: "Drag and Stability", duration: "4h" },
    ]
  },
  {
    id: "met-201",
    title: "Aviation Meteorology",
    category: "Meteorology",
    description: "Deep dive into weather patterns, clouds, turbulence, and icing conditions for safe flight operations.",
    duration: "15 hours",
    level: "Intermediate",
    modules: [
      { id: "m1", title: "The Atmosphere", duration: "2h" },
      { id: "m2", title: "Pressure and Wind", duration: "3h" },
      { id: "m3", title: "Moisture and Clouds", duration: "5h" },
      { id: "m4", title: "Hazardous Weather", duration: "5h" },
    ]
  },
  {
    id: "nav-301",
    title: "Instrument Navigation",
    category: "Navigation",
    description: "Learn to navigate using VOR, NDB, and GPS systems in instrument meteorological conditions.",
    duration: "20 hours",
    level: "Advanced",
    modules: [
      { id: "m1", title: "Navigation Basics", duration: "3h" },
      { id: "m2", title: "Radio Navigation Aids", duration: "6h" },
      { id: "m3", title: "GPS and RNAV", duration: "6h" },
      { id: "m4", title: "IFR Procedures", duration: "5h" },
    ]
  }
];
