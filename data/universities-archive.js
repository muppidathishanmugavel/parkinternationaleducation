// BACKUP OF ALL PREVIOUSLY CONFIGURED UNIVERSITIES
// Safe archive to restore or add any university back at any time

const UNIVERSITIES_DATA = {
    Uzbekistan: [
      {
        id: "kokand",
        name: "Kokand Medical University",
        subtitle: "Kokand Abu Ali Ibn Sino Public Health Technical School",
        city: "Kokand, Fergana Valley",
        country: "Uzbekistan",
        type: "Government Medical University",
        est: "2005 (Legacy 1925)",
        legacyNote: "Established in 1925 as a nursing & midwifery training center. Received official status as Kokand Medical Educational Institution in 1954, renamed Abu Ali Ibn Sino Public Health Technical School in 2003, and elevated to modern university status in 2005 with state-of-the-art clinical bases.",
        duration: "6 Years (5 Yrs Academic + 1 Yr Clinical Internship)",
        medium: "100% English Medium",
        nationalRank: 7,
        worldRank: 5882,
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 600,
        totalAnnualUSD: 4100,
        approxAnnualINR: "₹3,40,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years. NEET qualification mandatory.",
        recognitions: ["NMC (India)", "WHO Listed", "UNESCO Approved", "Ministry of Health Uzbekistan"],
        collaborations: [
          "Seoul National University (South Korea)",
          "Humboldt University (Berlin, Germany)",
          "Russian State Medical University",
          "Samara State Medical University",
          "Moscow State Medical University",
          "Family Medicine Residency Centre",
          "Chonnam State University (Korea)"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Dentistry",
          "Faculty of Pharmacy",
          "Faculty of Neuroscience",
          "Faculty of Pediatrics",
          "Faculty of Surgery",
          "Faculty of Postgraduate Residency Programs"
        ],
        highlights: [
          "Direct NMC & WHO recognition with 100% English medium curriculum.",
          "Strict ragging-free campus ensuring safe learning for male & female students.",
          "5 student dormitories with a capacity of 1,700 students equipped with turnstile security.",
          "On-campus Indian mess providing authentic South & North Indian food.",
          "Affordable tuition fee ($3,500/year) guaranteed in writing with no hidden extras.",
          "Global collaborations with leading medical faculties in Germany, Korea & Russia."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 2", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 3", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 4", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 5", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 6 (Internship)", tuition: "$3,500", hostel: "$600", total: "$4,100" }
        ],
        admissionProcess: [
          "Submit academic profile & NEET scorecard through PARK Education desk.",
          "Formal application submission addressed to the rector with language preferences.",
          "Issuance of official University Invitation / Admission Statement.",
          "Notarized document translation (Russian/Uzbek) & student visa processing.",
          "Airport reception in Uzbekistan, campus check-in & hostel room allotment."
        ],
        requiredDocs: [
          "Valid International Passport copy",
          "10th & 12th Grade Marksheets (Min 50% PCB)",
          "NEET Qualification Scorecard",
          "Certified copy of Birth Certificate",
          "Medical Fitness & Blood Test Reports",
          "Passport-size Photographs (white background)",
          "Official Admission Invitation Statement"
        ]
      },
      {
        id: "fergana",
        name: "Fergana Medical Institute of Public Health",
        subtitle: "Leading Public Health & Medical Research Center in Fergana Valley",
        city: "Fergana City",
        country: "Uzbekistan",
        type: "Public / Government",
        est: "1991 / 1998",
        legacyNote: "Founded in 1991 as a medical training center affiliated with Fergana State University and recognized as an autonomous public health institute in 1998, featuring 19+ clinical departments.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: 9,
        worldRank: 5013,
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 750,
        totalAnnualUSD: 4250,
        approxAnnualINR: "₹3,52,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years.",
        recognitions: ["NMC (India)", "WHO Listed", "Ministry of Higher Education Uzbekistan"],
        collaborations: [
          "International Public Health Councils",
          "European Public Health Research Alliances"
        ],
        faculties: [
          "General Medicine (MBBS)",
          "Preventive Medicine & Epidemiology",
          "Pediatrics",
          "Higher Clinical Nursing",
          "Pharmaceutical Sciences"
        ],
        highlights: [
          "19+ specialized clinical departments with modern diagnostic equipment.",
          "Extensive regional hospital bedside training across Fergana public hospitals.",
          "Modern student hostels with round-the-clock security and Indian food mess.",
          "Fergana International Airport offers rapid domestic connections to Tashkent.",
          "Direct pathway to NMC Foreign Medical Graduate Licentiate exams."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,500", hostel: "$750", total: "$4,250" },
          { year: "Year 2", tuition: "$3,500", hostel: "$750", total: "$4,250" },
          { year: "Year 3", tuition: "$3,500", hostel: "$750", total: "$4,250" },
          { year: "Year 4", tuition: "$3,500", hostel: "$750", total: "$4,250" },
          { year: "Year 5", tuition: "$3,500", hostel: "$750", total: "$4,250" },
          { year: "Year 6", tuition: "$3,500", hostel: "$750", total: "$4,250" }
        ],
        admissionProcess: [
          "Application review through PARK Education international desk.",
          "Provisional admission confirmation letter.",
          "Consular visa stamping & travel clearance.",
          "Hostel check-in and curriculum commencement."
        ]
      },
      {
        id: "tashkent",
        name: "Tashkent Medical Academy",
        subtitle: "Premier National Medical Academy in Uzbekistan Capital City",
        city: "Tashkent (Capital)",
        country: "Uzbekistan",
        type: "Premier Government Medical Academy",
        est: "2005 (Presidential Decree)",
        legacyNote: "Formed under Presidential Decree by merging the First and Second Tashkent State Medical Institutes, creating Uzbekistan's premier center of academic medicine and clinical excellence.",
        duration: "6 Years (5 Yrs Academic + 1 Yr Clinical Internship)",
        medium: "100% English Medium",
        nationalRank: 7,
        worldRank: 5882,
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 600,
        totalAnnualUSD: 4100,
        approxAnnualINR: "₹3,40,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years.",
        recognitions: ["NMC (India)", "WHO Listed", "UNESCO Approved", "MCI Recognized"],
        collaborations: [
          "Charité – Universitätsmedizin Berlin",
          "Seoul National University Hospital",
          "Moscow State Medical University"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Medical Diagnostics & Imaging",
          "Faculty of Dentistry",
          "Faculty of Preventive Medicine",
          "Postgraduate Medical Specialties"
        ],
        highlights: [
          "Located in capital Tashkent with highest clinical hospital bed capacity in the nation.",
          "7 Inter-clinic simulation laboratories and multi-specialty research hospitals.",
          "Direct 3-hour international flights from New Delhi and Mumbai.",
          "High historical pass percentage in Indian medical licensing examinations.",
          "Modern capital dormitories with metro connectivity and Indian cuisine."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 2", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 3", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 4", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 5", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 6", tuition: "$3,500", hostel: "$600", total: "$4,100" }
        ],
        admissionProcess: [
          "Evaluation of 12th marks and NEET scorecard.",
          "Official Tashkent Medical Academy admission letter issuance.",
          "Consular student visa endorsement.",
          "Direct airport pickup in Tashkent & campus hostel allotment."
        ]
      },
      {
        id: "samarkand",
        name: "Samarkand State Medical University",
        subtitle: "Historic 95-Year-Old Pioneer of Medical Education in Central Asia",
        city: "Samarkand",
        country: "Uzbekistan",
        type: "Public / State University",
        est: "1930",
        legacyNote: "Founded in 1930, Samarkand State Medical University has trained over 40,000 physicians and is celebrated as Central Asia's oldest and most prestigious state medical university.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: 16,
        worldRank: 7805,
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 350,
        totalAnnualUSD: 3850,
        approxAnnualINR: "₹3,19,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years.",
        recognitions: ["NMC (India)", "WHO Listed", "FAIMER", "UNESCO"],
        collaborations: [
          "Erasmus+ Academic Exchange Network",
          "Universities across Europe, Russia, and South Korea"
        ],
        faculties: [
          "General Medicine (Therapeutic Faculty)",
          "Pediatric Medicine",
          "Medical Biology & Diagnostics",
          "Dentistry",
          "Pharmacy"
        ],
        highlights: [
          "95+ years of clinical medical education heritage.",
          "Extremely economical hostel fee ($350/year) among top government universities.",
          "Digitized campus with European credit-module teaching framework.",
          "Large, thriving community of 2,000+ Indian medical students.",
          "Subsidized Indian cafeteria serving North and South Indian home-style meals."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,500", hostel: "$350", total: "$3,850" },
          { year: "Year 2", tuition: "$3,500", hostel: "$350", total: "$3,850" },
          { year: "Year 3", tuition: "$3,500", hostel: "$350", total: "$3,850" },
          { year: "Year 4", tuition: "$3,500", hostel: "$350", total: "$3,850" },
          { year: "Year 5", tuition: "$3,500", hostel: "$350", total: "$3,850" },
          { year: "Year 6", tuition: "$3,500", hostel: "$350", total: "$3,850" }
        ],
        admissionProcess: [
          "Verification of NEET qualification and 12th PCB credentials.",
          "University provisional admission statement issuance.",
          "Embassy visa stamping & documentation.",
          "Arrival in Samarkand, registration and class commencement."
        ]
      },
      {
        id: "impulse",
        name: "Impulse Medical Institute",
        subtitle: "Modern European-Accredited Medical Institute with 3D Virtual Simulation",
        city: "Bukhara / Tashkent",
        country: "Uzbekistan",
        type: "Accredited Medical Institute",
        est: "Modern Accredited",
        legacyNote: "Established as an innovative, student-centric medical institution featuring European credit curriculum, interactive smart classrooms, and 3D virtual dissection tables.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: "Top 25",
        worldRank: "Recognized",
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 600,
        totalAnnualUSD: 4100,
        approxAnnualINR: "₹3,40,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years.",
        recognitions: ["WHO Listed", "WDOMS Directory", "Ministry of Higher Education Uzbekistan"],
        collaborations: [
          "European Medical Education Alliances",
          "International Simulation Hospital Networks"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Basic Clinical Sciences",
          "Faculty of Practical Skills & Diagnostics"
        ],
        highlights: [
          "3D Virtual Anatomy tables & high-fidelity simulation training wards.",
          "Compact student-to-teacher ratio (1:12) for intensive clinical mentoring.",
          "Curriculum designed to align with NExT, USMLE Step 1, and PLAB benchmarks.",
          "Air-conditioned student residence with high-speed internet & Indian mess.",
          "Experienced foreign clinical faculty and English-medium instruction."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 2", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 3", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 4", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 5", tuition: "$3,500", hostel: "$600", total: "$4,100" },
          { year: "Year 6", tuition: "$3,500", hostel: "$600", total: "$4,100" }
        ],
        admissionProcess: [
          "Online documentation & eligibility verification.",
          "Provisional admission confirmation.",
          "Uzbekistan student visa stamping.",
          "Campus orientation & hostel room assignment."
        ]
      },
      {
        id: "bukhara",
        name: "Bukhara State Medical Institute",
        subtitle: "Named after Abu Ali Ibn Sino (Avicenna) – Father of Modern Medicine",
        city: "Bukhara",
        country: "Uzbekistan",
        type: "Government State Medical Institute",
        est: "1990",
        legacyNote: "Named after the historic father of modern clinical medicine Avicenna (Abu Ali Ibn Sino), who was born in the Bukhara region. Established in 1990 as a premier state clinical institute.",
        duration: "6 Years (5 Yrs Academic + 1 Yr Clinical Internship)",
        medium: "100% English Medium",
        nationalRank: 18,
        worldRank: 8963,
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 500,
        totalAnnualUSD: 4000,
        approxAnnualINR: "₹3,32,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years.",
        recognitions: ["NMC (India)", "WHO Listed", "FAIMER", "UNESCO"],
        collaborations: [
          "Leading medical academies in Turkey, Russia, and Germany",
          "WFME global medical standards partnership"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Dentistry",
          "Faculty of Pediatrics",
          "Faculty of Higher Nursing",
          "Faculty of Traditional & Modern Medicine"
        ],
        highlights: [
          "Rich medical heritage named after Avicenna (Abu Ali Ibn Sino).",
          "Affiliated with multiple multidisciplinary clinical hospitals in Bukhara.",
          "Very affordable hostel accommodation (~$500/year, ~$42/month).",
          "Dedicated Indian student wing with full-time North & South Indian cooks.",
          "Regular NEXT / FMGE screening mock exams conducted by visiting Indian faculty."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,500", hostel: "$500", total: "$4,000" },
          { year: "Year 2", tuition: "$3,500", hostel: "$500", total: "$4,000" },
          { year: "Year 3", tuition: "$3,500", hostel: "$500", total: "$4,000" },
          { year: "Year 4", tuition: "$3,500", hostel: "$500", total: "$4,000" },
          { year: "Year 5", tuition: "$3,500", hostel: "$500", total: "$4,000" },
          { year: "Year 6", tuition: "$3,500", hostel: "$500", total: "$4,000" }
        ],
        admissionProcess: [
          "Marksheet assessment through PARK admissions team.",
          "Official rector admission letter.",
          "Consular visa stamping & foreign travel clearance.",
          "Hostel check-in and academic schedule commencement."
        ]
      },
      {
        id: "namangan",
        name: "Namangan State Medical University",
        subtitle: "Vibrant Public University with 28,500+ Students & 40+ Global Partnerships",
        city: "Namangan",
        country: "Uzbekistan",
        type: "Public / Government",
        est: "1942 / Medical Faculty",
        legacyNote: "With historical roots reaching back to 1942, Namangan State University established its dedicated medical faculty to serve the Fergana Valley, developing into modern medical programs.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: "Top 20",
        worldRank: "Recognized",
        tuitionFeeUSD: 3300,
        hostelFeeUSD: 500,
        totalAnnualUSD: 3800,
        approxAnnualINR: "₹3,15,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years.",
        recognitions: ["NMC (India)", "WHO Listed", "Ministry of Higher Education Uzbekistan"],
        collaborations: [
          "40+ international university collaborations across Asia and Europe",
          "Collaborative medical research and faculty exchange programs"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Pediatrics",
          "Faculty of Medical Biology",
          "Faculty of Pharmacy"
        ],
        highlights: [
          "Large, comprehensive public university with 28,500+ enrolled students.",
          "Extremely affordable total fee package (~$3,800/year tuition + hostel).",
          "Modern clinical diagnostic laboratories and anatomy museum.",
          "Peaceful, hospitable city with low daily living costs for Indian families.",
          "Round-the-clock Indian hostel warden and fresh Indian food."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,300", hostel: "$500", total: "$3,800" },
          { year: "Year 2", tuition: "$3,300", hostel: "$500", total: "$3,800" },
          { year: "Year 3", tuition: "$3,300", hostel: "$500", total: "$3,800" },
          { year: "Year 4", tuition: "$3,300", hostel: "$500", total: "$3,800" },
          { year: "Year 5", tuition: "$3,300", hostel: "$500", total: "$3,800" },
          { year: "Year 6", tuition: "$3,300", hostel: "$500", total: "$3,800" }
        ],
        admissionProcess: [
          "Profile verification & eligibility confirmation.",
          "Admission letter dispatch within 3 to 5 business days.",
          "Government visa clearance & student visa.",
          "Escorted travel and direct hostel check-in."
        ]
      }
    ],
    Philippines: [
      {
        id: "perpetual",
        name: "University of Perpetual Help System Delta",
        subtitle: "University of Perpetual Help System DALTA (UPHSD) – Las Piñas, Manila",
        city: "Las Piñas City, Metro Manila",
        country: "Philippines",
        type: "Private Comprehensive University",
        est: "1975",
        legacyNote: "Established in February 1975, the University of Perpetual Help System DALTA is a premier medical institution with campuses in Las Piñas, Cavite, and Calamba. Home to over 20,000 students and 1,500+ faculty under Prof. Anthony Jose M. Tamayo. Follows the standard US medical education system with English-medium BS-MD programs.",
        duration: "5+1 Years (BS-MD + Internship)",
        medium: "100% English Medium",
        nationalRank: "Top Tier",
        worldRank: "Recognized",
        tuitionFeeUSD: 5850,
        hostelFeeUSD: 1000,
        totalAnnualUSD: 6850,
        approxAnnualINR: "₹4,09,500 / year (Tuition)",
        neetRequired: "Mandatory (With qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% aggregate in Physics, Chemistry, and Biology (10+2). Completed 17+ years of age. NMAT exam to transition from BS to MD.",
        recognitions: [
          "NMC (India)",
          "WHO Approved",
          "CHED Philippines",
          "ECFMG (USA)",
          "FAIMER"
        ],
        highlights: [
          "Own 500-bed university hospital on campus for clinical clerkships.",
          "Over 20,000 students and established Indian student community.",
          "English-medium curriculum aligned with USMLE and international standards.",
          "Intake starts in September with 45–60 days admission processing.",
          "Comfortable student hostels and easily adaptable tropical climate."
        ],
        feeSchedule: [
          { year: "Pre-Med (BS)", tuition: "$5,850", hostel: "$1,000", total: "$6,850" },
          { year: "MD - 1st Year", tuition: "$5,850", hostel: "$1,000", total: "$6,850" },
          { year: "MD - 2nd Year", tuition: "$5,850", hostel: "$1,000", total: "$6,850" },
          { year: "MD - 3rd Year", tuition: "$5,850", hostel: "$1,000", total: "$6,850" },
          { year: "MD - 4th Year", tuition: "$5,850", hostel: "$1,000", total: "$6,850" },
          { year: "1-Yr Internship", tuition: "Included / Hospital Clerkship", hostel: "$1,000", total: "Hostel Only" }
        ],
        admissionProcess: [
          "Submission of 10th & 12th marksheets, passport copy & NEET scorecard.",
          "Admission confirmation and Letter of Acceptance.",
          "NMAT entrance evaluation for BS-to-MD transition.",
          "Embassy visa stamping & police clearance authentication.",
          "Travel confirmation, airport pickup, and hostel room allotment."
        ]
      },
      {
        id: "davao",
        name: "Davao Medical Foundation",
        subtitle: "Davao Medical School Foundation (DMSF) – College of Medicine",
        city: "Davao City, Mindanao",
        country: "Philippines",
        type: "Top-Ranked Medical School",
        est: "1976",
        legacyNote: "Established in 1976, DMSF is the first medical college in Mindanao. Affiliated with Davao Medical Center Foundation Hospital and top government health units. Recognized among the safest cities in the world (awarded Best Livable City in Philippines). Boasts an exceptional 83% NMC/FMGE screening passing rate for Indian students.",
        duration: "5.5 Years (BS + MD + Internship)",
        medium: "100% English Medium",
        nationalRank: "#1 in Mindanao",
        worldRank: "Recognized",
        tuitionFeeUSD: 5100,
        hostelFeeUSD: 900,
        totalAnnualUSD: 6000,
        approxAnnualINR: "₹3,57,000 / year (MD)",
        neetRequired: "Mandatory (With qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% aggregate in Physics, Chemistry, and Biology (10+2). Completed 18 years of age. NEET qualified.",
        recognitions: [
          "NMC (India)",
          "WHO Listed",
          "CHED Philippines",
          "ECFMG (USA)",
          "PAASCU Accredited"
        ],
        highlights: [
          "Highest NMC/FMGE passing percentage (approx. 83%) among Philippine medical schools.",
          "Affiliated with Davao Medical College Foundation Hospital with 4,000+ patient beds.",
          "Smart classrooms, 3D virtual dissection tables, and modern simulation labs.",
          "No capitation or hidden fees; fixed published fee structure.",
          "Hygienic on-campus hostels with dedicated North & South Indian mess."
        ],
        feeSchedule: [
          { year: "BS (3 Semesters + Summer)", tuition: "$11,374 (Total BS)", hostel: "$900", total: "$12,274" },
          { year: "MD - 1st Year", tuition: "$5,100", hostel: "$900", total: "$6,000" },
          { year: "MD - 2nd Year", tuition: "$5,100", hostel: "$900", total: "$6,000" },
          { year: "MD - 3rd Year", tuition: "$5,100", hostel: "$900", total: "$6,000" },
          { year: "MD - 4th Year", tuition: "$5,100", hostel: "$900", total: "$6,000" }
        ],
        admissionProcess: [
          "Direct registration with 10th/12th marksheets & NEET certificate.",
          "Provisional admission confirmation letter.",
          "Visa processing through Philippine Embassy in New Delhi.",
          "Travel arrangements, airport reception in Davao City, and direct hostel check-in."
        ]
      },
      {
        id: "gullas",
        name: "Gullas College of Medicine",
        subtitle: "UV Gullas College of Medicine (UV.GCM) – Cebu City",
        city: "Cebu City",
        country: "Philippines",
        type: "Private Medical College",
        est: "1919",
        legacyNote: "Founded in 1919 (Medical College established 1977), UV Gullas College of Medicine is situated in the metropolitan healthcare hub of Cebu. Features air-conditioned smart classrooms, an extensive medical library, and an in-house clinical hospital ensuring hands-on patient rounds.",
        duration: "5.5 to 6 Years with Internship",
        medium: "100% English Medium",
        nationalRank: "Top Tier",
        worldRank: "Recognized",
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 850,
        totalAnnualUSD: 4850,
        approxAnnualINR: "₹3,20,000 / year (MD)",
        neetRequired: "Mandatory (With qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB aggregate (10+2). Age 17+ years. NEET qualification mandatory.",
        recognitions: [
          "NMC (India)",
          "WHO Approved",
          "CHED Philippines",
          "USMLE / PLAB Eligible"
        ],
        highlights: [
          "In-house hospital on campus offering intensive clinical training and diagnostics.",
          "Very competitive tuition fee ($4,000/yr for MD Years 2–4).",
          "Fully equipped on-campus student dormitories with 24/7 Wi-Fi.",
          "Campus canteens serve North and South Indian food daily.",
          "Comprehensive institutes of Anatomy, Physiology, Surgery, and Pediatrics."
        ],
        feeSchedule: [
          { year: "Pre-Medicine (BS)", tuition: "$9,700 (Total BS)", hostel: "$850", total: "$10,550" },
          { year: "MD - 1st Year", tuition: "$4,350 (₹3.48 Lakhs)", hostel: "$850", total: "$5,200" },
          { year: "MD - 2nd Year", tuition: "$4,000 (₹3.20 Lakhs)", hostel: "$850", total: "$4,850" },
          { year: "MD - 3rd Year", tuition: "$4,000 (₹3.20 Lakhs)", hostel: "$850", total: "$4,850" },
          { year: "MD - 4th Year", tuition: "$4,000 (₹3.20 Lakhs)", hostel: "$850", total: "$4,850" }
        ],
        admissionProcess: [
          "Online application form submission with high school & intermediate marksheets.",
          "Evaluation and provisional admission letter issuance.",
          "Visa invitation dispatch and embassy visa stamping.",
          "Arrival in Cebu City, orientation, and hostel accommodation."
        ]
      },
      {
        id: "ama",
        name: "AMA College of Medicine",
        subtitle: "AMA School of Medicine (AMASOM) – Makati City, Metro Manila",
        city: "Makati City, Metro Manila",
        country: "Philippines",
        type: "Private Medical College",
        est: "2008",
        legacyNote: "Established in 2008 by Dr. Amable R. Aguiluz, the AMA School of Medicine is located at 6036 Kalayaan Avenue, Makati City—the financial capital of the Philippines. Features an innovative hybrid case-based learning curriculum affiliated with Quirino Memorial Medical Center (QMMC).",
        duration: "6 Years with Internship (BS + MD)",
        medium: "100% English Medium",
        nationalRank: "#104 in Philippines",
        worldRank: "Recognized",
        tuitionFeeUSD: 4545,
        hostelFeeUSD: 950,
        totalAnnualUSD: 5495,
        approxAnnualINR: "₹3,75,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB aggregate (45% for reserved category). Age between 17 and 25 years. NEET qualified.",
        recognitions: [
          "NMC (India)",
          "WHO Approved",
          "Quirino Memorial Medical Center (QMMC)",
          "CHED Philippines"
        ],
        highlights: [
          "Prime metropolitan location in Makati City, Manila with modern campus facilities.",
          "Innovative case-based hybrid learning method integrating theory and clinical rounds.",
          "Well-equipped laboratories for Gross Anatomy, Pathology, and Microbiology.",
          "Affordable tuition fee (MD Tuition: 250,000 PHP / ~$4,545 in Y1 & Y2, down to 100,000 PHP in Y4).",
          "Hassle-free Philippine student visa process and Indian community support."
        ],
        feeSchedule: [
          { year: "BS Psychology (1st Yr)", tuition: "300,000 PHP ($5,454)", hostel: "$950", total: "$6,404" },
          { year: "BS Psychology (2nd Yr)", tuition: "200,000 PHP ($3,636)", hostel: "$950", total: "$4,586" },
          { year: "MD - 1st Year", tuition: "250,000 PHP ($4,545)", hostel: "$950", total: "$5,495" },
          { year: "MD - 2nd Year", tuition: "250,000 PHP ($4,545)", hostel: "$950", total: "$5,495" },
          { year: "MD - 3rd Year", tuition: "150,000 PHP ($2,727)", hostel: "$950", total: "$3,677" },
          { year: "MD - 4th Year", tuition: "100,000 PHP ($1,818)", hostel: "$950", total: "$2,768" }
        ],
        admissionProcess: [
          "Application review through PARK admissions desk.",
          "Issuance of provisional admission letter from AMASOM.",
          "Embassy visa stamping in India.",
          "Departure, airport reception in Manila, and hostel check-in."
        ]
      },
      {
        id: "pltci",
        name: "PLTCI Medical College & Research",
        subtitle: "PLT Colleges Inc. College of Medicine – Nueva Vizcaya",
        city: "Bayombong, Nueva Vizcaya",
        country: "Philippines",
        type: "Accredited Medical College & Research",
        est: "1989",
        legacyNote: "Established in 1989 in the province of Nueva Vizcaya, PLTCI College of Medicine is the first and only medical college in Nueva Vizcaya accredited by both CHED and the Bureau of Immigration. Listed in WDOMS (FAIMER/WFME). Clinical training affiliated with Region II Trauma & Medical Center.",
        duration: "5.5 Years (BS + MD + Internship)",
        medium: "100% English Medium",
        nationalRank: "Top Regional Center",
        worldRank: "WDOMS Listed",
        tuitionFeeUSD: 3600,
        hostelFeeUSD: 600,
        totalAnnualUSD: 4200,
        approxAnnualINR: "₹2,61,000 / year (MD)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB in 10+2. NEET qualified. Completed 17+ years.",
        recognitions: [
          "NMC (India)",
          "WHO Listed",
          "WDOMS / FAIMER Listed",
          "CHED & Bureau of Immigration Accredited"
        ],
        highlights: [
          "The first and only accredited medical college in Nueva Vizcaya province.",
          "Clinical clerkship at Government Region II Trauma & Medical Center.",
          "Very affordable MD tuition: PHP 180,000/year (approx. ₹2.61 Lakhs/yr).",
          "Total 5.5-year MBBS tuition package is only approx. ₹17.59 Lakhs.",
          "3D Virtual Anatomy Lab, cadavers, and modern biochemistry & clinical skills labs."
        ],
        feeSchedule: [
          { year: "Pre-Medicine (BS)", tuition: "₹5,85,000 (Total BS)", hostel: "$600", total: "₹6,35,000" },
          { year: "Medicine - 1st Year", tuition: "PHP 180,000 (₹2,61,000)", hostel: "$600", total: "₹3,11,000" },
          { year: "Medicine - 2nd Year", tuition: "PHP 180,000 (₹2,61,000)", hostel: "$600", total: "₹3,11,000" },
          { year: "Medicine - 3rd Year", tuition: "PHP 180,000 (₹2,61,000)", hostel: "$600", total: "₹3,11,000" },
          { year: "Medicine - 4th Year", tuition: "PHP 180,000 (₹2,61,000)", hostel: "$600", total: "₹3,11,000" },
          { year: "Medicine - 5th Year (6 Mos)", tuition: "PHP 90,000 (₹1,30,500)", hostel: "$300", total: "₹1,55,500" }
        ],
        admissionProcess: [
          "Document verification through PARK International Education.",
          "Admission statement issued by PLTCI College of Medicine.",
          "Student visa clearance and embassy processing.",
          "Flight ticketing, airport reception, and campus hostel allotment."
        ]
      }
    ],
    Kazakhstan: [
      {
        id: "semey",
        name: "Semey State Medical University",
        subtitle: "Leading Government Medical University in East Kazakhstan (Est. 1952/1953)",
        city: "Semey 071400",
        country: "Kazakhstan",
        type: "Government State Medical University",
        est: "1952 / 1953",
        legacyNote: "Founded in 1952 as Semipalatinsk State Medical Institute, it admitted its first batch in 1953 and was later elevated to Semey State Medical University. Over 65+ years of medical excellence, contributing significantly to Kazakhstan's public healthcare with postgraduate medical training in Pavlodar.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 17,
        worldRank: 5059,
        tuitionFeeUSD: 3600,
        hostelFeeUSD: 800,
        visaMedicalUSD: 150,
        totalAnnualUSD: 4550,
        approxAnnualINR: "₹2,70,000 / year (Tuition)",
        totalCourseUSD: 18000,
        totalCourseINR: "₹13,50,000 INR (5-Yr Tuition)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in Physics, Chemistry, and Biology (45% for Reserved categories). 17+ years of age on or before 31st Dec. Clear NEET qualification.",
        recognitions: ["NMC (India)", "WHO Certified", "MCI Recognized", "Ministry of Healthcare Kazakhstan"],
        collaborations: [
          "Postgraduate Medical Center Pavlodar",
          "Leading Central Asian & European Medical Councils"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Pediatrics",
          "Faculty of Public Health & Pharmacy",
          "Postgraduate Studies & Residency Training"
        ],
        highlights: [
          "Over 3,500 active medical students with high international student satisfaction.",
          "Postgraduate medical center in Pavlodar graduating 1,000+ specialist doctors annually.",
          "Three separate student hostels plus one dedicated International Student Hostel in prime location.",
          "Large academic library, common kitchens, and student buffets with healthy meals.",
          "High-level security with 24x7 security guards and CCTV cameras on every floor.",
          "Active sports grounds on campus for cricket, football, basketball, and volleyball.",
          "Easy installment payment plan with 100% transparent written fee structure."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$3,600 (₹2,70,000)", hostel: "$800 (₹60,000)", total: "$4,550 (incl. visa/ins)" },
          { year: "2nd Year", tuition: "$3,600 (₹2,70,000)", hostel: "$800 (₹60,000)", total: "$4,550" },
          { year: "3rd Year", tuition: "$3,600 (₹2,70,000)", hostel: "$800 (₹60,000)", total: "$4,550" },
          { year: "4th Year", tuition: "$3,600 (₹2,70,000)", hostel: "$800 (₹60,000)", total: "$4,550" },
          { year: "5th Year", tuition: "$3,600 (₹2,70,000)", hostel: "$800 (₹60,000)", total: "$4,550" },
          { year: "Total (5 Yrs)", tuition: "$18,000 (₹13,50,000)", hostel: "$4,000", total: "$22,000 (~₹16.5L)" }
        ],
        hostelAccommodation: "Three student hostels plus one dedicated International Student Hostel within walking distance of the university. Equipped with 24h hot & cold water, central heating, common kitchens, laundry room, study hall, and 24x7 security guard supervision.",
        admissionProcess: [
          "Submission of 10th and 12th marksheet along with NEET scorecard through PARK Education.",
          "Official admission acceptance verification by Semey State Medical University.",
          "Issuance of student invitation letter approved by the Migration Department.",
          "Document legalization and student visa processing at the Kazakh embassy.",
          "Airport reception at Semey/Almaty and direct campus check-in."
        ],
        requiredDocs: [
          "Valid International Passport copy",
          "12th Marksheet with 50% in PCB (45% for reserved)",
          "NEET-UG Qualification Scorecard",
          "Birth Certificate & Medical Fitness Certificate",
          "10 Passport-size photographs"
        ]
      },
      {
        id: "astana",
        name: "Astana Medical University",
        subtitle: "Premier Capital Medical University in Nur-Sultan (Astana)",
        city: "Nur-Sultan (Astana) 010000",
        country: "Kazakhstan",
        type: "National Capital Medical University",
        est: "1964 (Reorganized 1997)",
        legacyNote: "Located in Kazakhstan's modern capital Nur-Sultan (formerly Astana). Established in 1964 and reorganized as a prestigious clinical institution in 1997. Over 800 professors and staff training 3,000+ students with advanced credit-based three-tier education (Bachelor, Master, Ph.D.).",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 14,
        worldRank: 4870,
        tuitionFeeUSD: 5200,
        hostelFeeUSD: 800,
        visaMedicalUSD: 300,
        totalAnnualUSD: 6300,
        approxAnnualINR: "₹3,90,000 / year (Tuition)",
        totalCourseUSD: 26000,
        totalCourseINR: "₹19,50,000 INR (5-Yr Tuition)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in Physics, Chemistry, and Biology (45% for Reserved categories). 17+ years of age. Qualified NEET score.",
        recognitions: ["NMC (India)", "WHO Certified", "UNESCO Approved", "Ministry of Education & Science Kazakhstan"],
        collaborations: [
          "National Medical Holding of Kazakhstan",
          "Republican Scientific Centers & Clinical Bases"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Dentistry",
          "Faculty of Public Health",
          "Faculty of Pharmacy",
          "Faculty of Preventive Medicine",
          "Center for Postgraduate & Ph.D. Education"
        ],
        highlights: [
          "Premier medical institution located in Kazakhstan's capital city with world-class infrastructure.",
          "Largest medical library in Kazakhstan with comprehensive digital and physical collections.",
          "Clinical training conducted at the largest national and republican medical research centers.",
          "Over 800 expert professors and academic specialists on staff.",
          "Modern student hostels providing 3 meals a day, high-speed Wi-Fi, and central heating.",
          "Degree widely recognized across India, USA, Europe, and the Commonwealth.",
          "Zero capitation, donation, or hidden charges with structured semester fee installments."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$5,200 (₹3,90,000)", hostel: "$800 (₹60,000)", total: "$6,300 (incl. visa/ins)" },
          { year: "2nd Year", tuition: "$5,200 (₹3,90,000)", hostel: "$800 (₹60,000)", total: "$6,300" },
          { year: "3rd Year", tuition: "$5,200 (₹3,90,000)", hostel: "$800 (₹60,000)", total: "$6,300" },
          { year: "4th Year", tuition: "$5,200 (₹3,90,000)", hostel: "$800 (₹60,000)", total: "$6,300" },
          { year: "5th Year", tuition: "$5,200 (₹3,90,000)", hostel: "$800 (₹60,000)", total: "$6,300" },
          { year: "Total (5 Yrs)", tuition: "$26,000 (₹19,50,000)", hostel: "$4,000", total: "$31,500 (~₹23.6L)" }
        ],
        hostelAccommodation: "Excellent hostel facilities located close to campus. Includes 3 meals a day, central heating and cooling, regular hot water, attached washrooms, high-speed Wi-Fi, and 24x7 security personnel.",
        admissionProcess: [
          "Application submission with academic transcripts through PARK International Education.",
          "Verification of NEET qualification and English proficiency.",
          "Issuance of official admission order and Ministry invitation from Nur-Sultan.",
          "Student visa endorsement from the Embassy of Kazakhstan.",
          "Airport reception at Nursultan Nazarbayev International Airport and hostel allocation."
        ],
        requiredDocs: [
          "Valid International Passport",
          "10th & 12th Certificate with PCB marks (Min 50%)",
          "NEET Qualification Scorecard",
          "Candidate's Birth Certificate",
          "Medical Fitness & Blood Test Reports",
          "10 Passport-size photographs"
        ]
      },
      {
        id: "skma",
        name: "South Kazakhstan Medical Academy (SKMA)",
        subtitle: "Leading State Medical Academy with Indian Mess & FMGE Training",
        city: "Shymkent",
        country: "Kazakhstan",
        type: "State Medical Academy",
        est: "1979",
        legacyNote: "Founded in 1979 in the historic southern hub of Shymkent. Consistently ranked among the Top 10 medical universities in Kazakhstan with academic partnerships spanning the USA, Singapore, Europe, and Russia. Extensive modern laboratories, dedicated simulation centers, and high clinical case volume.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 29,
        worldRank: 8676,
        tuitionFeeUSD: 5200,
        hostelFeeUSD: 800,
        visaMedicalUSD: 200,
        totalAnnualUSD: 6000,
        approxAnnualINR: "₹3,90,000 / year (Tuition)",
        totalCourseUSD: 26000,
        totalCourseINR: "₹19,50,000 INR (5-Yr Tuition)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in PCB in 12th standard (45% for Reserved categories). 17+ years of age. Valid NEET scorecard.",
        recognitions: ["NMC (India)", "WHO Certified", "MCI Approved", "Ministry of Healthcare Kazakhstan"],
        collaborations: [
          "Academic partners in USA, Singapore, Europe, and Russia",
          "Network of regional teaching hospitals in Shymkent"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Pediatrics",
          "Faculty of Pharmacy",
          "Faculty of Dental Medicine",
          "Department of Postgraduate Education"
        ],
        highlights: [
          "Ranked among the Top 10 medical universities in Kazakhstan for academic quality.",
          "Indian food available in hostel mess with separate vegetarian and non-vegetarian dining.",
          "24x7 Indian Warden on campus and emergency physicians available on site.",
          "Integrated coaching and preparation for the FMGE / NExT screening exam.",
          "Warm southern climate with pleasant winters and very affordable student living expenses.",
          "Advanced simulation laboratories, extensive anatomical libraries, and 2-4 sharing rooms.",
          "Academic exchange programs with top partner universities worldwide."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$6,000 (₹4,50,000)", hostel: "$800 (incl. in package)", total: "$6,000" },
          { year: "2nd Year", tuition: "$5,000 (₹3,75,000)", hostel: "$800", total: "$5,000" },
          { year: "3rd Year", tuition: "$5,000 (₹3,75,000)", hostel: "$800", total: "$5,000" },
          { year: "4th Year", tuition: "$5,000 (₹3,75,000)", hostel: "$800", total: "$5,000" },
          { year: "5th Year", tuition: "$5,000 (₹3,75,000)", hostel: "$800", total: "$5,000" },
          { year: "Total (5 Yrs)", tuition: "$26,000 (₹19,50,000)", hostel: "Included/Subsidized", total: "$26,000 (~₹19.5L)" }
        ],
        hostelAccommodation: "Furnished student dormitories with 2-4 sharing rooms. Features separate hostels for boys and girls, 24x7 Wi-Fi, clean tidy washrooms, well-ventilated rooms, 24x7 electricity, and an Indian mess with Indian chefs.",
        admissionProcess: [
          "Submit 10th and 12th marksheet with NEET scorecard to PARK International Education.",
          "Direct issuance of academy admission confirmation statement.",
          "Invitation to study approved by the Migration Department of Kazakhstan.",
          "Visa application and stamping through Kazakh consular services.",
          "Group departure, airport reception at Shymkent, and Indian hostel allotment."
        ],
        requiredDocs: [
          "10th, 11th, and 12th grade marksheets",
          "Certificate of medical fitness from a registered doctor",
          "Valid International Passport",
          "NEET-UG scorecard copy",
          "Original education documents and birth certificate",
          "10 Passport-size photos"
        ]
      },
      {
        id: "alfarabi",
        name: "Al-Farabi Kazakh National University",
        subtitle: "Top-Ranked National University in Kazakhstan (QS World Rank #220)",
        city: "Almaty 050040",
        country: "Kazakhstan",
        type: "Premier National Research University",
        est: "1934",
        legacyNote: "Founded in 1934 in Almaty. The country's foremost flagship institution, officially classified as a National Research University. Ranked #220 globally in QS World University Rankings. Sprawling academic campus known as 'KazGU City' spanning over 81,000 square meters.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 1,
        worldRank: 220,
        tuitionFeeUSD: 4190,
        hostelFeeUSD: 700,
        visaMedicalUSD: 300,
        totalAnnualUSD: 5190,
        approxAnnualINR: "₹3,14,250 / year (Tuition)",
        totalCourseUSD: 20950,
        totalCourseINR: "₹15,71,250 INR (5-Yr Tuition)",
        neetRequired: "Mandatory (134 General / 107 Reserved)",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in PCB in 12th standard. Minimum NEET cutoff marks (134 General, 107 Reserved). Age: 17+ years.",
        recognitions: ["NMC (India)", "WHO Certified", "UNESCO Approved", "QS Ranked #220", "Ministry of Education Kazakhstan"],
        collaborations: [
          "More than 30 leading international medical universities worldwide",
          "European and Asian University Research Alliances"
        ],
        faculties: [
          "Faculty of Medicine & Healthcare",
          "Faculty of General Medicine (MBBS)",
          "Department of Biomedical Sciences",
          "Center for Advanced Medical Research & Distance Learning"
        ],
        highlights: [
          "Ranked #220 in QS World University Rankings — the highest ranked university in Kazakhstan.",
          "A massive educational city: 14 student hostels covering 81,000 sq.m housing 5,000+ students.",
          "Collaborations and academic exchange with 30+ top global medical universities.",
          "High standard European-model curriculum with cutting-edge laboratories and clinical bases.",
          "Courses designed in English with distance e-learning support for Indian medical students.",
          "High security: turnstiles with electronic cards, CCTV on every floor, and night guards.",
          "Affordable government tuition ($4,190/yr) offering unmatched value for a Top-250 global university."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$4,190 (₹3,14,250)", hostel: "$700 (₹52,500)", total: "$5,190 (incl. visa/ins)" },
          { year: "2nd Year", tuition: "$4,190 (₹3,14,250)", hostel: "$700 (₹52,500)", total: "$5,190" },
          { year: "3rd Year", tuition: "$4,190 (₹3,14,250)", hostel: "$700 (₹52,500)", total: "$5,190" },
          { year: "4th Year", tuition: "$4,190 (₹3,14,250)", hostel: "$700 (₹52,500)", total: "$5,190" },
          { year: "5th Year", tuition: "$4,190 (₹3,14,250)", hostel: "$700 (₹52,500)", total: "$5,190" },
          { year: "Total (5 Yrs)", tuition: "$20,950 (₹15,71,250)", hostel: "$3,500", total: "$24,450 (~₹18.3L)" }
        ],
        hostelAccommodation: "Located directly inside the university campus across 14 dormitories. Rooms are furnished with beds, mattresses, study tables, chairs, water heaters, and private/common kitchens for student cooking. Electronic security card access at entrances.",
        admissionProcess: [
          "Document verification & NEET scorecard assessment by PARK Education.",
          "Internal online subject test & interview coordination with Al-Farabi admissions.",
          "Issuance of official university invitation letter.",
          "Student visa stamping from the Kazakh embassy.",
          "Arrival in Almaty, hostel check-in (starts 25th August), and orientation."
        ],
        requiredDocs: [
          "10th and 12th passing marksheet and transfer certificates",
          "International Passport copy (minimum 2 years validity)",
          "NEET scorecard copy",
          "Attested Mental and Physical Medical Fitness Certificate",
          "Birth Certificate",
          "8 Passport-size photographs",
          "Bank statement / financial proof"
        ]
      },
      {
        id: "kaznmu",
        name: "Kazakh National Medical University (Asfendiyarov)",
        subtitle: "The Landmark National Medical University of Kazakhstan (Est. 1930)",
        city: "Almaty 050000",
        country: "Kazakhstan",
        type: "National Government Medical University",
        est: "1930 / 1931",
        legacyNote: "Established in 1930 in Almaty. Recognized by the Government of Kazakhstan as a National University in 2001 for superior academic excellence. More than 11,000 national and international students trained by 1,500+ specialist medical professors and scientists.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 5,
        worldRank: 3878,
        tuitionFeeUSD: 6500,
        hostelFeeUSD: 800,
        visaMedicalUSD: 300,
        totalAnnualUSD: 7600,
        approxAnnualINR: "₹4,87,500 / year (Tuition)",
        totalCourseUSD: 32500,
        totalCourseINR: "₹24,37,500 INR (5-Yr Tuition)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in PCB in 12th standard (45% for Reserved categories). 17+ years of age. Valid NEET score.",
        recognitions: ["NMC (India)", "WHO Certified", "UNESCO Approved", "Ministry of Healthcare Kazakhstan"],
        collaborations: [
          "Leading national clinical hospitals and research institutes across Kazakhstan",
          "European Association of Medical Schools (AMSE)"
        ],
        faculties: [
          "School of General Medicine (MBBS)",
          "School of Pediatrics",
          "School of Pharmacy",
          "School of Dentistry",
          "School of Public Health",
          "International Medical Faculty"
        ],
        highlights: [
          "Oldest and most prestigious medical university in Kazakhstan, founded in 1930.",
          "Over 11,000 students and 1,500+ specialist medical professors.",
          "Classified as a National University by the Government of Kazakhstan.",
          "Extensive clinical bases across Almaty with multiple multi-specialty hospital rotations.",
          "Modern hostel accommodation for 2,000+ international students with gym and reading rooms.",
          "Subsidized government university education ensuring global degree recognition.",
          "Complete hands-on bedside training and clinical clerkships compliant with NMC criteria."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$6,500 (₹4,87,500)", hostel: "$800 (₹60,000)", total: "$7,600 (incl. visa/ins)" },
          { year: "2nd Year", tuition: "$6,500 (₹4,87,500)", hostel: "$800 (₹60,000)", total: "$7,600" },
          { year: "3rd Year", tuition: "$6,500 (₹4,87,500)", hostel: "$800 (₹60,000)", total: "$7,600" },
          { year: "4th Year", tuition: "$6,500 (₹4,87,500)", hostel: "$800 (₹60,000)", total: "$7,600" },
          { year: "5th Year", tuition: "$6,500 (₹4,87,500)", hostel: "$800 (₹60,000)", total: "$7,600" },
          { year: "Total (5 Yrs)", tuition: "$32,500 (₹24,37,500)", hostel: "$4,000", total: "$38,000 (~₹28.5L)" }
        ],
        hostelAccommodation: "Hostel capacity for more than 2,000 students. Offers 2-3 shared rooms, gym, reading room, dining hall, geysers for hot/cold water, playground, cooking gas for student cooking, and an auditorium.",
        admissionProcess: [
          "Direct profile and NEET submission to PARK International Education.",
          "Issuance of official invitation letter from Kazakh National Medical University.",
          "Legalization of documents with MEA attestation and consular stamp.",
          "Student visa issuance from the embassy of Kazakhstan.",
          "Airport reception at Almaty International Airport and hostel registration."
        ],
        requiredDocs: [
          "Valid International Passport",
          "10th and 12th Marksheets (Min 50% PCB)",
          "NEET Certificate with Scorecard",
          "Birth Certificate",
          "MEA attested documents and Embassy legalization",
          "Medical Fitness certificate and proof of fees payment"
        ]
      }
    ],
    Kyrgyzstan: [
      {
        id: "adam",
        name: "Adam University School of Medicine",
        subtitle: "Premier Medical Institution in Bishkek Following European Educational Standards",
        city: "Bishkek",
        country: "Kyrgyzstan",
        type: "Accredited Medical University",
        est: "1994",
        legacyNote: "Established in 1994 in Bishkek, Adam University School of Medicine is officially recognized by the Ministry of Health and Ministry of Education of Kyrgyzstan. Features 45 study departments following European Educational Standards with modern medical simulators like Simformer, Webex, and Virtumed.",
        duration: "6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 24,
        worldRank: 11457,
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 2000,
        totalAnnualUSD: 6000,
        approxAnnualINR: "₹3,00,000 / year (Tuition)",
        totalCourseUSD: 26000,
        totalCourseINR: "₹19,50,000 INR (6-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in PCB (General), 40% (Reserved Category). 17+ years of age by 31st Dec. NEET qualified.",
        recognitions: ["NMC (India)", "WHO Listed", "MCI Approved", "Ministry of Education & Health Kyrgyzstan"],
        collaborations: [
          "European Educational Exchange Programs",
          "International Simulation Centers (Simformer, Virtumed)"
        ],
        faculties: [
          "School of General Medicine (MBBS)",
          "Department of Biomedical & Clinical Sciences",
          "Center for Medical Simulation & Digital Learning"
        ],
        highlights: [
          "45 comprehensive study departments following European Educational Standards.",
          "State-of-the-art training rooms with advanced medical simulators (Simformer, Virtumed, Webex).",
          "100% English medium instruction with experienced, cooperative professors.",
          "Fully furnished hostels with 24h water, electricity, heating, laundry, and Wi-Fi.",
          "On-campus Indian mess with professional chefs preparing vegetarian and non-vegetarian food.",
          "Campus museum, expansive medical library, and active sports complex.",
          "No donation, no capitation fees, with structured installment fee payment."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$6,000", hostel: "$2,000", total: "$8,000 (₹6,00,000)" },
          { year: "2nd Year", tuition: "$4,000", hostel: "Optional", total: "$4,000 (₹3,00,000)" },
          { year: "3rd Year", tuition: "$4,000", hostel: "Optional", total: "$4,000 (₹3,00,000)" },
          { year: "4th Year", tuition: "$4,000", hostel: "Optional", total: "$4,000 (₹3,00,000)" },
          { year: "5th Year", tuition: "$4,000", hostel: "Optional", total: "$4,000 (₹3,00,000)" },
          { year: "6th Year", tuition: "$2,000", hostel: "Optional", total: "$2,000 (₹1,50,000)" },
          { year: "Total (6 Yrs)", tuition: "$26,000", hostel: "--", total: "$26,000 (~₹19.5L)" }
        ],
        hostelAccommodation: "Fully furnished student rooms with desks, tables, chairs, 24-hour hot & cold water, central heating, common study halls, laundry, small kitchen for self-cooking, high-speed Wi-Fi, CCTV, sports complex, and Indian food prepared by experienced cooks.",
        admissionProcess: [
          "Profile assessment & NEET qualification verification via PARK Education.",
          "Formal application and submission of academic documents.",
          "Issuance of official University Invitation / Offer Letter.",
          "Tuition fee deposit and student visa processing at the Kyrgyz embassy.",
          "Ticketing, group departure, and airport reception in Bishkek."
        ],
        requiredDocs: [
          "NEET Qualification Scorecard",
          "10th & 12th Grade Marksheets (Min 50% PCB)",
          "Original International Passport",
          "Passport-size photographs",
          "Medical Fitness & Blood Test Reports"
        ]
      },
      {
        id: "krsu",
        name: "Kyrgyz-Russian Slavic University (KRSU)",
        subtitle: "Top-Ranked Interstate University Founded by Bilateral Treaty (Rank #2 in Kyrgyzstan)",
        city: "Bishkek (Capital)",
        country: "Kyrgyzstan",
        type: "Interstate Joint Government University",
        est: "1993",
        legacyNote: "Founded in 1993 under a historic bilateral agreement between the Kyrgyz Republic and the Russian Federation. High international standing with over 11,000 students across 7 institutes and 13 faculties. Ranked #2 in Kyrgyzstan with global recognition by WHO, NMC, ECFMG, AMC, and GMC.",
        duration: "6 Years (5 Yrs Academic + 1 Yr Internship)",
        medium: "100% English Medium",
        nationalRank: 2,
        worldRank: 4472,
        tuitionFeeUSD: 2900,
        hostelFeeUSD: 600,
        totalAnnualUSD: 3500,
        approxAnnualINR: "₹2,17,500 / year (Tuition)",
        totalCourseUSD: 17400,
        totalCourseINR: "₹13,05,000 INR (6-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "10+2 with 50% in PCB (General), 50% for Reserved as per MCI/NMC. NEET qualification mandatory.",
        recognitions: ["NMC (India)", "WHO Listed", "ECFMG", "AMC", "GMC", "Ministry of Education Russia & Kyrgyzstan"],
        collaborations: [
          "Bilateral Government Partnership (Russia & Kyrgyzstan)",
          "Leading Russian Clinical & Research Academies"
        ],
        faculties: [
          "Faculty of Medicine (General Medicine MBBS)",
          "Faculty of Pediatrics & Dentistry",
          "Faculty of Humanities & International Relations",
          "Postgraduate & Post-Doctoral Residency Programs"
        ],
        highlights: [
          "Ranked #2 university in Kyrgyzstan with high FMGE passing rate (30%+).",
          "Dual interstate Russian-Kyrgyz medical accreditation valid globally.",
          "Cadaveric human body dissection and hospital exposure starting from 1st year.",
          "Interactive complexes with virtual and augmented reality training.",
          "One of the lowest tuition fees in Central Asia: Just $2,900/year (~₹2.17 Lakhs/yr).",
          "4-star hostel accommodation facilities with Indian mess and 24x7 security.",
          "Over 11,000 students on a modern, secure university campus in Bishkek."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$2,900 (₹2,17,500)", hostel: "$600 (₹45,000)", total: "$3,500" },
          { year: "2nd Year", tuition: "$2,900 (₹2,17,500)", hostel: "$600 (₹45,000)", total: "$3,500" },
          { year: "3rd Year", tuition: "$2,900 (₹2,17,500)", hostel: "$600 (₹45,000)", total: "$3,500" },
          { year: "4th Year", tuition: "$2,900 (₹2,17,500)", hostel: "$600 (₹45,000)", total: "$3,500" },
          { year: "5th Year", tuition: "$2,900 (₹2,17,500)", hostel: "$600 (₹45,000)", total: "$3,500" },
          { year: "6th Year (Internship)", tuition: "$2,900 (₹2,17,500)", hostel: "$600 (₹45,000)", total: "$3,500" },
          { year: "Total (6 Yrs)", tuition: "$17,400 (₹13,05,000)", hostel: "$3,600", total: "$21,000 (~₹15.75L)" }
        ],
        hostelAccommodation: "4-star quality accommodation with Indian food mess, high-speed Wi-Fi, well-furnished lecture halls, sports grounds, central heating, and round-the-clock security guard presence.",
        admissionProcess: [
          "Submit academic certificates and NEET scorecard through PARK Education.",
          "Admission letter issuance from Kyrgyz-Russian Slavic University.",
          "Visa invitation letter processing with the Ministry of Foreign Affairs.",
          "Visa stamping at the Kyrgyz Embassy in Delhi.",
          "Departure, airport reception in Bishkek, and hostel room allotment."
        ],
        requiredDocs: [
          "10th and 12th Grade Marksheets (Min 50% PCB)",
          "Valid International Passport",
          "NEET Scorecard",
          "Birth Certificate",
          "Medical Fitness & HIV Test Reports",
          "6 Passport-size photographs"
        ]
      },
      {
        id: "ism",
        name: "International School of Medicine (ISM)",
        subtitle: "Premier International Medical Campus of the International University of Kyrgyzstan",
        city: "Bishkek (Capital)",
        country: "Kyrgyzstan",
        type: "International Medical School",
        est: "2003",
        legacyNote: "Founded in 2003 under the International University of Kyrgyzstan (IUK). Pioneer institution specialized in training international medical students with 100% English-medium instruction conforming to PM&DC, WHO, and NMC guidelines.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 8,
        worldRank: 9481,
        tuitionFeeUSD: 5150,
        hostelFeeUSD: 700,
        visaMedicalUSD: 300,
        totalAnnualUSD: 6150,
        approxAnnualINR: "₹3,86,250 / year (Tuition)",
        totalCourseUSD: 25750,
        totalCourseINR: "₹19,31,250 INR (5-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "Indian nationality, 12th standard with PCB + English (Min 50%), 17+ years of age by 31st Dec, NEET cleared.",
        recognitions: ["NMC (India)", "WHO Listed", "FAIMER", "WFME", "Ministry of Education Kyrgyzstan"],
        collaborations: [
          "International University of Kyrgyzstan (IUK) Network",
          "Affiliated Teaching Hospitals throughout Bishkek"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Department of Clinical Sciences & Surgery",
          "Department of Public Health & Preventive Care"
        ],
        highlights: [
          "Ranked #8 in Kyrgyzstan with world-class medical education designed for foreign students.",
          "100% English medium curriculum with highly qualified English-speaking faculty.",
          "Located in capital Bishkek with direct connections to malls, hospitals, and airport.",
          "International standard hostels with attached washrooms, Indian mess, and 24x7 security.",
          "Extensive hospital practice across affiliated state and private clinics in Bishkek.",
          "No hidden costs or capitation fees with transparent tuition installments."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$5,150 (₹3,86,250)", hostel: "$700 (₹52,500)", total: "$6,150 (incl. visa/ins)" },
          { year: "2nd Year", tuition: "$5,150 (₹3,86,250)", hostel: "$700 (₹52,500)", total: "$6,150" },
          { year: "3rd Year", tuition: "$5,150 (₹3,86,250)", hostel: "$700 (₹52,500)", total: "$6,150" },
          { year: "4th Year", tuition: "$5,150 (₹3,86,250)", hostel: "$700 (₹52,500)", total: "$6,150" },
          { year: "5th Year", tuition: "$5,150 (₹3,86,250)", hostel: "$700 (₹52,500)", total: "$6,150" },
          { year: "Total (5 Yrs)", tuition: "$25,750 (₹19,31,250)", hostel: "$3,500", total: "$30,750 (~₹23.0L)" }
        ],
        hostelAccommodation: "Furnished rooms accommodating 2-3 students with attached washrooms, water heaters, central heating, Wi-Fi, common study lounges, kitchen for self-cooking, and a dedicated campus canteen providing Indian meals.",
        admissionProcess: [
          "Submission of 10th and 12th marksheet with NEET scorecard to PARK Education.",
          "Verification and issuance of ISM admission confirmation letter.",
          "Visa invitation processing through the Ministry of Foreign Affairs Kyrgyzstan.",
          "Embassy visa stamping and group travel booking.",
          "Airport reception in Bishkek and room allotment."
        ],
        requiredDocs: [
          "10th & 12th Passing Certificates (Min 50% PCB)",
          "NEET Scorecard",
          "International Passport (min 2 years validity)",
          "Birth Certificate & Medical Fitness Certificate",
          "8 Passport-size photos"
        ]
      },
      {
        id: "bimi",
        name: "Bishkek International Medical Institute (BIMI)",
        subtitle: "Modern High-Tech International Medical Institute in Bishkek",
        city: "Bishkek (Capital)",
        country: "Kyrgyzstan",
        type: "International Medical Institute",
        est: "2019",
        legacyNote: "Founded in 2019 in Bishkek. Designed from the ground up for modern medical training with high-tech computer simulation centers, 2 newly built dormitories with 750 beds, and complete digital library access for international students.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 22,
        worldRank: 10801,
        tuitionFeeUSD: 4680,
        hostelFeeUSD: 700,
        visaMedicalUSD: 150,
        totalAnnualUSD: 5530,
        approxAnnualINR: "₹3,51,000 / year (Tuition)",
        totalCourseUSD: 23400,
        totalCourseINR: "₹17,55,000 INR (5-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "Aggregate 50% in PCB in 12th standard (45% for Reserved categories). 17+ years of age. Valid NEET scorecard.",
        recognitions: ["NMC (India)", "WHO Listed", "Ministry of Health & Education Kyrgyzstan"],
        collaborations: [
          "Advanced University Clinics across Bishkek",
          "International Medical Training Councils"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Department of Diagnostic & Clinical Sciences",
          "High-Tech Medical Simulation Center"
        ],
        highlights: [
          "High-tech campus with a modern computer simulation center and e-learning resources.",
          "Advanced coaching integrated into the curriculum for NEXT, USMLE, and PLAB.",
          "100% clinical exposure at advanced university partner clinics in Bishkek.",
          "2 recently constructed student dormitories with 750 beds and clean, quiet study spaces.",
          "Delicious Indian meals available with 24x7 electricity, hot and cold water.",
          "Safe and secure campus environment with dedicated hostel management."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$4,680 (₹3,51,000)", hostel: "$700 (₹52,500)", total: "$5,530 (incl. ins)" },
          { year: "2nd Year", tuition: "$4,680 (₹3,51,000)", hostel: "$700 (₹52,500)", total: "$5,530" },
          { year: "3rd Year", tuition: "$4,680 (₹3,51,000)", hostel: "$700 (₹52,500)", total: "$5,530" },
          { year: "4th Year", tuition: "$4,680 (₹3,51,000)", hostel: "$700 (₹52,500)", total: "$5,530" },
          { year: "5th Year", tuition: "$4,680 (₹3,51,000)", hostel: "$700 (₹52,500)", total: "$5,530" },
          { year: "Total (5 Yrs)", tuition: "$23,400 (₹17,55,000)", hostel: "$3,500", total: "$27,650 (~₹20.7L)" }
        ],
        hostelAccommodation: "Two newly built dormitories with 750 beds. Includes comfortable living rooms, reading rooms, large dining room, kitchen, laundry, modern showers/toilets, Wi-Fi, and 24x7 water and electricity.",
        admissionProcess: [
          "Submit 10+2 marksheet and NEET scorecard to reserve seat (July/Sept intake).",
          "Receipt of official admission confirmation letter from BIMI.",
          "Processing of student visa through the Kyrgyz Ministry of Foreign Affairs.",
          "Embassy visa stamping and flight arrangement.",
          "Arrival in Bishkek, campus orientation, and clinical batch start."
        ],
        requiredDocs: [
          "12th Marksheet with 50% in PCB",
          "Valid International Passport",
          "NEET Qualification Scorecard",
          "Welcome & Confirmation letter from university",
          "Medical Fitness certificate",
          "20 Passport-size photos"
        ]
      },
      {
        id: "jalalabad",
        name: "Jalal-Abad State Medical University",
        subtitle: "Historic Public Government Medical University in Jalal-Abad (Est. 1992)",
        city: "Jalal-Abad",
        country: "Kyrgyzstan",
        type: "Public State Medical University",
        est: "1992 / 1993",
        legacyNote: "Public government medical university founded in 1992 in Jalal-Abad. Houses over 250 teachers including 10 professors and 40+ Ph.D. doctors, educating more than 4,500 students in international medicine.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 17,
        worldRank: 10285,
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 700,
        visaMedicalUSD: 150,
        totalAnnualUSD: 4850,
        approxAnnualINR: "₹3,00,000 / year (Tuition)",
        totalCourseUSD: 20000,
        totalCourseINR: "₹15,00,000 INR (5-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "Indian nationality, 12th standard with 50% in PCB + English, Age 17+ by 31st Dec, NEET cleared.",
        recognitions: ["NMC (India)", "WHO Listed", "PLAB & USMLE Eligible", "Ministry of Health Kyrgyzstan"],
        collaborations: [
          "State Health Clinics of Jalal-Abad Region",
          "International Public Health Councils"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Department of Surgery & Internal Medicine",
          "Postgraduate Medical Education"
        ],
        highlights: [
          "Government medical institution with 30+ years of training international physicians.",
          "Over 4,500 enrolled students and 250+ experienced teaching doctors and professors.",
          "State-of-the-art medical techniques and hands-on clinical focus.",
          "Spacious dining halls and modern hygienic kitchens with food cooked by Indian chefs.",
          "Well-furnished hostel rooms with attached washrooms, Wi-Fi, and 24x7 security.",
          "Low cost of living in the scenic, peaceful city of Jalal-Abad."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$4,000 (₹3,00,000)", hostel: "$700 (₹52,500)", total: "$4,850 (incl. ins)" },
          { year: "2nd Year", tuition: "$4,000 (₹3,00,000)", hostel: "$700 (₹52,500)", total: "$4,850" },
          { year: "3rd Year", tuition: "$4,000 (₹3,00,000)", hostel: "$700 (₹52,500)", total: "$4,850" },
          { year: "4th Year", tuition: "$4,000 (₹3,00,000)", hostel: "$700 (₹52,500)", total: "$4,850" },
          { year: "5th Year", tuition: "$4,000 (₹3,00,000)", hostel: "$700 (₹52,500)", total: "$4,850" },
          { year: "Total (5 Yrs)", tuition: "$20,000 (₹15,00,000)", hostel: "$3,500", total: "$24,250 (~₹18.2L)" }
        ],
        hostelAccommodation: "Furnished rooms with beds, mattresses, study tables, water heaters, Wi-Fi, common kitchens, housekeeping, clean attached washrooms, and an Indian mess serving nutritious meals.",
        admissionProcess: [
          "Submit 10th and 12th marksheets with NEET scorecard via PARK Education.",
          "Issuance of official Jalal-Abad admission confirmation.",
          "Ministry visa invitation processing and student visa stamping.",
          "Departure, airport reception, and campus hostel check-in."
        ],
        requiredDocs: [
          "10th and 12th passing marksheets (Min 50% PCB)",
          "NEET Scorecard",
          "Valid International Passport",
          "Birth Certificate & Medical Fitness Report",
          "8 Passport-size photos"
        ]
      },
      {
        id: "osh",
        name: "Osh State Medical University",
        subtitle: "Premier Public State Medical University with 29,000+ Students (Est. 1951/1993)",
        city: "Osh",
        country: "Kyrgyzstan",
        type: "Public State Medical University",
        est: "1951 (Faculty 1992/1993)",
        legacyNote: "Founded in 1951, Osh State University opened its medical faculty in 1992. Today it is one of the largest medical hubs in Central Asia, educating more than 29,000 students in medicine with thousands of successful Indian alumni working worldwide.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 6,
        worldRank: 8915,
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 600,
        visaMedicalUSD: 150,
        totalAnnualUSD: 4750,
        approxAnnualINR: "₹3,00,000 / year (Tuition)",
        totalCourseUSD: 20000,
        totalCourseINR: "₹15,00,000 INR (5-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "Indian nationality, 50% aggregate in PCB in 12th standard, 17+ years of age, NEET qualified.",
        recognitions: ["NMC (India)", "WHO Listed", "MCI Approved", "FAIMER", "Ministry of Education Kyrgyzstan"],
        collaborations: [
          "Multi-Specialty State Hospitals across Osh & Ferghana Valley",
          "International Medical Research Alliances"
        ],
        faculties: [
          "Medical Faculty (General Medicine MBBS)",
          "Faculty of Pediatrics & Stomatology",
          "Postgraduate Medical Internship & Residency"
        ],
        highlights: [
          "Ranked #6 in Kyrgyzstan with vast clinical hospital bases across Osh city.",
          "Over 29,000 medical students with a large, supportive Indian student community.",
          "High teacher-to-student attention ratio with limited clinical batch sizes.",
          "Low tuition and affordable cost of living in the cultural hub of southern Kyrgyzstan.",
          "Established track record of Indian graduates passing screening tests and practicing globally.",
          "Dedicated student hostels with Indian mess cooks and 24x7 security."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$4,000 (₹3,00,000)", hostel: "$600 (₹45,000)", total: "$4,750 (incl. ins)" },
          { year: "2nd Year", tuition: "$4,000 (₹3,00,000)", hostel: "$600 (₹45,000)", total: "$4,750" },
          { year: "3rd Year", tuition: "$4,000 (₹3,00,000)", hostel: "$600 (₹45,000)", total: "$4,750" },
          { year: "4th Year", tuition: "$4,000 (₹3,00,000)", hostel: "$600 (₹45,000)", total: "$4,750" },
          { year: "5th Year", tuition: "$4,000 (₹3,00,000)", hostel: "$600 (₹45,000)", total: "$4,750" },
          { year: "Total (5 Yrs)", tuition: "$20,000 (₹15,00,000)", hostel: "$3,000", total: "$23,750 (~₹17.8L)" }
        ],
        hostelAccommodation: "Furnished dormitories accommodating 2-3 students per room. Features water heaters, Wi-Fi, common study areas, kitchen for self-cooking, attached washrooms, and an Indian mess serving both North and South Indian food.",
        admissionProcess: [
          "Application submission with 10+2 marksheet and NEET scorecard via PARK Education.",
          "Issuance of official admission order from Osh State Medical University.",
          "Visa invitation processing with Ministry of Foreign Affairs.",
          "Student visa stamping from the Embassy of Kyrgyzstan in New Delhi.",
          "Departure and airport reception at Osh International Airport."
        ],
        requiredDocs: [
          "10th and 12th passing marksheets (Min 50% PCB)",
          "NEET Scorecard",
          "Valid International Passport (min 2 years validity)",
          "Birth Certificate",
          "Medical Fitness & HIV Test Reports",
          "8 Passport-size photos"
        ]
      },
      {
        id: "asmi",
        name: "Asian Medical Institute (ASMI)",
        subtitle: "Top-Ranked Medical Institute in Kant with 10 Affiliated Teaching Hospitals",
        city: "Kant (near Bishkek)",
        country: "Kyrgyzstan",
        type: "Private Medical Institute",
        est: "2004",
        legacyNote: "Founded in 2004 in Kant (20 km from Bishkek). Listed by the Ministry of Justice and WHO directory. More than 2,000 students and 550+ faculty members with 10 affiliated multi-specialty hospitals for extensive bedside training.",
        duration: "5.8 to 6 Years (incl. Internship)",
        medium: "100% English Medium",
        nationalRank: 30,
        worldRank: 11832,
        tuitionFeeUSD: 3400,
        hostelFeeUSD: 450,
        visaMedicalUSD: 150,
        totalAnnualUSD: 4000,
        approxAnnualINR: "₹2,55,000 / year (Tuition)",
        totalCourseUSD: 17000,
        totalCourseINR: "₹12,75,000 INR (5-Yr Tuition Total)",
        neetRequired: "Mandatory",
        ieltsRequired: "Not Required",
        eligibility: "Indian nationality, 12th standard with 50% in PCB + English, Age 17+ by 31st Dec, NEET cleared.",
        recognitions: ["NMC (India)", "WHO Listed", "Ministry of Justice & Health Kyrgyzstan"],
        collaborations: [
          "10 Affiliated Clinical Teaching Hospitals in Chuy Region & Bishkek",
          "Asian Medical College Hospital Network"
        ],
        faculties: [
          "Faculty of General Medicine (MBBS)",
          "Faculty of Dentistry (BDS/DDS)",
          "Department of Clinical Residencies"
        ],
        highlights: [
          "Most affordable medical institute in Central Asia: Tuition just $3,400/yr (approx. ₹2.55 Lakhs/yr).",
          "10 affiliated clinical hospitals providing diverse bedside practical training.",
          "Purely English medium instruction throughout with zero language barrier.",
          "Own campus hostels with attached washrooms, Indian mess, and Wi-Fi.",
          "Limited batch strength ensuring individual attention from experienced professors.",
          "No donation fees, capitation charges, or hidden expenses.",
          "Scholarship opportunities available for high-achieving students."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$3,400 (₹2,55,000)", hostel: "$450 (₹33,750)", total: "$4,000 (incl. ins)" },
          { year: "2nd Year", tuition: "$3,400 (₹2,55,000)", hostel: "$450 (₹33,750)", total: "$4,000" },
          { year: "3rd Year", tuition: "$3,400 (₹2,55,000)", hostel: "$450 (₹33,750)", total: "$4,000" },
          { year: "4th Year", tuition: "$3,400 (₹2,55,000)", hostel: "$450 (₹33,750)", total: "$4,000" },
          { year: "5th Year", tuition: "$3,400 (₹2,55,000)", hostel: "$450 (₹33,750)", total: "$4,000" },
          { year: "Total (5 Yrs)", tuition: "$17,000 (₹12,75,000)", hostel: "$2,250", total: "$19,850 (~₹14.9L)" }
        ],
        hostelAccommodation: "Campus dormitories with 2-3 sharing furnished rooms, attached washrooms, Wi-Fi, water heaters, central heating, common kitchens, and a mess serving delicious Indian food.",
        admissionProcess: [
          "Submission of 10th and 12th marksheets with NEET scorecard via PARK Education.",
          "Admission letter issuance from Asian Medical Institute.",
          "Ministry of Foreign Affairs visa invitation letter processing.",
          "Embassy visa stamping and group departure.",
          "Airport reception and hostel check-in."
        ],
        requiredDocs: [
          "10th and 12th passing marksheets (Min 50% PCB)",
          "NEET Scorecard",
          "Valid International Passport",
          "Birth Certificate & Medical Fitness Certificate",
          "8 Passport-size photos"
        ]
      }
    ],
    Russia: [
      {
        id: "kzn",
        name: "Kazan Federal University (Institute of Medicine)",
        subtitle: "Century-Old Top-Tier Russian Federal University with Global Prestige",
        city: "Kazan",
        country: "Russia",
        type: "Federal University",
        est: "1804",
        duration: "6 Years",
        medium: "English Medium",
        tuitionFeeUSD: 5200,
        hostelFeeUSD: 300,
        totalAnnualUSD: 5500,
        approxAnnualINR: "₹4,55,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO", "Ministry of Education & Science Russia"],
        highlights: [
          "QS Top 400 world-ranked federal university with world-class medical labs.",
          "Own modern university clinic with cutting-edge robotic surgical equipment.",
          "Safe, multicultural student-friendly city with beautiful historic architecture."
        ]
      },
      {
        id: "bashkir",
        name: "Bashkir State Medical University",
        subtitle: "Leading Center of Surgical and Robotic Medicine in Ufa",
        city: "Ufa",
        country: "Russia",
        type: "Government Medical University",
        est: "1932",
        duration: "6 Years",
        medium: "English Medium",
        tuitionFeeUSD: 4000,
        hostelFeeUSD: 400,
        totalAnnualUSD: 4400,
        approxAnnualINR: "₹3,65,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO", "UNESCO"],
        highlights: [
          "Renowned center of robotic and laparoscopic surgery with own university hospital.",
          "Large Indian student body with dedicated Indian mess facilities.",
          "Over 8,000 students enrolled across comprehensive medical faculties."
        ]
      },
      {
        id: "crimea",
        name: "Crimea Federal University (Medical Academy)",
        subtitle: "Historic Medical Academy with Subsidized Tuition & Clinical Legacy",
        city: "Simferopol",
        country: "Russia",
        type: "Federal Medical Academy",
        est: "1931",
        duration: "6 Years",
        medium: "English Medium",
        tuitionFeeUSD: 3600,
        hostelFeeUSD: 400,
        totalAnnualUSD: 4000,
        approxAnnualINR: "₹3,32,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO"],
        highlights: [
          "Long tradition of training Indian doctors spanning over three decades.",
          "Moderate climate and very affordable federal tuition fees.",
          "Extensive clinical departments and supportive teaching faculty."
        ]
      }
    ],
    Georgia: [
      {
        id: "tsmu",
        name: "Tbilisi State Medical University",
        subtitle: "The Premier Government Medical University in Georgia",
        city: "Tbilisi (Capital)",
        country: "Georgia",
        type: "National Government University",
        est: "1918",
        duration: "6 Years",
        medium: "100% English Medium",
        tuitionFeeUSD: 6000,
        hostelFeeUSD: 1800,
        totalAnnualUSD: 7800,
        approxAnnualINR: "₹6,45,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO", "WFME", "ECTS European Credit"],
        highlights: [
          "Georgia's oldest and leading government medical university.",
          "Full European ECTS curriculum standard with WFME international accreditation.",
          "High preparation standard for USMLE Step 1 & Step 2 examinations."
        ]
      },
      {
        id: "euro-geo",
        name: "European University Georgia",
        subtitle: "Modern European-Accredited Medical Faculty with Own Teaching Hospital",
        city: "Tbilisi",
        country: "Georgia",
        type: "Accredited University",
        est: "2012",
        duration: "6 Years",
        medium: "100% English Medium",
        tuitionFeeUSD: 5000,
        hostelFeeUSD: 1500,
        totalAnnualUSD: 6500,
        approxAnnualINR: "₹5,40,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO", "WFME"],
        highlights: [
          "Own 120-bed multi-profile university clinic 'Jo Ann Medical Center'.",
          "State-of-the-art simulation equipment and 3D virtual dissection tables.",
          "Located in safe, European-standard capital city Tbilisi."
        ]
      }
    ],
    Vietnam: [
      {
        id: "cantho",
        name: "Can Tho University of Medicine and Pharmacy",
        subtitle: "Top Government Medical University in Southern Vietnam",
        city: "Can Tho",
        country: "Vietnam",
        type: "Government University",
        est: "1979",
        duration: "6 Years",
        medium: "English Medium",
        tuitionFeeUSD: 4500,
        hostelFeeUSD: 800,
        totalAnnualUSD: 5300,
        approxAnnualINR: "₹4,40,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO"],
        highlights: [
          "Major government medical training and healthcare center for Mekong Delta region.",
          "Direct flight access from India to Vietnam (Ho Chi Minh City / Hanoi).",
          "Safe, friendly Southeast Asian culture with affordable living expenses."
        ]
      },
      {
        id: "hongbang",
        name: "Hong Bang International University",
        subtitle: "Modern International University in Ho Chi Minh City",
        city: "Ho Chi Minh City",
        country: "Vietnam",
        type: "International University",
        est: "1997",
        duration: "6 Years",
        medium: "English Medium",
        tuitionFeeUSD: 4800,
        hostelFeeUSD: 900,
        totalAnnualUSD: 5700,
        approxAnnualINR: "₹4,70,000 / year",
        neetRequired: "Mandatory",
        recognitions: ["NMC", "WHO"],
        highlights: [
          "Located in Vietnam's largest metropolitan hub Ho Chi Minh City.",
          "Modern urban campus with high-tech laboratories and international faculty.",
          "Close proximity to leading national specialty hospitals for clinical rounds."
        ]
      }
    ],
    TimorLeste: [
      {
        id: "uct",
        name: "Universidade Católica Timorense (UCT)",
        subtitle: "Catholic University of East Timor – Premier Medical Faculty in Dili",
        city: "Dili",
        country: "Timor-Leste",
        type: "Private / Catholic University",
        est: "2021",
        legacyNote: "Established in December 2021 by the Roman Catholic Archdiocese of Dili under Archbishop Virgílio do Carmo da Silva, Universidade Católica Timorense is a flagship higher education institution dedicated to premier medical education and healthcare ethics. The university features modern biomedical training facilities, close clinical partnerships with the Hospital Nacional Guido Valadares (HNGV) in Dili, and small class sizes guaranteeing close 1:1 mentorship from experienced international and local clinical faculty.",
        duration: "6 Years (5 Yrs Pre-Clinical/Clinical + 1 Yr Rotatory Internship)",
        medium: "100% English Medium (with Portuguese & Tetum clinical immersion)",
        nationalRank: 1,
        worldRank: 11840,
        tuitionFeeUSD: 3600,
        hostelFeeUSD: 600,
        totalAnnualUSD: 4200,
        approxAnnualINR: "₹3,48,000 / year",
        totalCourseUSD: 25200,
        totalCourseINR: "₹20,80,000 INR (6-Yr Total)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "IELTS 7.0 Required (Delta / Direct Admission Guidelines)",
        eligibility: "Age 17 to 25 at admission. General category: Minimum 50% aggregate marks in PCB in 12th grade. SC/ST/OBC category: Minimum 40% aggregate marks in PCB. NEET scorecard is required. Eligibility Certificate issued by MCI/NMC is necessary.",
        recognitions: ["NMC (India) Compliant", "WHO Listed", "Ministry of Higher Education (MESCC) Timor-Leste", "Catholic Higher Education Network"],
        collaborations: [
          "Pontifical Catholic University Networks & Global Catholic Medical Missions",
          "Hospital Nacional Guido Valadares (HNGV) Dili",
          "Australian & Portuguese Healthcare Alliances"
        ],
        faculties: [
          "Faculty of Medicine & Health Sciences",
          "Department of Biomedical & Anatomical Sciences",
          "Department of Clinical Medicine & Surgery",
          "Department of Pediatrics & Tropical Health"
        ],
        highlights: [
          "Personalized faculty attention with small classroom ratios and direct professor mentorship.",
          "NMC-focused 6-year medical curriculum compliant with FMGL regulations including rotatory internship.",
          "Safe and serene island atmosphere in the peaceful national capital Dili.",
          "Clinical clerkship rotations at Timor-Leste's central national referral hospital (HNGV).",
          "Affordable living costs with monthly student expenditure ranging between ₹25,000 and ₹30,000 (apartment rent ~₹16,000–₹17,000).",
          "Modern campus facilities, digital library, and multi-lingual learning environment (English, Portuguese, and Tetum).",
          "Transparent fee structure with no donation or capitation fees ($3,600/year tuition)."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$3,600", hostel: "$600", total: "$4,200 (₹3,48,000)" },
          { year: "2nd Year", tuition: "$3,600", hostel: "$600", total: "$4,200 (₹3,48,000)" },
          { year: "3rd Year", tuition: "$3,600", hostel: "$600", total: "$4,200 (₹3,48,000)" },
          { year: "4th Year", tuition: "$3,600", hostel: "$600", total: "$4,200 (₹3,48,000)" },
          { year: "5th Year", tuition: "$3,600", hostel: "$600", total: "$4,200 (₹3,48,000)" },
          { year: "6th Year (Internship)", tuition: "$3,600", hostel: "$600", total: "$4,200 (₹3,48,000)" },
          { year: "Total (6 Yrs)", tuition: "$21,600", hostel: "$3,600", total: "$25,200 (~₹20.8L)" }
        ],
        hostelAccommodation: "Safe student accommodation in Dili offering fully furnished rooms with study desks, air conditioning/fans, attached bathrooms, high-speed Wi-Fi, and 24/7 security. Students may choose university dormitories or private city-center apartments (rent ₹16,000–₹17,000/month). Fresh tropical produce and local/international meal services are readily accessible.",
        admissionProcess: [
          "Profile assessment & NEET qualification verification via PARK International Education.",
          "Formal online application submission with verified academic documents and passport.",
          "Issuance of official University Offer Letter / Admission Notice.",
          "Application for Timor-Leste student visa using the official offer letter.",
          "Pre-departure briefing, group departure, and airport reception in Dili."
        ],
        requiredDocs: [
          "10th and 12th class mark sheets (Min 50% PCB for General, 40% for SC/ST/OBC)",
          "NEET Qualification Scorecard",
          "Valid International Passport",
          "IELTS Scorecard (Band 7.0)",
          "MCI/NMC Eligibility Certificate",
          "Statement of Purpose (SOP) & Academic Resume",
          "Medical Fitness & Blood Test Certificate",
          "Proof of Funds / Bank Statement",
          "Academic Reference Letter from Professor"
        ]
      },
      {
        id: "unpaz",
        name: "Unpaz University of Peace (Universidade da Paz)",
        subtitle: "Leading Private University for Healthcare & Public Health in Timor-Leste",
        city: "Dili",
        country: "Timor-Leste",
        type: "Accredited Private University",
        est: "2004",
        legacyNote: "Founded in 2004 in Dili, Universidade da Paz (UNPAZ) is one of the most prominent private higher education institutions in Timor-Leste. Its Faculty of Health Sciences is committed to training healthcare professionals capable of addressing regional and global health challenges. With an emphasis on affordable education, community health, and practical clinical diagnostics, UNPAZ welcomes international medical aspirants seeking low-cost, hands-on MBBS training in Southeast Asia.",
        duration: "6 Years (5 Yrs Pre-Clinical/Clinical + 1 Yr Rotatory Internship)",
        medium: "100% English Medium",
        nationalRank: 2,
        worldRank: 12150,
        tuitionFeeUSD: 3000,
        hostelFeeUSD: 500,
        totalAnnualUSD: 3500,
        approxAnnualINR: "₹2,90,000 / year",
        totalCourseUSD: 21000,
        totalCourseINR: "₹17,40,000 INR (6-Yr Total)",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "IELTS 7.0 Required (or English Proficiency Verification)",
        eligibility: "Applicant must be at least 17 years old and under 25 at the time of admission. General category: Minimum 50% aggregate marks in PCB in 12th grade. SC/ST/OBC category: Minimum 40% aggregate marks in PCB. NEET scorecard is required. Eligibility Certificate issued by MCI/NMC is necessary.",
        recognitions: ["NMC (India) Compliant", "WHO Listed", "ANAAA Accredited", "Ministry of Education Timor-Leste"],
        collaborations: [
          "Timor-Leste National Health Laboratories",
          "Regional Referral Health Centers & District Hospitals",
          "Southeast Asian Public Health Consortium"
        ],
        faculties: [
          "Faculty of Health Sciences & Medicine",
          "Department of Community Health & Preventive Medicine",
          "Department of Clinical Diagnostics & Pathology",
          "Department of Nursing & Allied Health"
        ],
        highlights: [
          "Most affordable MBBS tuition in Southeast Asia starting at just $3,000/year (₹2.48L/year).",
          "Dynamic learning environment extending beyond traditional instruction with hands-on real-world clinical challenges.",
          "Personalized faculty attention and cooperative professors dedicated to student development.",
          "Developing healthcare hub with rapid ongoing investments in modern hospital facilities.",
          "Located in capital Dili with a safe, serene island environment and low student living expenses (~₹25,000–₹30,000/month).",
          "Rich cultural experience blending Portuguese, Indonesian, and traditional Timorese community values.",
          "Transparent fee structure with no donation or capitation fees."
        ],
        feeSchedule: [
          { year: "1st Year", tuition: "$3,000", hostel: "$500", total: "$3,500 (₹2,90,000)" },
          { year: "2nd Year", tuition: "$3,000", hostel: "$500", total: "$3,500 (₹2,90,000)" },
          { year: "3rd Year", tuition: "$3,000", hostel: "$500", total: "$3,500 (₹2,90,000)" },
          { year: "4th Year", tuition: "$3,000", hostel: "$500", total: "$3,500 (₹2,90,000)" },
          { year: "5th Year", tuition: "$3,000", hostel: "$500", total: "$3,500 (₹2,90,000)" },
          { year: "6th Year (Internship)", tuition: "$3,000", hostel: "$500", total: "$3,500 (₹2,90,000)" },
          { year: "Total (6 Yrs)", tuition: "$18,000", hostel: "$3,000", total: "$21,000 (~₹17.4L)" }
        ],
        hostelAccommodation: "Comfortable living quarters near campus with furnished rooms, continuous utilities, study areas, and Wi-Fi access. Monthly living costs (room, meals, and local transit) range from ₹25,000 to ₹30,000, with private city rentals available at ₹16,000–₹17,000/month.",
        admissionProcess: [
          "Free counselling and academic eligibility evaluation at PARK International Education.",
          "Application form completion and document submission to UNPAZ.",
          "Receipt of official university offer letter after academic review.",
          "Application for passport and Timor-Leste student visa.",
          "Pre-departure briefing, group departure, and arrival assistance in Dili."
        ],
        requiredDocs: [
          "10th and 12th class mark sheets (Minimum 50% PCB for General, 40% for Reserved)",
          "NEET Qualification Scorecard",
          "Valid International Passport",
          "IELTS Scorecard (Band 7.0)",
          "MCI / NMC Eligibility Certificate",
          "Statement of Purpose (SOP) & Academic Resume",
          "Medical Fitness Certificate",
          "Proof of Funds / Bank Statement",
          "Academic Reference Letter from Professor"
        ]
      }
    ]
  };

  // 4. Education Consultancy Services (9 Core Services)
  const SERVICES = [
    {
      icon: ICONS.counselling,
      titleEn: "Free Educational Counselling",
      titleTa: "இலவச கல்வி ஆலோசனை",
      descEn: "Personalized 1-on-1 profile evaluation based on your 12th group, marks, NEET qualification, and family budget."
    },
    {
      icon: ICONS.collegeSelect,
      titleEn: "College & University Selection",
      titleTa: "கல்லூரி & பல்கலைக்கழக தேர்வு",
      descEn: "Impartial comparison of approved universities, clinical exposure, hostel safety, and historical student outcomes."
    },
    {
      icon: ICONS.admission,
      titleEn: "Admission & Application Support",
      titleTa: "நேரடி சேர்க்கை உதவி",
      descEn: "Complete documentation handling, application submission, and direct admission letter issuance without middlemen."
    },
    {
      icon: ICONS.neetDoc,
      titleEn: "NEET Eligibility & Documentation",
      titleTa: "NEET மற்றும் ஆவண வழிகாட்டுதல்",
      descEn: "Clear checklist for marksheets, apostille/attestation, medical fitness, and official regulatory compliance."
    },
    {
      icon: ICONS.feeDetails,
      titleEn: "Transparent Fee Structure",
      titleTa: "வெளிப்படையான கட்டண விபரம்",
      descEn: "Every expense—tuition, hostel, food, visa, and insurance—is provided in writing with no hidden costs."
    },
    {
      icon: ICONS.scholarship,
      titleEn: "Scholarship Guidance",
      titleTa: "உதவித்தொகை வழிகாட்டுதல்",
      descEn: "Identifying and applying for institutional, state, and private merit scholarships to reduce your educational burden."
    },
    {
      icon: ICONS.educationLoan,
      titleEn: "Education Loan Assistance",
      titleTa: "கல்விக் கடன் உதவி",
      descEn: "Step-by-step assistance with bank documentation, estimates, and sanction letters from nationalized and private banks."
    },
    {
      icon: ICONS.visaTravel,
      titleEn: "Visa & Travel Facilitation",
      titleTa: "விசா மற்றும் பயண வழிகாட்டுதல்",
      descEn: "Complete student visa stamping, travel insurance, flight group ticketing, and pre-departure briefings."
    },
    {
      icon: ICONS.hostelSupport,
      titleEn: "Hostel & On-Campus Support",
      titleTa: "விடுதி மற்றும் வளாக உதவி",
      descEn: "Assurance of comfortable stay, Indian mess options, campus registration, and local guardian assistance until you settle."
    }
  ];

  // 5. Branch Network (8 Branches)

if (typeof module !== 'undefined') module.exports = { UNIVERSITIES_DATA };
