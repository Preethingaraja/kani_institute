export type ClassCategory = "academic" | "skill" | "arts";

export interface ClassItem {
  id: string;
  title: string;
  category: ClassCategory;
  description: string;
  icon: string;
  badge: string;
  color: string;
  benefits: string[];
  duration: string;
  schedule: string;
  curriculum: string[];
}

export const classes: ClassItem[] = [
  // Academic
  {
    id: "acad-1",
    title: "Classes 1 to 10 (All Subjects)",
    category: "academic",
    description: "Comprehensive tuition covering all subjects for Classes 1 through 10.",
    icon: "BookOpen",
    badge: "Classes 1-10",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    benefits: [
      "All subjects covered under one roof",
      "Individualized homework support & tracking",
      "Regular assessments & parent-teacher feedback",
      "Focus on cognitive and logical skill development"
    ],
    duration: "1 Year Course",
    schedule: "Monday to Saturday (Daily 2 Hours)",
    curriculum: [
      "English Language & Grammar Essentials",
      "Mathematics & Logical Reasoning",
      "Science - Physics, Chemistry & Biology",
      "Social Studies, History & Civics"
    ]
  },
  {
    id: "acad-2",
    title: "Higher Secondary (11th & 12th)",
    category: "academic",
    description: "All subjects for Classes 11 & 12 - daily sessions including weekends.",
    icon: "GraduationCap",
    badge: "Classes 11-12",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    benefits: [
      "In-depth analysis of specialized subject streams",
      "Foundation strategies for competitive exams",
      "Regular mock boards and board-format checkups",
      "Formula cheat-sheets and practical guidance"
    ],
    duration: "1 Year Course",
    schedule: "Monday to Sunday (Daily 2 Hours)",
    curriculum: [
      "Advanced Higher Secondary Mathematics",
      "Core Physics (Theory, Formulas & Numerical problems)",
      "Organic, Inorganic & Physical Chemistry",
      "Double-Entry Bookkeeping & Financial Accountancy"
    ]
  },

  // Skills
  {
    id: "skill-1",
    title: "Drawing & Painting",
    category: "skill",
    description: "Express creativity through colors, pencil art, and expressive strokes.",
    icon: "Palette",
    badge: "All Ages",
    color: "bg-pink-100 text-pink-800 border-pink-200",
    benefits: [
      "Expressive fine-motor skill development",
      "Deep understanding of color theory and blending",
      "Confidence boost through creative exhibition",
      "Portfolio creation for art enthusiasts"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Monday & Tuesday",
    curriculum: [
      "Basic Shapes, Pencil Shading & Still Life Sketching",
      "Oil Pastel & Wax Crayon Blending Techniques",
      "Watercolor Landscapes & Portrait Painting",
      "Creative Cartoon Art & Poster Designing"
    ]
  },
  {
    id: "skill-2",
    title: "Hindi Written",
    category: "skill",
    description: "Master Hindi reading, writing, and grammar across 8 progressive levels.",
    icon: "Languages",
    badge: "8 Levels",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    benefits: [
      "Complete grammatical writing accuracy",
      "Structured level-by-level progression",
      "Direct preparation support for Hindi Board exams",
      "Vocabulary enrichment and Devanagari script mastery"
    ],
    duration: "8 Levels - 6 Months per Level",
    schedule: "Friday, Saturday & Sunday",
    curriculum: [
      "Hindi Vowels, Consonants & Devanagari Script writing",
      "Nouns, Pronouns, Verbs & Tense structures",
      "Sentence Construction & Essay writing",
      "Written Composition, Letter writing & Grammar"
    ]
  },
  {
    id: "skill-3",
    title: "Spoken Hindi",
    category: "skill",
    description: "Build conversational Hindi fluency through 8 progressive levels.",
    icon: "MessageCircle",
    badge: "8 Levels",
    color: "bg-amber-100 text-amber-800 border-amber-200",
    benefits: [
      "Immediate focus on verbal communication elements",
      "Daily life vocabulary expansion",
      "Confidence building for public speaking in Hindi",
      "Accent improvement and listening comprehension"
    ],
    duration: "8 Levels - 3 Months per Level",
    schedule: "Friday, Saturday & Sunday",
    curriculum: [
      "Greetings & Simple Social Sentences",
      "Essential Phrasal verbs & Daily terms",
      "Interactive speaking sessions & roleplay drills",
      "Situational dialogues (Market, Office, Travels)"
    ]
  },
  {
    id: "skill-4",
    title: "Phonics",
    category: "skill",
    description: "Build strong reading and English pronunciation skills across 3 levels.",
    icon: "Mic",
    badge: "3 Levels",
    color: "bg-teal-100 text-teal-800 border-teal-200",
    benefits: [
      "Early reading & word decoding strategies",
      "Clear, native-like English pronunciation",
      "Spelling correction and accuracy foundation",
      "Independent reading habits from a young age"
    ],
    duration: "3 Levels",
    schedule: "Monday & Wednesday",
    curriculum: [
      "Letter Sound Associations (42 basic sounds)",
      "Sound blending for 3-letter words (CVC pattern)",
      "Consonant digraphs & Vowel team phonics",
      "Tricky and sight words vocabulary reading"
    ]
  },
  {
    id: "skill-5",
    title: "Spoken English",
    category: "skill",
    description: "Enhance fluency and confidence in English communication.",
    icon: "MessageSquare",
    badge: "Communication",
    color: "bg-sky-100 text-sky-800 border-sky-200",
    benefits: [
      "Fluent verbal communication abilities",
      "Eliminating basic grammatical mistakes in speaking",
      "Enhanced vocabulary for public speaking",
      "Confidence boost in group discussions"
    ],
    duration: "6 Months Course",
    schedule: "Saturday & Sunday (1.5 Hours per session)",
    curriculum: [
      "Grammar essentials (Tenses, Active-Passive, Modals)",
      "Daily Conversation and Listening drills",
      "Public Speaking, debate formats & presentations",
      "Interview etiquette and professional communication"
    ]
  },
  {
    id: "skill-6",
    title: "Handwriting",
    category: "skill",
    description: "Improve writing speed, legibility, and presentation neatly.",
    icon: "PenTool",
    badge: "Skill",
    color: "bg-rose-100 text-rose-800 border-rose-200",
    benefits: [
      "Neat, readable cursive and print writing styling",
      "Optimized writing posture and ergonomic pen-grip",
      "Enhanced speed for school and public exams",
      "Uniform letter height, slant, and margin spacing"
    ],
    duration: "3 Months Course",
    schedule: "Monday, Tuesday & Wednesday (1 Hour per session)",
    curriculum: [
      "Strokes, Curves, and Letter Formation basics",
      "Word spacing and sentence grid guidelines",
      "Cursive connection flows and continuous patterns",
      "Exam paper presentation and formatting tips"
    ]
  },
  {
    id: "skill-7",
    title: "Chess",
    category: "skill",
    description: "Develop strategic thinking, patience, and problem-solving skills.",
    icon: "Gamepad2",
    badge: "Strategy",
    color: "bg-zinc-100 text-zinc-800 border-zinc-200",
    benefits: [
      "Improves spatial intelligence & planning skills",
      "Fosters analytical thinking & memory recall",
      "Develops resilience, sportsmanship & tournament mindset",
      "Prepares kids for state and national tournaments"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Thursday & Friday (2 Hours per session)",
    curriculum: [
      "Board Coordinate Systems & Piece values",
      "Key Opening Moves & Castle strategies",
      "Tactical calculations (Forks, Pins, Skewers, Decoys)",
      "Endgame structures and checkmating patterns"
    ]
  },
  {
    id: "skill-8",
    title: "Abacus",
    category: "skill",
    description: "Enhance mental math, calculation speed, and concentration.",
    icon: "LayoutGrid",
    badge: "Mental Math",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    benefits: [
      "Super-fast mental addition and subtraction calculations",
      "Balances left & right brain hemispheres",
      "Enhances concentration, spatial memory & focus",
      "Frees kids from fear of numbers in academics"
    ],
    duration: "8 Levels (Each Level 3 Months)",
    schedule: "Batch 1: Saturday & Sunday (1.5 hrs) | Batch 2: Monday & Friday (1.5 hrs)",
    curriculum: [
      "Abacus bead operations & physical handling",
      "Direct calculations & finger techniques",
      "Small Friends & Big Friends formula structures",
      "Anzan (Mental Arithmetic) calculations at speed"
    ]
  },
  {
    id: "skill-9",
    title: "Vedic Maths",
    category: "skill",
    description: "Ancient techniques for rapid, accurate mathematical calculation.",
    icon: "Lightbulb",
    badge: "4 Levels",
    color: "bg-lime-100 text-lime-800 border-lime-200",
    benefits: [
      "Saves up to 80% time during mathematical calculations",
      "Provides alternative checking methods for accuracy",
      "Boosts competitive exam performance",
      "Reduces dependence on calculators and worksheets"
    ],
    duration: "4 Levels - 3 Months per Level",
    schedule: "Batch 1: Monday & Friday (1 hr) | Batch 2: Saturday & Sunday (1 hr)",
    curriculum: [
      "Ekadhikena Purvena fast addition and subtraction",
      "Vertically & Crosswise rapid multiplication formulas",
      "Squares, cubes, and root shortcuts",
      "Speed algebraic expression simplification"
    ]
  },

  // Arts
  {
    id: "art-1",
    title: "Classical Dance",
    category: "arts",
    description: "Learn traditional Indian classical dance forms gracefully.",
    icon: "Music",
    badge: "Dance",
    color: "bg-red-100 text-red-800 border-red-200",
    benefits: [
      "Improves core physical strength, flexibility & posture",
      "Develops expressive facial acting (Abhinaya) skills",
      "Fosters rhythm (Tala) and hand-eye-foot coordination",
      "Builds deep appreciation for classical art heritage"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Friday, Saturday & Sunday (1 Hour per session)",
    curriculum: [
      "Feet positions (Adavus) and posture drills",
      "Single and double hand gestures (Mudras)",
      "Rhythm patterns, steps, and basic postures",
      "Traditional Bharatanatyam Margam compositions"
    ]
  },
  {
    id: "art-3",
    title: "Flute",
    category: "arts",
    description: "Master the melodious tunes of the Indian classical flute.",
    icon: "Music4",
    badge: "Music",
    color: "bg-green-100 text-green-800 border-green-200",
    benefits: [
      "Develops breath control and lung capacity",
      "Calms the nervous system and relieves stress",
      "Enhances a keen ear for Pitch (Sruti) and melody",
      "Solo performing confidence on a timeless instrument"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Wednesday & Friday (1 Hour per session)",
    curriculum: [
      "Blow angle mechanics and clear sound creation",
      "Carnatic and Hindustani basic Swara scales (Sarali Varisai)",
      "Simple devotional, folk, and classical tunes",
      "Breath sustainability and advanced raga variations"
    ]
  },
  {
    id: "art-4",
    title: "Keyboard",
    category: "arts",
    description: "Learn musical theory and keyboard playing from scratch.",
    icon: "Piano",
    badge: "Music",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    benefits: [
      "Dual-hand coordination and motor agility",
      "Strong understanding of musical notes and staff lines",
      "Foundation for composing and synthesizing music",
      "Prepares students for Trinity / ABRSM music exams"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Wednesday & Friday (1 Hour per session)",
    curriculum: [
      "Keyboard structure, finger numbers, and key identification",
      "Reading treble and bass staff music notation",
      "Chords formation, inversions, and finger techniques",
      "Solo recital playing, pop chords, and classical pieces"
    ]
  },
  {
    id: "art-5",
    title: "Guitar",
    category: "arts",
    description: "Strum your way into beautiful acoustic melodies and chords.",
    icon: "Guitar",
    badge: "Music",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    benefits: [
      "Improves finger dexterity, strength, and calluses",
      "Fosters chord progression planning and tempo keeping",
      "Encourages creative songwriting and covers",
      "Timeless social playing capability and stress relief"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Wednesday & Friday (1 Hour per session)",
    curriculum: [
      "Guitar anatomy, tuning methods, and pick styles",
      "Basic open major/minor chords and transition exercises",
      "Standard strumming patterns and fingerpicking styles",
      "Popular songs, tablatures, and basic scale solos"
    ]
  }
];
