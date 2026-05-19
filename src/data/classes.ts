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
    title: "Primary School (1-5)",
    category: "academic",
    description: "All Subjects - Build a strong foundation in core subjects.",
    icon: "BookOpen",
    badge: "Grades 1-5",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    benefits: [
      "Strong foundation in core academic concepts",
      "Individualized homework support & tracking",
      "Regular assessments & parent-teacher feedback",
      "Focus on cognitive and logical skill development"
    ],
    duration: "1 Year Course",
    schedule: "Monday to Friday (Daily 2 Hours)",
    curriculum: [
      "English Language & Grammar Essentials",
      "Mathematics & Logical Reasoning",
      "General Sciences & Environmental Studies",
      "Social Studies & Basic General Knowledge"
    ]
  },
  {
    id: "acad-2",
    title: "Middle School (6-8)",
    category: "academic",
    description: "All Subjects - Comprehensive learning for middle grades.",
    icon: "GraduationCap",
    badge: "Grades 6-8",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    benefits: [
      "Concept-oriented interactive subject teaching",
      "Formative assessment cycles to track growth",
      "Enhanced study routines and exam preparation habits",
      "Direct doubt-clearing sessions with subject experts"
    ],
    duration: "1 Year Course",
    schedule: "Monday to Friday (Daily 2 Hours)",
    curriculum: [
      "English Literature & Creative Writing",
      "Algebra, Geometry & Fundamental Arithmetic",
      "Physics, Chemistry & Biology basics",
      "History, Geography & Civics elements"
    ]
  },
  {
    id: "acad-3",
    title: "High School (9-10)",
    category: "academic",
    description: "All Subjects - Board exam preparation and conceptual clarity.",
    icon: "Award",
    badge: "Grades 9-10",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    benefits: [
      "Rigorous board exam preparation",
      "Mock test series & timing strategy workshops",
      "Stress management & exam preparation counseling",
      "Doubt clarification by senior expert faculty"
    ],
    duration: "1 Year Course",
    schedule: "Monday to Saturday (Daily 2-3 Hours)",
    curriculum: [
      "Advanced Mathematics (Algebra, Geometry, Trigonometry)",
      "General Science (Physics, Chemistry & Biology)",
      "Social Sciences (History, Geography, Economics, Civics)",
      "Language, Grammar & Comprehension Mastery"
    ]
  },
  {
    id: "acad-4",
    title: "Higher Secondary (11-12)",
    category: "academic",
    description: "Maths, Physics, Chemistry, Accountancy.",
    icon: "Calculator",
    badge: "Grades 11-12",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    benefits: [
      "In-depth analysis of specialized subject streams",
      "Foundation strategies for competitive exams",
      "Regular mock boards and board-format checkups",
      "Formula cheat-sheets and practical guidance"
    ],
    duration: "1 Year Course",
    schedule: "Monday to Saturday (Daily 2-3 Hours)",
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
    description: "Express creativity through colors and strokes.",
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
    schedule: "Saturdays & Sundays (2 Hours per session)",
    curriculum: [
      "Basic Shapes, Pencil Shading & Still Life Sketching",
      "Oil Pastel & Wax Crayon Blending Techniques",
      "Watercolor Landscapes & Portrait Painting",
      "Creative Cartoon Art & Poster Designing"
    ]
  },
  {
    id: "skill-2",
    title: "Hindi (Spoken & Written)",
    category: "skill",
    description: "Master the national language for fluency and academics.",
    icon: "Languages",
    badge: "Language",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    benefits: [
      "Complete grammatical writing accuracy",
      "Conversational fluency in professional and social settings",
      "Direct preparation support for Hindi Board exams",
      "Vocabulary enrichment and script reading"
    ],
    duration: "6 Months Course",
    schedule: "Alternative days (Mon, Wed, Fri - 1.5 Hours)",
    curriculum: [
      "Hindi Vowels, Consonants & Devanagari Script writing",
      "Nouns, Pronouns, Verbs & Tense structures",
      "Sentence Construction & Daily Conversations",
      "Written Composition, Letter writing & Essays"
    ]
  },
  {
    id: "skill-3",
    title: "Spoken Hindi",
    category: "skill",
    description: "Focus on conversational Hindi skills.",
    icon: "MessageCircle",
    badge: "Language",
    color: "bg-amber-100 text-amber-800 border-amber-200",
    benefits: [
      "Immediate focus on verbal communication elements",
      "Daily life vocabulary expansion",
      "Confidence building for public speaking in Hindi",
      "Accent reduction and listening comprehension"
    ],
    duration: "3 Months Course",
    schedule: "Alternative days (Tue, Thu, Sat - 1.5 Hours)",
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
    description: "Build strong reading and pronunciation skills.",
    icon: "Mic",
    badge: "Early Learners",
    color: "bg-teal-100 text-teal-800 border-teal-200",
    benefits: [
      "Early reading & word decoding strategies",
      "Clear, native-like English pronunciation",
      "Spelling correction and spelling accuracy foundation",
      "Independent reading habits from a young age"
    ],
    duration: "3 Months Course",
    schedule: "Saturdays & Sundays (1.5 Hours per session)",
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
      "Enhanced vocabulary database for public speaking",
      "Confidence boost in group discussions"
    ],
    duration: "4 Months Course",
    schedule: "Alternative days (Mon, Wed, Fri - 1.5 Hours)",
    curriculum: [
      "Grammar essentials (Tenses, Active-Passive, Modals)",
      "Daily Conversation and Listening drills",
      "Public Speaking, debate formats & presentations",
      "Interview etiquette and resume dialogue skills"
    ]
  },
  {
    id: "skill-6",
    title: "Handwriting",
    category: "skill",
    description: "Improve writing speed, legibility, and presentation.",
    icon: "PenTool",
    badge: "Skill",
    color: "bg-rose-100 text-rose-800 border-rose-200",
    benefits: [
      "Neat, readable cursive and print writing styling",
      "Optimized writing posture and ergonomic pen-grip",
      "Enhanced speed for school and public exams",
      "Uniform letter height, slant, and margin spacing"
    ],
    duration: "2 Months Course",
    schedule: "Alternative days (Tue, Thu - 1 Hour)",
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
    description: "Develop strategic thinking and problem-solving.",
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
    schedule: "Saturdays & Sundays (2 Hours per session)",
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
    description: "Enhance mental math, speed, and concentration.",
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
    schedule: "Once a week (Saturday or Sunday 2 Hours)",
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
    description: "Ancient techniques for rapid calculation.",
    icon: "Lightbulb",
    badge: "Mental Math",
    color: "bg-lime-100 text-lime-800 border-lime-200",
    benefits: [
      "Saves up to 80% time during mathematical calculations",
      "Provides alternative checking methods for accuracy",
      "Boosts competitive exam performance",
      "Reduces dependence on calculators and worksheets"
    ],
    duration: "4 Months Course",
    schedule: "Saturdays & Sundays (1.5 Hours per session)",
    curriculum: [
      "Ekadhikena Purvena fast addition and subtraction",
      "Vertically & Crosswise rapid multiplication formulas",
      "Squares, cubes, and root shortcuts",
      "Speed algebraic expression simplification"
    ]
  },
  {
    id: "skill-10",
    title: "French",
    category: "skill",
    description: "Learn basic and intermediate French. (French Classes)",
    icon: "Globe",
    badge: "Language",
    color: "bg-violet-100 text-violet-800 border-violet-200",
    benefits: [
      "Develops a valuable global secondary language skill",
      "Prepares for DELF basic certificate exams",
      "Aids in scoring top marks in school French curriculum",
      "Builds cognitive flexibility and multicultural skills"
    ],
    duration: "6 Months Course",
    schedule: "Saturdays & Sundays (2 Hours per session)",
    curriculum: [
      "French Alphabet, Pronunciation & Basic Greetings",
      "Definite/Indefinite articles & Subject pronouns",
      "Verb conjugations (Avoir, Être, Aller) in present tense",
      "Conversational French dialogues and listening reviews"
    ]
  },
  {
    id: "skill-11",
    title: "Japanese",
    category: "skill",
    description: "Learn basic and intermediate Japanese. (Japanese Classes)",
    icon: "Globe2",
    badge: "Language",
    color: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
    benefits: [
      "Develops foundation JLPT N5 proficiency",
      "Enhances cognitive function through script recognition",
      "Explores cultural customs and etiquette vocabulary",
      "Excellent skill for career and global travel"
    ],
    duration: "6 Months Course",
    schedule: "Saturdays & Sundays (2 Hours per session)",
    curriculum: [
      "Hiragana & Katakana script stroke orders",
      "Basic Kanji symbols (numbers, days, directions)",
      "Self-introduction (Jikoshoukai) & honorific greetings",
      "Basic particles (wa, ga, ni, de) and sentence builders"
    ]
  },

  // Arts
  {
    id: "art-1",
    title: "Classical Dance",
    category: "arts",
    description: "Learn traditional Indian dance forms gracefully.",
    icon: "Music",
    badge: "Dance",
    color: "bg-red-100 text-red-800 border-red-200",
    benefits: [
      "Improves core physical strength, flexibility & posture",
      "Develops expressive facial acting (Abhinaya) skills",
      "Fosters rhythm (Tala) and hand-eye foot coordination",
      "Builds deep appreciation for classical art heritage"
    ],
    duration: "Ongoing / Flexible",
    schedule: "Saturdays & Sundays (2 Hours per session)",
    curriculum: [
      "Feet positions (Adavus) and posture drills",
      "Single and double hand gestures (Asamyuta & Samyuta Mudras)",
      "Rhythm patterns, steps, and basic postures",
      "Traditional Bharatanatyam Margam compositions"
    ]
  },
  {
    id: "art-3",
    title: "Flute",
    category: "arts",
    description: "Master the melodious tunes of the flute.",
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
    schedule: "Saturdays & Sundays (1.5 Hours per session)",
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
    description: "Learn musical theory and keyboard playing.",
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
    schedule: "Saturdays & Sundays (2 Hours per session)",
    curriculum: [
      "Keyboard structure, finger numbers, and key identification",
      "Reading treble and bass staff music notation sheet music",
      "Chords formation, inversions, and finger techniques",
      "Solo recital playing, pop chords, and classical pieces"
    ]
  },
  {
    id: "art-5",
    title: "Guitar",
    category: "arts",
    description: "Strum your way into beautiful acoustic melodies.",
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
    schedule: "Saturdays & Sundays (2 Hours per session)",
    curriculum: [
      "Guitar anatomy, tuning methods, and pick styles",
      "Basic open major/minor chords and transition exercises",
      "Standard strumming patterns and simple fingerpicking styles",
      "Popular campfire songs, tablatures, and basic scale solos"
    ]
  }
];
