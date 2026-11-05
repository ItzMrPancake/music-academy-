export interface TuitionTier {
  id: string;
  name: string;
  type: 'group' | 'private';
  rate: number;
  cadence: string;
  duration: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

export const TUITION_TIERS: TuitionTier[] = [
  {
    id: 'group',
    name: 'Group Sessions',
    type: 'group',
    rate: 70,
    cadence: 'month',
    duration: 'Collaborative Duo',
    description: 'Intimate 2-student classes, highly collaborative environment fostering rhythm, timing, and shared musicianship.',
    features: [
      'Two students per instructor class',
      'Ensemble listening & timing focus',
      'Shared repertoire & peer motivation',
      'Weekly scheduled group session'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Private',
    type: 'private',
    rate: 95,
    cadence: 'month',
    duration: 'Four 30-min sessions',
    description: 'Four 30-minute one-on-one sessions. The classic foundation balancing essential music theory with dedicated practical instruction.',
    isPopular: true,
    features: [
      'Four 30-minute private lessons per month',
      '1-on-1 personalized instructor attention',
      'Custom repertoire & individual pacing',
      'Flexible weekly scheduling (Mon–Fri 3:30–8 PM)'
    ]
  },
  {
    id: 'extended',
    name: 'Extended Private',
    type: 'private',
    rate: 142,
    cadence: 'month',
    duration: 'Four 45-min sessions',
    description: 'Four 45-minute one-on-one sessions. Ideal for intermediate students deepening their technique, musicality, and ear training.',
    features: [
      'Four 45-minute private lessons per month',
      'Expanded theoretical & ear-training time',
      'Deep dive into technical precision',
      'Audition & recital preparation focus'
    ]
  },
  {
    id: 'intensive',
    name: 'Intensive Private',
    type: 'private',
    rate: 190,
    cadence: 'month',
    duration: 'Four 60-min sessions',
    description: 'Four 60-minute one-on-one sessions. Comprehensive conservatory-level training for serious musicians and advanced performers.',
    features: [
      'Four 60-minute private lessons per month',
      'Full conservatory immersion & advanced repertoire',
      'Deep stylistic interpretation & improvisation',
      'Priority scheduling including Saturday slots'
    ]
  }
];

export interface ProgramItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  extendedOverview: string;
  highlights: string[];
  scheduleNote: string;
  imageUrl: string;
  instructorFocus: string;
}

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'guitar',
    name: 'Guitar',
    subtitle: 'Acoustic, Electric & Classical',
    description:
      'From foundational chords to advanced theory, our guitar instruction blends technical precision with creative expression. Perfect for any skill level.',
    extendedOverview:
      'Whether you want to master intricate fingerstyle acoustic, classical repertoire, rock rhythm, or jazz improvisation, our personalized curriculum builds solid fretboard mechanics, scale mastery, and dynamic touch.',
    highlights: [
      'Fretboard navigation & chord vocabulary',
      'Fingerpicking technique & flatpicking precision',
      'Music theory, soloing, and ear training',
      'Available Mon–Fri 3:30–8:00 PM + Exclusive Saturday sessions'
    ],
    scheduleNote: 'Mon–Fri 3:30–8:00 PM & Saturday sessions available',
    imageUrl: './assets/images/programs_guitar_craft_1793912523569.jpg',
    instructorFocus: 'Contemporary & Classical Performance'
  },
  {
    id: 'piano',
    name: 'Piano',
    subtitle: 'Keyboard Mastery & Harmony',
    description:
      'Experience highly focused, one-on-one piano instruction. We balance essential music theory with dedicated practice time to build true keyboard mastery.',
    extendedOverview:
      'From beginner keyboard fundamentals to advanced polyphonic pieces, our piano studio emphasizes posture, proper hand position, sight-reading, and expressive touch on grand pianos.',
    highlights: [
      'Sight-reading & classical notation',
      'Chord progressions, harmony & accompaniment',
      'Ergonomic technique & hand independence',
      'Performance interpretation & stage poise'
    ],
    scheduleNote: 'Monday – Friday, 3:30 PM to 8:00 PM',
    imageUrl: './assets/images/programs_piano_keys_1793912524283.jpg',
    instructorFocus: 'Classical, Contemporary & Liturgical'
  },
  {
    id: 'voice',
    name: 'Voice',
    subtitle: 'Vocal Coaching & Artistry',
    description:
      'Discover your true range. Our vocal coaching is entirely bespoke, adapting as your voice develops to ensure healthy, powerful, and confident performance.',
    extendedOverview:
      'We tailor vocal instruction to your anatomy and goals. Learn diaphragmatic breath control, vocal resonance, pitch accuracy, diction, and emotional delivery across musical theater, pop, worship, and classical styles.',
    highlights: [
      'Healthy vocal technique & strain prevention',
      'Breath support & pitch accuracy refinement',
      'Expanded vocal range & tone resonance',
      'Microphone technique & stage confidence'
    ],
    scheduleNote: 'Monday – Friday, 3:30 PM to 8:00 PM',
    imageUrl: './assets/images/academy_studio_aesthetic_1793912522983.jpg',
    instructorFocus: 'Vocal Health, Range & Dynamic Expression'
  },
  {
    id: 'drums',
    name: 'Drums / Percussion',
    subtitle: 'Rhythm, Timekeeping & Groove',
    description:
      'Elevate your rhythm. Whether you are learning basic beats or complex polyrhythms, our percussion sessions are high-energy and deeply engaging.',
    extendedOverview:
      'Master the pocket. Develop limb independence, stick control, rudiments, dynamic touch, and rhythmic reading. Students gain experience driving bands and laying down confident grooves.',
    highlights: [
      'Snare rudiments & stick control mastery',
      'Four-limb drum kit coordination & syncopation',
      'Timekeeping, polyrhythms & style versatility',
      'Available Mon–Fri 3:30–8:00 PM + Exclusive Saturday sessions'
    ],
    scheduleNote: 'Mon–Fri 3:30–8:00 PM & Exclusive Saturday sessions',
    imageUrl: './assets/images/hero_instruments_cinematic_1793912521668.jpg',
    instructorFocus: 'Rock, Jazz, Latin & Orchestral Percussion'
  },
  {
    id: 'violin',
    name: 'Violin',
    subtitle: 'Classical Precision & Detail',
    description:
      'Master the details. With limited availability, our violin program offers meticulous, dedicated instruction for students seeking classical or contemporary excellence.',
    extendedOverview:
      'The violin demands exceptional nuance and ear training. Our instructors guide you through flawless posture, bow arm fluidity, precise intonation, shifting, and nuanced vibrato for solo and orchestral performance.',
    highlights: [
      'Pure intonation & ear training focus',
      'Bow distribution, stroke variety & tone control',
      'Posture, shifting & ergonomic positioning',
      'Limited studio roster for high-caliber instruction'
    ],
    scheduleNote: 'Monday – Friday, 3:30 PM to 8:00 PM (Limited Spots)',
    imageUrl: './assets/images/programs_violin_studio_1793912524224.jpg',
    instructorFocus: 'Classical Mastery & Fine Intonation'
  }
];

export interface TuitionCalculation {
  tier: TuitionTier;
  monthlyTuition: number;
  registrationFee: number;
  registrationFeeWaived: boolean;
  firstMonthTotal: number;
}

export function calculateTuition(
  tierId: string,
  isMilitary: boolean = false,
  studentCountInFamily: number = 1
): TuitionCalculation {
  const tier = TUITION_TIERS.find((t) => t.id === tierId) || TUITION_TIERS[1];
  const monthlyTuition = tier.rate * Math.max(1, studentCountInFamily);

  let registrationFee = 0;
  if (!isMilitary) {
    if (studentCountInFamily <= 1) {
      registrationFee = 40;
    } else {
      registrationFee = Math.min(60, 40 * studentCountInFamily);
    }
  }

  return {
    tier,
    monthlyTuition,
    registrationFee,
    registrationFeeWaived: isMilitary,
    firstMonthTotal: monthlyTuition + registrationFee
  };
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  program?: string;
  tier?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof InquiryFormData, string>>;
}

export function validateInquiryForm(data: InquiryFormData): ValidationResult {
  const errors: Partial<Record<keyof InquiryFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name';
  }

  // Phone validation (accepts digits, dashes, parens, minimum 7 digits)
  const digits = (data.phone || '').replace(/\D/g, '');
  if (!digits || digits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.subject || data.subject.trim().length < 2) {
    errors.subject = 'Please specify a subject';
  }

  if (!data.message || data.message.trim().length < 5) {
    errors.message = 'Please provide a message with at least 5 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
