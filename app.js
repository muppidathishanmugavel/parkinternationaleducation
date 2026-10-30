/**
 * PARK INTERNATIONAL EDUCATION - APPLICATION SCRIPTS
 * Handles navigation, bilingual switching, SVG icon rendering,
 * count-up animations, form validation, and WhatsApp callback dispatch.
 */

(function () {
  'use strict';

  // Helper shortcut
  const $ = (id) => document.getElementById(id);

  // SVG Line Icons Dictionary (Clean, modern Lucide-style line icons)
  const ICONS = {
    stethoscope: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
    engineering: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
    nursing: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 7v6"/><path d="M9 10h6"/></svg>`,
    law: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
    paramedical: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/><path d="M10 4V2h4v2"/></svg>`,
    alliedHealth: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1V2h-2v6h-1a7 7 0 0 0 0 14"/><circle cx="9" cy="9" r="2"/></svg>`,
    pharmacy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
    aviation: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>`,
    artsScience: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    bpt: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
    counselling: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    collegeSelect: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    admission: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="m9 14 2 2 4-4"/></svg>`,
    neetDoc: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    feeDetails: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M14 8H8"/><path d="M16 12H8"/><path d="M13 16H8"/></svg>`,
    scholarship: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    educationLoan: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
    visaTravel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18h20"/><path d="M13 6l7 6-7 6"/><path d="M5 6v12"/></svg>`,
    hostelSupport: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    chevronDown: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    clock: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.27-.19.21-.71.7-.71 1.7 0 1 .73 1.97.83 2.11.1.14 1.43 2.19 3.47 3.07.49.21.87.33 1.17.43.49.16.94.13 1.29.08.4-.06 1.22-.5 1.39-.98.17-.49.17-.9.12-.98-.05-.09-.19-.14-.4-.24s-1.22-.6-1.41-.67c-.19-.07-.33-.1-.47.1-.14.21-.55.7-.67.84-.12.14-.24.16-.45.05s-.89-.33-1.69-1.05c-.63-.56-1.05-1.26-1.17-1.47-.12-.21-.01-.33.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36s-.47-1.14-.65-1.56c-.17-.42-.35-.36-.48-.37l-.41-.01z"/></svg>`
  };

  // Flag Vectors (Consistent 60x40 SVG)
  const FLAGS = {
    Uzbekistan: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Uzbekistan"><rect width="60" height="13" fill="#0099b5"/><rect y="13" width="60" height="14" fill="#fff"/><rect y="27" width="60" height="13" fill="#1eb53a"/><rect y="12.4" width="60" height="1.2" fill="#ce1126"/><rect y="26.4" width="60" height="1.2" fill="#ce1126"/><circle cx="9" cy="6.5" r="3.2" fill="#fff"/><circle cx="10.4" cy="6.5" r="2.7" fill="#0099b5"/></svg>`,
    Philippines: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Philippines"><rect width="60" height="20" fill="#0038a8"/><rect y="20" width="60" height="20" fill="#ce1126"/><path d="M0 0L34 20L0 40Z" fill="#fff"/><circle cx="9" cy="20" r="4" fill="#fcd116"/></svg>`,
    Kazakhstan: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Kazakhstan"><rect width="60" height="40" fill="#00afca"/><circle cx="30" cy="17" r="7" fill="#fec50c"/><rect x="12" y="30" width="36" height="3" rx="1.5" fill="#fec50c"/></svg>`,
    Kyrgyzstan: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Kyrgyzstan"><rect width="60" height="40" fill="#e8112d"/><circle cx="30" cy="20" r="11" fill="#ffef00"/><circle cx="30" cy="20" r="6" fill="#e8112d"/></svg>`,
    Vietnam: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Vietnam"><rect width="60" height="40" fill="#da251d"/><polygon points="30,8 33.5,17.5 43.5,17.5 35.5,23.5 38.5,33 30,27 21.5,33 24.5,23.5 16.5,17.5 26.5,17.5" fill="#ff0"/></svg>`,
    Russia: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Russia"><rect width="60" height="14" fill="#fff"/><rect y="13" width="60" height="14" fill="#0039a6"/><rect y="26" width="60" height="14" fill="#d52b1e"/></svg>`,
    Georgia: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Georgia"><rect width="60" height="40" fill="#fff"/><rect x="26" width="8" height="40" fill="#f00"/><rect y="16" width="60" height="8" fill="#f00"/><g fill="#f00"><path transform="translate(13 8) scale(1.5)" d="M-1-3h2v2h2v2h-2v2h-2v-2h-2v-2h2z"/><path transform="translate(47 8) scale(1.5)" d="M-1-3h2v2h2v2h-2v2h-2v-2h-2v-2h2z"/><path transform="translate(13 32) scale(1.5)" d="M-1-3h2v2h2v2h-2v2h-2v-2h-2v-2h2z"/><path transform="translate(47 32) scale(1.5)" d="M-1-3h2v2h2v2h-2v2h-2v-2h-2v-2h2z"/></g></svg>`,
        TimorLeste: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Timor-Leste"><rect width="60" height="40" fill="#dc241f"/><path d="M0 0L30 20L0 40Z" fill="#ffc726"/><path d="M0 0L20 20L0 40Z" fill="#000"/><polygon points="7,15 8.2,18.8 12,18.8 9,21 10.1,24.8 7,22.5 3.9,24.8 5,21 2,18.8 5.8,18.8" fill="#fff"/></svg>`,
    Mongolia: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Mongolia"><rect width="20" height="40" fill="#e4002b"/><rect x="20" width="20" height="40" fill="#0033a0"/><rect x="40" width="20" height="40" fill="#e4002b"/><circle cx="10" cy="14" r="3" fill="#ffd100"/><polygon points="10,6 8,11 12,11" fill="#ffd100"/><rect x="7" y="19" width="6" height="2" fill="#ffd100"/><rect x="7" y="27" width="6" height="2" fill="#ffd100"/><rect x="5" y="18" width="1.5" height="12" fill="#ffd100"/><rect x="13.5" y="18" width="1.5" height="12" fill="#ffd100"/></svg>`
  };

    // 1. Pages for Navigation
  const PAGES = [
    { id: "home", en: "Home" },
    { id: "about", en: "About" },
    { id: "courses", en: "Courses" },
    { id: "services", en: "Services" },
    { id: "countries", en: "Countries" },
    { id: "universities", en: "Universities" },
    { id: "process", en: "Admission" },
    { id: "branches", en: "Branches" },
    { id: "apply", en: "Apply" }
  ];

  // 2. The 10 Official Course Categories
  const COURSES = [
    {
      icon: ICONS.stethoscope,
      titleEn: "Medicine (MBBS)",
      descEn: "Undergraduate medical degrees (MBBS/MD) in top government and recognized international universities meeting NMC criteria.",
      duration: "5.5 to 6 Years (incl. internship)"
    },
    {
      icon: ICONS.engineering,
      titleEn: "Engineering",
      descEn: "B.E. and B.Tech degree programs across premier engineering institutes with specialization guidance.",
      duration: "4 Years"
    },
    {
      icon: ICONS.nursing,
      titleEn: "Nursing",
      descEn: "B.Sc Nursing, Post Basic B.Sc, and GNM programs with hospital clinical exposure and global placement opportunities.",
      duration: "3 to 4 Years"
    },
    {
      icon: ICONS.law,
      titleEn: "Law (LL.B / Integrated)",
      descEn: "Bar Council of India approved 3-year LL.B and 5-year integrated B.A./BBA LL.B degree programs.",
      duration: "3 or 5 Years"
    },
    {
      icon: ICONS.paramedical,
      titleEn: "Paramedical Sciences",
      descEn: "Essential clinical programs including Dialysis Technology, OT & Anaesthesia, Medical Radiography, and Emergency Care.",
      duration: "2 to 4 Years"
    },
    {
      icon: ICONS.alliedHealth,
      titleEn: "Allied Health Science",
      descEn: "Advanced health-science degrees like Medical Laboratory Technology, Cardiac Care, and Physician Assistant programs.",
      duration: "3 to 4 Years"
    },
    {
      icon: ICONS.pharmacy,
      titleEn: "Pharmacy",
      descEn: "PCI-approved D.Pharm, B.Pharm, and Pharm.D programs providing career pathways in clinical and industrial pharmacy.",
      duration: "2, 4 or 6 Years"
    },
    {
      icon: ICONS.aviation,
      titleEn: "Aviation & Aerospace",
      descEn: "Commercial pilot license guidance, B.Sc Aviation, Aircraft Maintenance Engineering, and airport management.",
      duration: "Varies by Programme"
    },
    {
      icon: ICONS.artsScience,
      titleEn: "Arts & Science",
      descEn: "Undergraduate collegiate programs in Commerce (B.Com), Computer Applications (BCA), BBA, and pure sciences.",
      duration: "3 Years"
    },
    {
      icon: ICONS.bpt,
      titleEn: "BPT (Physiotherapy)",
      descEn: "Bachelor of Physiotherapy with rigorous clinical training in physical rehabilitation, orthopedics, and sports medicine.",
      duration: "4.5 Years (incl. 6-mo internship)"
    }
  ];

    // 3. MBBS Study Destinations
  const COUNTRIES = [
    {
      key: "Uzbekistan",
      flag: FLAGS.Uzbekistan,
      nameEn: "Uzbekistan",
      descEn: "Rapidly growing MBBS destination offering 5+1 year programs, modern medical campuses, high clinical exposure, and direct flight connectivity from India."
    },
    {
      key: "Philippines",
      flag: FLAGS.Philippines,
      nameEn: "Philippines",
      descEn: "Known for English-medium instruction, US-aligned curriculum, high FMGE success track record, and extensive tropical disease clinical exposure."
    },
    {
      key: "Mongolia",
      flag: FLAGS.Mongolia,
      nameEn: "Mongolia",
      descEn: "Premier national medical education in capital Ulaanbaatar, 6-year WHO and WFME-accredited English-medium MD degree with modern university teaching hospitals."
    },
    {
      key: "Kyrgyzstan",
      flag: FLAGS.Kyrgyzstan,
      nameEn: "Kyrgyzstan",
      descEn: "One of the most budget-friendly international MBBS destinations with affordable tuition, comfortable hostels, and Indian mess facilities."
    },
    {
      key: "TimorLeste",
      flag: FLAGS.TimorLeste,
      nameEn: "Timor-Leste",
      descEn: "Emerging tropical island medical destination with focused classroom ratios, dedicated clinical faculty, and NMC-compliant curriculum options."
    },
    {
      key: "Kazakhstan",
      flag: FLAGS.Kazakhstan,
      nameEn: "Kazakhstan",
      descEn: "Established national and state universities offering 5-year MBBS programs, globally recognized degrees, and welcoming Indian student communities."
    },
    {
      key: "Russia",
      flag: FLAGS.Russia,
      nameEn: "Russia",
      descEn: "Century-old government medical academies listed with WHO and WDOMS, offering comprehensive European medical training with subsidised fee structures."
    },
    {
      key: "Georgia",
      flag: FLAGS.Georgia,
      nameEn: "Georgia",
      descEn: "European-standard clinical education following ECTS credit guidelines, safe university towns, and excellent preparation for international licensing exams."
    },
    {
      key: "Vietnam",
      flag: FLAGS.Vietnam,
      nameEn: "Vietnam",
      descEn: "Emerging Southeast Asian medical education destination featuring English-taught medical programs, welcoming culture, and modern hospital infrastructure."
    }
  ];

  // 3b. Medical Universities Grouped Under Countries
    // 3b. Medical Universities Grouped Under Countries (Active Verified List)
  const UNIVERSITIES_DATA = {
    Uzbekistan: [
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
        id: "andijan",
        name: "Andijan State Medical Institute",
        subtitle: "Historic 70-Year-Old Public Medical Institution of Fergana Valley",
        city: "Andijan",
        country: "Uzbekistan",
        type: "Public / State Medical Institute",
        est: "1955",
        legacyNote: "Founded in 1955, Andijan State Medical Institute is one of Central Asia's oldest and most prestigious state medical institutes. Features 56 modern academic departments, multi-specialty clinical hospital networks with 700+ beds, and a comprehensive English-medium 6-year General Medicine (MBBS) curriculum.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: 8,
        worldRank: 5120,
        tuitionFeeUSD: 3500,
        hostelFeeUSD: 600,
        totalAnnualUSD: 4100,
        approxAnnualINR: "₹3,40,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years. NEET qualification mandatory.",
        recognitions: ["NMC (India)", "WHO Listed (WDOMS)", "FAIMER", "Ministry of Health Uzbekistan"],
        collaborations: [
          "Russian State Medical Universities",
          "Erasmus+ Clinical Networks"
        ],
        faculties: [
          "Faculty of General Medicine (Curative)",
          "Pediatrics",
          "Dentistry / Stomatology",
          "Preventive Medicine",
          "Pharmacy"
        ],
        highlights: [
          "70+ years of clinical training heritage founded in 1955.",
          "700+ bed in-house multi-profile clinical hospital for practical bedside rounds.",
          "100% English-medium curriculum conforming to NMC Foreign Medical Graduate Licentiate regulations.",
          "Comfortable international student hostels with dedicated Indian mess providing home-style meals.",
          "Safe and peaceful academic environment with low student-to-teacher laboratory ratios."
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
          "Submit NEET qualification scorecard & 12th academic marksheets.",
          "Verification & issuance of official University Admission Statement.",
          "Ministry of Foreign Affairs apostille & consular student visa issuance.",
          "Airport reception in Tashkent/Andijan, campus check-in & hostel room allotment."
        ],
        requiredDocs: [
          "Valid International Passport copy (min 18 months validity)",
          "10th & 12th Grade Marksheets (Min 50% PCB)",
          "NEET Qualification Scorecard",
          "Medical Fitness & Blood Test Reports",
          "Passport-size Photographs (white background)",
          "Birth Certificate certified copy"
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
        id: "karshi",
        name: "Karshi State University (Faculty of Medicine)",
        subtitle: "Premier Medical & Surgical Faculty of Qashqadaryo Region",
        city: "Karshi",
        country: "Uzbekistan",
        type: "State Government University",
        est: "1945",
        legacyNote: "Established in 1945, Karshi State University expanded its academic profile with a cutting-edge Faculty of Medicine. Features state-of-the-art anatomy labs, high-tech diagnostic simulation centers, and direct tie-ups with regional government specialty hospitals.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: 12,
        worldRank: 6200,
        tuitionFeeUSD: 3000,
        hostelFeeUSD: 500,
        totalAnnualUSD: 3500,
        approxAnnualINR: "₹2,90,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years. NEET qualification mandatory.",
        recognitions: ["NMC (India) Compliant", "WHO Listed (WDOMS)", "Ministry of Higher Education Uzbekistan"],
        collaborations: [
          "Central Asian Medical University Alliances",
          "European University Exchange Partners"
        ],
        faculties: [
          "General Medicine (MBBS/MD)",
          "Clinical Diagnostics",
          "Preventive Healthcare",
          "Medical Biology"
        ],
        highlights: [
          "One of the most affordable government university programs (~$3,000/year tuition).",
          "Spacious green campus with state-of-the-art anatomy dissection and simulation centers.",
          "Comprehensive English-medium medical curriculum compliant with NMC criteria.",
          "Affordable living costs (~$80-$120/month) with secure campus hostel accommodations.",
          "Strong clinical exposure through Karshi regional multi-specialty clinical hospital networks."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,000", hostel: "$500", total: "$3,500" },
          { year: "Year 2", tuition: "$3,000", hostel: "$500", total: "$3,500" },
          { year: "Year 3", tuition: "$3,000", hostel: "$500", total: "$3,500" },
          { year: "Year 4", tuition: "$3,000", hostel: "$500", total: "$3,500" },
          { year: "Year 5", tuition: "$3,000", hostel: "$500", total: "$3,500" },
          { year: "Year 6 (Internship)", tuition: "$3,000", hostel: "$500", total: "$3,500" }
        ],
        admissionProcess: [
          "Document verification & eligibility pre-screening.",
          "Issuance of provisional admission invitation statement.",
          "Student visa stamping with consular endorsement.",
          "Arrival in Uzbekistan, campus registration & commencement of classes."
        ],
        requiredDocs: [
          "Valid International Passport copy",
          "10th & 12th Grade Marksheets (Min 50% PCB)",
          "NEET Qualification Scorecard",
          "Medical Fitness & Blood Test Reports",
          "Passport-size Photographs (white background)"
        ]
      },
      {
        id: "angren",
        name: "Angren University (Faculty of Medicine)",
        subtitle: "Modern Medical Sciences & Clinical Practice Center - Tashkent Region",
        city: "Angren, Tashkent Region",
        country: "Uzbekistan",
        type: "Recognized University Medical Faculty",
        est: "2020",
        legacyNote: "Located in the scenic foothill city of Angren in the Tashkent Region, Angren University's Faculty of Medicine was created with European-standard clinical simulation facilities, interactive digital cadaver tables, and small student batches for intensive personalized professor guidance.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: 18,
        worldRank: 6800,
        tuitionFeeUSD: 3200,
        hostelFeeUSD: 600,
        totalAnnualUSD: 3800,
        approxAnnualINR: "₹3,15,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 45% (Reserved Category). Age: 17 to 25 years. NEET qualification mandatory.",
        recognitions: ["NMC (India) Compliant", "WHO Listed (WDOMS)", "State Inspectorate for Quality in Education Uzbekistan"],
        collaborations: [
          "European Medical Training Consortium",
          "Tashkent Regional Healthcare Hospitals"
        ],
        faculties: [
          "General Medicine (MD/MBBS)",
          "Clinical Simulation & Diagnostics",
          "Therapy & Surgery"
        ],
        highlights: [
          "Modern, newly built medical campus equipped with advanced digital laboratories.",
          "Low student-to-professor ratio (1:12) ensuring focused bedside and theoretical learning.",
          "Affordable tuition package ($3,200/yr) with guaranteed written fee schedules.",
          "Proximity to Tashkent (just 1.5 hours) with pleasant, pollution-free climate.",
          "Indian mess facility operating on campus with South and North Indian culinary options."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$3,200", hostel: "$600", total: "$3,800" },
          { year: "Year 2", tuition: "$3,200", hostel: "$600", total: "$3,800" },
          { year: "Year 3", tuition: "$3,200", hostel: "$600", total: "$3,800" },
          { year: "Year 4", tuition: "$3,200", hostel: "$600", total: "$3,800" },
          { year: "Year 5", tuition: "$3,200", hostel: "$600", total: "$3,800" },
          { year: "Year 6 (Internship)", tuition: "$3,200", hostel: "$600", total: "$3,800" }
        ],
        admissionProcess: [
          "Application review through PARK International Education admissions desk.",
          "Direct issuance of University Admission Statement.",
          "Student visa stamping & flight coordination.",
          "Campus reception, hostel check-in & academic induction."
        ],
        requiredDocs: [
          "Valid International Passport copy",
          "10th & 12th Grade Marksheets (Min 50% PCB)",
          "NEET Qualification Scorecard",
          "Medical Fitness & Blood Test Reports",
          "Passport-size Photographs (white background)"
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
      }
    ],
    Philippines: [
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
      },
{
        id: "perpetual",
        name: "University of Perpetual Help System DALTA (UPHSD)",
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
      }
    ],
    Mongolia: [
      {
        id: "mnums",
        name: "Mongolian National University of Medical Sciences (MNUMS)",
        subtitle: "Mongolia's Sole Apex National Medical University - Ulaanbaatar",
        city: "Ulaanbaatar (Capital)",
        country: "Mongolia",
        type: "Premier National Government Medical University",
        est: "1942",
        legacyNote: "Founded in 1942 as the foundational medical faculty of the Mongolian State University, MNUMS is the premier public medical university in Mongolia, training over 90% of the nation's doctors and healthcare leaders. Features modern university hospital facilities, state-of-the-art simulation centers, and internationally accredited English-medium Doctor of Medicine (MD/MBBS) programs.",
        duration: "6 Years (English Medium)",
        medium: "100% English Medium",
        nationalRank: 1,
        worldRank: 3850,
        tuitionFeeUSD: 4500,
        hostelFeeUSD: 800,
        totalAnnualUSD: 5300,
        approxAnnualINR: "₹4,40,000 / year",
        neetRequired: "Mandatory (Qualifying marks)",
        ieltsRequired: "Not Required",
        eligibility: "50% in PCB (General), 40% (Reserved Category). Age: 17 to 25 years. NEET qualification mandatory.",
        recognitions: ["NMC (India) Compliant", "WHO Listed (WDOMS)", "WFME Accredited", "Ministry of Health Mongolia", "FAIMER", "ECFMG (USA)"],
        collaborations: [
          "Tokyo Medical and Dental University",
          "Seoul National University Hospital",
          "Harvard Medical School Global Alliances"
        ],
        faculties: [
          "School of Medicine (General Medicine / MD)",
          "School of Dentistry",
          "School of Pharmacy",
          "School of Public Health",
          "Graduate School of Biomedical Sciences"
        ],
        highlights: [
          "National apex medical institution of Mongolia with 80+ years of institutional excellence.",
          "Sole university in the country possessing fully integrated national university teaching hospitals.",
          "Accredited by the World Federation for Medical Education (WFME) and listed in WHO/WDOMS.",
          "World-class clinical simulation center recognized across East Asia for surgical and trauma training.",
          "Safe, progressive capital city (Ulaanbaatar) with modern amenities and English-speaking faculty."
        ],
        feeSchedule: [
          { year: "Year 1", tuition: "$4,500", hostel: "$800", total: "$5,300" },
          { year: "Year 2", tuition: "$4,500", hostel: "$800", total: "$5,300" },
          { year: "Year 3", tuition: "$4,500", hostel: "$800", total: "$5,300" },
          { year: "Year 4", tuition: "$4,500", hostel: "$800", total: "$5,300" },
          { year: "Year 5", tuition: "$4,500", hostel: "$800", total: "$5,300" },
          { year: "Year 6 (Internship)", tuition: "$4,500", hostel: "$800", total: "$5,300" }
        ],
        admissionProcess: [
          "Profile assessment & NEET qualification verification at PARK International Education desk.",
          "Submission of application to the Academic Affairs Council of MNUMS.",
          "Issuance of official University Acceptance & Admission Certificate.",
          "Mongolian student visa stamping with Consular Ministry approval.",
          "Flight departure from India to Ulaanbaatar, on-ground reception & hostel allotment."
        ],
        requiredDocs: [
          "Valid International Passport copy (min 2 years validity)",
          "10th & 12th Grade Marksheets (Min 50% PCB)",
          "NEET-UG Qualification Scorecard",
          "Certified Birth Certificate copy",
          "Comprehensive Medical Fitness & Blood Test Certificate",
          "Police Clearance Certificate (PCC)",
          "Passport-size Photographs (white background, 3.5 x 4.5 cm)"
        ]
      }
    ],
    Kyrgyzstan: [
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
        ieltsRequired: "IELTS 7.0 Required (PARK International Education Direct Guidelines)",
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
      }
    ]
  };

  // Education Consultancy Services (9 Core Services)
  const SERVICES = [
    {
      icon: ICONS.counselling,
      titleEn: "Free Educational Counselling",
      descEn: "Personalized 1-on-1 profile evaluation based on your 12th group, marks, NEET qualification, and family budget."
    },
    {
      icon: ICONS.collegeSelect,
      titleEn: "College & University Selection",
      descEn: "Impartial comparison of approved universities, clinical exposure, hostel safety, and historical student outcomes."
    },
    {
      icon: ICONS.admission,
      titleEn: "Admission & Application Support",
      descEn: "Complete documentation handling, application submission, and direct admission letter issuance without middlemen."
    },
    {
      icon: ICONS.neetDoc,
      titleEn: "NEET Eligibility & Documentation",
      descEn: "Clear checklist for marksheets, apostille/attestation, medical fitness, and official regulatory compliance."
    },
    {
      icon: ICONS.feeDetails,
      titleEn: "Transparent Fee Structure",
      descEn: "Every expense—tuition, hostel, food, visa, and insurance—is provided in writing with no hidden costs."
    },
    {
      icon: ICONS.scholarship,
      titleEn: "Scholarship Guidance",
      descEn: "Identifying and applying for institutional, state, and private merit scholarships to reduce your educational burden."
    },
    {
      icon: ICONS.educationLoan,
      titleEn: "Education Loan Assistance",
      descEn: "Step-by-step assistance with bank documentation, estimates, and sanction letters from nationalized and private banks."
    },
    {
      icon: ICONS.visaTravel,
      titleEn: "Visa & Travel Facilitation",
      descEn: "Complete student visa stamping, travel insurance, flight group ticketing, and pre-departure briefings."
    },
    {
      icon: ICONS.hostelSupport,
      titleEn: "Hostel & On-Campus Support",
      descEn: "Assurance of comfortable stay, Indian mess options, campus registration, and local guardian assistance until you settle."
    }
  ];

  const BRANCHES = [
    {
      city: "Tirunelveli",
      type: "Head Office",
      isHead: true,
      address: "Palayamkottai / Vannarpettai Junction, Tirunelveli, Tamil Nadu 627002",
      contact: "Phone: 81100 87722 / 88077 44900 (Mon - Sat: 9:30 AM - 7:00 PM)"
    },
    {
      city: "Trichy",
      type: "Branch Office & Admissions Hub",
      isHead: false,
      address: "Thillai Nagar Main Road, Tiruchirappalli, Tamil Nadu 620018",
      contact: "Phone: 88077 44900 / 81100 87722 (Mon - Sat: 9:30 AM - 7:00 PM)"
    },
    {
      city: "Madurai",
      type: "Regional Branch",
      isHead: false,
      address: "Admissions Center, KK Nagar Main Road, Madurai, Tamil Nadu",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Chennai",
      type: "Regional Branch",
      isHead: false,
      address: "Metropolitan Admissions Desk, Mount Road / Guindy, Chennai, Tamil Nadu",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Coimbatore",
      type: "Western Regional Desk",
      isHead: false,
      address: "Admissions Counseling Center, Gandhipuram, Coimbatore, Tamil Nadu",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Nagercoil",
      type: "South Regional Desk",
      isHead: false,
      address: "Direct Admissions Desk, Court Road, Nagercoil, Kanyakumari District",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Tenkasi",
      type: "Regional Desk",
      isHead: false,
      address: "Counseling Desk, Main Road, Tenkasi District",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Ramanathapuram",
      type: "Regional Desk",
      isHead: false,
      address: "Direct Admissions Desk, Salai Street, Ramanathapuram Main Center",
      contact: "Call 81100 87722 for consultation & visiting hours."
    }
  ];

  // Render Navigation Links
  function renderNav() {
    const navDesktop = $("main-nav");
    const navMobile = $("mobile-nav-links");
    if (!navDesktop) return;

    // Desktop nav omits redundant "Apply" link since "Apply Now" CTA button is right next to it in header actions
    const desktopPages = PAGES.filter(p => p.id !== "apply");
    const desktopHtml = desktopPages.map(p => `
      <a href="#${p.id}" class="nav-link" data-page="${p.id}">${p.en}</a>
    `).join("");

    const mobileHtml = PAGES.map(p => `
      <a href="#${p.id}" class="nav-link" data-page="${p.id}">${p.en}</a>
    `).join("");

    navDesktop.innerHTML = desktopHtml;
    if (navMobile) {
      navMobile.innerHTML = mobileHtml;
    }
  }

    // Render Courses Cards
  function renderCourses() {
    const containers = [
      $("home-courses-grid"),
      $("courses-page-grid")
    ];

    const cardsHtml = COURSES.map(c => `
      <div class="card course-card">
        <div class="course-icon-wrap">
          ${c.icon}
        </div>
        <h3 class="course-title">${c.titleEn}</h3>
        <p class="course-desc">${c.descEn}</p>
        <div class="course-meta">
          <span class="duration-tag">${ICONS.clock} ${c.duration}</span>
        </div>
        <a href="#apply" class="card-action-link" onclick="selectCourse('${c.titleEn}')">
          <span>Get Admission Details</span>
          ${ICONS.arrowRight}
        </a>
      </div>
    `).join("");

    containers.forEach(el => {
      if (el) el.innerHTML = cardsHtml;
    });

    // Populate Course Select dropdowns
    const selects = [$("course-select"), $("home-course-select")];
    selects.forEach(sel => {
      if (sel) {
        sel.innerHTML = `<option value="">Select Course Stream</option>` +
          COURSES.map(c => `<option value="${c.titleEn}">${c.titleEn}</option>`).join("");
      }
    });
  }

    // Render Countries Cards
  function renderCountries() {
    const containers = [
      $("home-countries-grid"),
      $("countries-page-grid")
    ];

    const cardsHtml = COUNTRIES.map(c => {
      const uniList = UNIVERSITIES_DATA[c.key] || [];
      const uniCount = uniList.length;
      const uniLinkText = uniCount > 0 
        ? `View ${uniCount} Medical Universities in ${c.nameEn}`
        : `Consult for MBBS in ${c.nameEn}`;

      return `
      <div class="card country-card">
        <div class="country-flag-header">
          ${c.flag}
          <div class="country-name-wrap">
            <h3 class="country-title">MBBS in ${c.nameEn}</h3>
            <span class="country-tag">NMC Compliant Curriculum</span>
          </div>
        </div>
        <div class="country-body">
          <p class="country-desc">${c.descEn}</p>
          <div style="margin-top: auto; display: flex; flex-direction: column; gap: 8px;">
            <a href="#universities" class="card-action-link" onclick="filterUniversitiesCountry('${c.key}')" style="font-weight: 700; color: var(--color-primary);">
              <span>${uniLinkText}</span>
              ${ICONS.arrowRight}
            </a>
            <a href="#apply" class="card-action-link" onclick="selectCountry('${c.nameEn}')" style="font-size: 13px;">
              <span>Request Written Fee Sheet</span>
              ${ICONS.arrowRight}
            </a>
          </div>
        </div>
      </div>
    `;
    }).join("");

    containers.forEach(el => {
      if (el) el.innerHTML = cardsHtml;
    });

    // Populate Country dropdowns
    const selects = [$("country-select"), $("home-country-select")];
    selects.forEach(sel => {
      if (sel) {
        sel.innerHTML = `<option value="">Select Preferred Country / State</option>` +
          COUNTRIES.map(c => `<option value="${c.nameEn}">MBBS in ${c.nameEn}</option>`).join("") +
          `<option value="India">Study in India</option><option value="Not Decided">Undecided / Need Counselling</option>`;
      }
    });
  }

    // Render Services Cards
  function renderServices() {
    const containers = [
      $("home-services-grid"),
      $("services-page-grid")
    ];

    const cardsHtml = SERVICES.map(s => `
      <div class="card service-card">
        <div class="service-icon-box">
          ${s.icon}
        </div>
        <h3 class="service-title">${s.titleEn}</h3>
        <p class="service-desc">${s.descEn}</p>
      </div>
    `).join("");

    containers.forEach(el => {
      if (el) el.innerHTML = cardsHtml;
    });
  }

  // Render Branches Cards
  function renderBranches() {
    const containers = [
      $("home-branches-grid"),
      $("branches-page-grid")
    ];

    const cardsHtml = BRANCHES.map(b => `
      <div class="card branch-card">
        <span class="branch-badge ${b.isHead ? 'head-office' : 'branch'}">${b.type}</span>
        <h3 class="branch-city">${b.city}</h3>
        <p class="branch-address">${b.address}</p>
        <div class="branch-footer">
          <span>${b.contact}</span>
        </div>
      </div>
    `).join("");

    containers.forEach(el => {
      if (el) el.innerHTML = cardsHtml;
    });

    // Populate Branch dropdowns
    const selects = [$("branch-select"), $("home-branch-select")];
    selects.forEach(sel => {
      if (sel) {
        sel.innerHTML = `<option value="">Select Nearest Branch Office</option>` +
          BRANCHES.map(b => `<option value="${b.city}">${b.city} (${b.type})</option>`).join("");
      }
    });
  }

  // Quick select helper from cards
  window.selectCourse = function (courseName) {
    const sel = $("course-select") || $("home-course-select");
    if (sel) sel.value = courseName;
  };

  window.selectCountry = function (countryName) {
    const sel = $("country-select") || $("home-country-select");
    if (sel) sel.value = countryName;
  };

  // View Routing (SPA Hash Router)
  function handleRouting() {
    let hash = (location.hash || "#home").replace("#", "").trim().toLowerCase();
    const validViews = ["home", "about", "courses", "services", "countries", "universities", "process", "branches", "apply", "admin"];
    if (!validViews.includes(hash)) {
      hash = "home";
    }

    // Toggle views
    document.querySelectorAll(".view").forEach(v => {
      v.classList.toggle("on", v.id === `v-${hash}`);
    });

    // Update active nav link
    document.querySelectorAll(".nav-link").forEach(a => {
      a.classList.toggle("active", a.dataset.page === hash);
    });

    // Close mobile drawer if open
    const drawer = $("mobile-nav-drawer");
    if (drawer) drawer.classList.remove("open");

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Handle Admin view authentication check
    if (hash === "admin") {
      checkAdminAuthState();
    }

    // Trigger number counter if entering home view
    if (hash === "home") {
      animateCounters();
    }

    // Schedule 6.5s lead popup on all pages except apply
    if (typeof scheduleLeadPopup === "function") {
      scheduleLeadPopup();
    }
  }

  // Gentle Number Counter Animation
  function animateCounters() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counters = document.querySelectorAll("[data-counter]");

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.counter, 10);
      if (isNaN(target)) return;

      if (prefersReducedMotion) {
        counter.textContent = target;
        return;
      }

      let start = null;
      const duration = 1400; // ms

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        // Ease-out cubic
        const current = Math.round(target * (1 - Math.pow(1 - progress, 3)));
        counter.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(step);
    });
  }

  // Language Switcher (Dual-Pill Multi-Instance Synchronization)
  window.setLanguage = function(lang) {
    const isTamil = (lang === "ta");
    if (isTamil) {
      document.body.classList.add("tm");
      document.documentElement.lang = "ta";
    } else {
      document.body.classList.remove("tm");
      document.documentElement.lang = "en";
    }
    localStorage.setItem("park_lang", isTamil ? "ta" : "en");

    // Update all language buttons on the page
    document.querySelectorAll("[data-lang]").forEach(btn => {
      const bLang = btn.getAttribute("data-lang");
      const isActive = (bLang === (isTamil ? "ta" : "en"));
      if (isActive) {
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      }
    });

    // Support legacy lang-btn if present
    const legacyBtn = $("lang-btn");
    if (legacyBtn) {
      legacyBtn.textContent = isTamil ? "English" : "தமிழ்";
    }
  };

  function initLanguageToggle() {
    const saved = localStorage.getItem("park_lang") || "en";
    window.setLanguage(saved);

    // Attach click listeners to all [data-lang] buttons across header, top bar, and drawer
    document.querySelectorAll("[data-lang]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute("data-lang");
        window.setLanguage(targetLang);
      });
    });

    // Support legacy lang-btn if present
    const legacyBtn = $("lang-btn");
    if (legacyBtn) {
      legacyBtn.addEventListener("click", () => {
        const current = document.body.classList.contains("tm") ? "ta" : "en";
        window.setLanguage(current === "ta" ? "en" : "ta");
      });
    }
  }

  // Mobile Drawer Toggle
  function initMobileDrawer() {
    const toggle = $("mobile-menu-toggle");
    const drawer = $("mobile-nav-drawer");
    if (!toggle || !drawer) return;

    toggle.addEventListener("click", () => {
      drawer.classList.toggle("open");
    });
  }

  // Sticky Header Shadow on Scroll
  function initHeaderScroll() {
    const header = $("site-header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  // ==========================================================================
  // UNIVERSITIES DIRECTORY LOGIC
  // ==========================================================================
  let currentCountryFilter = "Uzbekistan";
  let currentSearchQuery = "";

  // Render Country Tab Buttons
  function renderUniversityTabs() {
    const tabsContainer = $("uni-country-tabs");
    if (!tabsContainer) return;

    const availableCountries = Object.keys(UNIVERSITIES_DATA);
    const uzbCount = (UNIVERSITIES_DATA.Uzbekistan || []).length;
    let html = `
      <button type="button" class="uni-tab-btn ${currentCountryFilter === 'Uzbekistan' ? 'active' : ''}" data-country="Uzbekistan">
        <span class="uni-tab-flag">${FLAGS.Uzbekistan || ''}</span>
        <span>Uzbekistan</span>
        <span class="tab-count">${uzbCount}</span>
      </button>
    `;

    availableCountries.forEach(countryKey => {
      if (countryKey === "Uzbekistan") return;
      const count = UNIVERSITIES_DATA[countryKey].length;
      const isActive = currentCountryFilter === countryKey;
      const flagSvg = FLAGS[countryKey] || '';
      const displayName = countryKey === 'TimorLeste' ? 'Timor-Leste' : countryKey;
      html += `
        <button type="button" class="uni-tab-btn ${isActive ? 'active' : ''}" data-country="${countryKey}">
          <span class="uni-tab-flag">${flagSvg}</span>
          <span>${displayName}</span>
          <span class="tab-count">${count}</span>
        </button>
      `;
    });

    html += `
      <button type="button" class="uni-tab-btn ${currentCountryFilter === 'All' ? 'active' : ''}" data-country="All">
        <span>🌐 All Countries</span>
      </button>
    `;

    tabsContainer.innerHTML = html;

    // Attach click listeners to tabs
    tabsContainer.querySelectorAll(".uni-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentCountryFilter = btn.dataset.country;
        renderUniversityTabs();
        renderUniversities();
      });
    });
  }

  // Render Universities Grid & Banner
  function renderUniversities() {
    const grid = $("universities-grid");
    const banner = $("uni-country-banner");
    const resultsCount = $("uni-results-count");
    const comparisonSection = $("uzbekistan-comparison-section");
    if (!grid) return;

    // Filter by country
    let listToDisplay = [];
    if (currentCountryFilter === "All") {
      Object.keys(UNIVERSITIES_DATA).forEach(cKey => {
        UNIVERSITIES_DATA[cKey].forEach(u => {
          listToDisplay.push({ ...u, countryKey: cKey });
        });
      });
    } else if (UNIVERSITIES_DATA[currentCountryFilter]) {
      listToDisplay = UNIVERSITIES_DATA[currentCountryFilter].map(u => ({ ...u, countryKey: currentCountryFilter }));
    }

    // Filter by search query
    if (currentSearchQuery.trim()) {
      const q = currentSearchQuery.trim().toLowerCase();
      listToDisplay = listToDisplay.filter(u => {
        return (
          u.name.toLowerCase().includes(q) ||
          (u.subtitle && u.subtitle.toLowerCase().includes(q)) ||
          u.city.toLowerCase().includes(q) ||
          u.country.toLowerCase().includes(q) ||
          (u.recognitions && u.recognitions.some(r => r.toLowerCase().includes(q))) ||
          (u.highlights && u.highlights.some(h => h.toLowerCase().includes(q)))
        );
      });
    }

    // Update Count text
    if (resultsCount) {
      if (currentCountryFilter === "All") {
        resultsCount.textContent = `Showing ${listToDisplay.length} medical universities across all destinations`;
      } else {
        const countryDisplayName = currentCountryFilter === "TimorLeste" ? "Timor-Leste" : currentCountryFilter;
        resultsCount.textContent = `Showing ${listToDisplay.length} medical universities in ${countryDisplayName}`;
      }
    }

    // Update Banner
    if (banner) {
      if (currentCountryFilter === "Uzbekistan") {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS.Uzbekistan}</span>
              <span>Study MBBS in Uzbekistan – Top Government Universities</span>
            </h2>
            <p class="uni-country-banner-desc">
              Uzbekistan has emerged as one of the premier destinations for Indian medical aspirants, offering 6-year English-medium MBBS programs compliant with NMC FMGL regulations, extensive clinical beds, low crime rate, and direct flight access from Delhi and Mumbai.
            </p>
            <div class="uni-country-spotlight">
              <div class="spotlight-thumb">
                <img src="assets/images/destinations/uzbekistan-registan.jpg" alt="Registan Square, Samarkand" onerror="this.parentElement.style.display='none';" loading="lazy">
              </div>
              <div class="spotlight-details">
                <div class="spotlight-title">Featured Cultural Heritage: Registan Square (Samarkand)</div>
                <div>Historic Silk Road crossroads, UNESCO World Heritage monuments, ultra-safe environment for international students, and low living expenses (~$100-$150/month).</div>
              </div>
            </div>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC &amp; WHO Recognized</span>
            <span class="uni-banner-tag">${ICONS.check} 100% English Medium</span>
            <span class="uni-banner-tag">${ICONS.check} Indian Mess Facilities</span>
            <span class="uni-banner-tag">${ICONS.check} Fixed Written Fees</span>
          </div>
        `;
      } else if (currentCountryFilter === "Philippines") {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS.Philippines}</span>
              <span>Study MBBS in the Philippines – US-Pattern Medical Education</span>
            </h2>
            <p class="uni-country-banner-desc">
              The Philippines is one of the world's largest English-speaking nations, offering a US-aligned dual degree (BS-MD) medical curriculum with exceptional FMGE/NExT pass rates (up to 83% at DMSF), intensive tropical disease bedside rotations, and hands-on clinical clerkships.
            </p>
            <div class="uni-country-spotlight">
              <div class="spotlight-thumb">
                <img src="assets/images/destinations/philippines-manila.jpg" alt="Intramuros, Manila" onerror="this.parentElement.style.display='none';" loading="lazy">
              </div>
              <div class="spotlight-details">
                <div class="spotlight-title">Featured Landmark: Historic Intramuros &amp; Manila Bay</div>
                <div>Tropical archipelago with disease patterns matching India, English as the official language of government and medicine, and large Indian student communities.</div>
              </div>
            </div>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC &amp; WHO Listed</span>
            <span class="uni-banner-tag">${ICONS.check} US-Aligned BS-MD Curriculum</span>
            <span class="uni-banner-tag">${ICONS.check} High FMGE Pass Rate (83%)</span>
            <span class="uni-banner-tag">${ICONS.check} Indian Food &amp; Hostels</span>
          </div>
        `;
      } else if (currentCountryFilter === "Kazakhstan") {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS.Kazakhstan}</span>
              <span>Study MBBS in Kazakhstan – Top National &amp; State Universities</span>
            </h2>
            <p class="uni-country-banner-desc">
              Kazakhstan is a major Central Asian hub for Indian medical students, offering 5.8 to 6-year English-medium MBBS degrees compliant with NMC FMGL criteria. Benefit from prestigious Soviet medical foundations, QS-ranked national universities, Indian hostel mess with Indian chefs, and low tuition fees starting from ₹2.7 Lakhs/year.
            </p>
            <div class="uni-country-spotlight">
              <div class="spotlight-thumb">
                <img src="assets/images/destinations/kazakhstan-baiterek.jpg" alt="Baiterek Tower, Astana, Kazakhstan" onerror="this.parentElement.style.display='none';" loading="lazy">
              </div>
              <div class="spotlight-details">
                <div class="spotlight-title">Featured Cultural Capital: Baiterek Tower &amp; Almaty Mountains</div>
                <div>Modern infrastructure, subsidized public medical education, safe European-style cities, and direct flight connections from Delhi.</div>
              </div>
            </div>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC &amp; WHO Certified</span>
            <span class="uni-banner-tag">${ICONS.check} 100% English Medium</span>
            <span class="uni-banner-tag">${ICONS.check} Indian Food &amp; Wardens</span>
            <span class="uni-banner-tag">${ICONS.check} QS Top-Ranked (#220 Al-Farabi)</span>
          </div>
        `;
      } else if (currentCountryFilter === "Kyrgyzstan") {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS.Kyrgyzstan}</span>
              <span>Study MBBS in Kyrgyzstan – Premier Government &amp; International Universities</span>
            </h2>
            <p class="uni-country-banner-desc">
              Kyrgyzstan is renowned as one of the most budget-friendly, high-quality MBBS destinations in Asia. Benefit from NMC and WHO-certified medical colleges, dual Russian-Kyrgyz interstate degrees, hands-on clinical cadaveric training, and on-campus Indian hostels with tuition fees starting as low as ₹2.17 Lakhs/year.
            </p>
            <div class="uni-country-spotlight">
              <div class="spotlight-thumb">
                <img src="assets/images/destinations/kyrgyzstan-ala-archa.jpg" alt="Ala-Archa National Park, Kyrgyzstan" onerror="this.parentElement.style.display='none';" loading="lazy">
              </div>
              <div class="spotlight-details">
                <div class="spotlight-title">Featured Natural Landmark: Ala-Archa National Park &amp; Bishkek Capital</div>
                <div>Scenic mountainous Central Asian republic with high literacy, peaceful living environment, and direct air links from India.</div>
              </div>
            </div>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC &amp; WHO Certified</span>
            <span class="uni-banner-tag">${ICONS.check} 100% English Medium</span>
            <span class="uni-banner-tag">${ICONS.check} Indian Mess &amp; Hostels</span>
            <span class="uni-banner-tag">${ICONS.check} Low Fees (From ₹2.17L/Yr)</span>
          </div>
        `;
            } else if (currentCountryFilter === "Mongolia") {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS.Mongolia}</span>
              <span>Study MBBS in Mongolia – Premier National Medical Education</span>
            </h2>
            <p class="uni-country-banner-desc">
              Mongolia is an emerging destination for medical studies in East Asia, home to the prestigious Mongolian National University of Medical Sciences (MNUMS) in Ulaanbaatar. Benefit from 6-year English-medium medical training recognized by WHO and WFME, cutting-edge surgical simulation centers, on-campus teaching hospitals, and friendly international student living.
            </p>
            <div class="uni-country-spotlight">
              <div class="spotlight-thumb">
                <img src="assets/images/destinations/mongolia-ulaanbaatar.jpg" alt="Sukhbaatar Square, Ulaanbaatar" onerror="this.parentElement.style.display='none';" loading="lazy">
              </div>
              <div class="spotlight-details">
                <div class="spotlight-title">Featured Cultural Capital: Genghis Khan Square &amp; Ulaanbaatar</div>
                <div>Peaceful, progressive capital city with rich nomadic heritage, modern healthcare research institutes, and safe international student lifestyle.</div>
              </div>
            </div>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC &amp; WHO Listed</span>
            <span class="uni-banner-tag">${ICONS.check} WFME Accredited</span>
            <span class="uni-banner-tag">${ICONS.check} 100% English Medium</span>
            <span class="uni-banner-tag">${ICONS.check} National Teaching Hospitals</span>
          </div>
        `;
      } else if (currentCountryFilter === "TimorLeste") {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS.TimorLeste}</span>
              <span>Study MBBS in Timor-Leste – Peaceful Southeast Asian Medical Destination</span>
            </h2>
            <p class="uni-country-banner-desc">
              Timor-Leste offers an affordable, NMC-focused 6-year medical education in a tranquil, oceanfront Southeast Asian environment. Benefit from personalized professor attention (small student-to-faculty ratios), English-medium instruction, modern university campuses in capital Dili, and low living expenses (~₹25,000–₹30,000/month).
            </p>
            <div class="uni-country-spotlight">
              <div class="spotlight-thumb">
                <img src="assets/images/destinations/timor-leste-dili.jpg" alt="Cristo Rei &amp; Dili Waterfront, Timor-Leste" onerror="this.parentElement.style.display='none';" loading="lazy">
              </div>
              <div class="spotlight-details">
                <div class="spotlight-title">Featured Cultural Landmark: Cristo Rei &amp; Dili Coastal Capital</div>
                <div>Youngest democratic nation in Southeast Asia with pristine marine biodiversity, tropical climate, welcoming multi-cultural heritage (Portuguese, Timorese, and English), and safe, serene student life.</div>
              </div>
            </div>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC Focus Curriculum</span>
            <span class="uni-banner-tag">${ICONS.check} Low Tuition ($3,000–$4,200/Yr)</span>
            <span class="uni-banner-tag">${ICONS.check} Personalized Faculty Attention</span>
            <span class="uni-banner-tag">${ICONS.check} Safe &amp; Serene Atmosphere</span>
          </div>
        `;
      } else if (currentCountryFilter !== "All" && FLAGS[currentCountryFilter]) {
        banner.style.display = "flex";
        banner.innerHTML = `
          <div class="uni-country-banner-content">
            <h2 class="uni-country-banner-title">
              <span style="display:inline-block; width:34px; height:24px; vertical-align:middle;">${FLAGS[currentCountryFilter]}</span>
              <span>Medical Universities in ${currentCountryFilter}</span>
            </h2>
            <p class="uni-country-banner-desc">
              Accredited international medical universities meeting statutory regulatory criteria. Full support with applications, student visas, and airport reception.
            </p>
          </div>
          <div class="uni-country-banner-badges">
            <span class="uni-banner-tag">${ICONS.check} NMC / WHO Listed</span>
            <span class="uni-banner-tag">${ICONS.check} Written Estimates</span>
          </div>
        `;
      } else {
        banner.style.display = "none";
      }
    }

    // Toggle comparison table: show for Uzbekistan, Philippines, or All
    renderComparisonTable();

    if (listToDisplay.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 16px; text-align: center; background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
          <h3 style="color: var(--color-primary); margin-bottom: 8px;">No universities found matching "${currentSearchQuery}"</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 16px;">Try adjusting your search terms or select another country filter above.</p>
          <button class="btn btn-sm btn-outline-primary" onclick="resetUniSearch()">Clear Search</button>
        </div>
      `;
      return;
    }

    // Render Cards
    grid.innerHTML = listToDisplay.map(uni => {
      const isGovt = (uni.type && (uni.type.includes("Government") || uni.type.includes("Public") || uni.type.includes("National")));
      const recognitions = (uni.recognitions || []).slice(0, 3);
      const highlights = (uni.highlights || []).slice(0, 3);

      return `
        <article class="uni-card" id="uni-card-${uni.id}">
          <div class="uni-card-thumb">
            <img src="${uni.imageUrl || 'assets/images/universities/' + uni.id + '.jpg'}" alt="${uni.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" loading="lazy">
            <div class="uni-card-thumb-fallback">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 9h1"/><path d="M9 13h1"/><path d="M9 17h1"/><path d="M14 9h1"/><path d="M14 13h1"/><path d="M14 17h1"/></svg>
              <span>${uni.city}, ${uni.country}</span>
            </div>
          </div>

          <div class="uni-card-header">
            <span class="uni-type-tag ${isGovt ? 'govt' : ''}">${uni.type || 'Accredited'}</span>
            <span class="uni-est-tag">${uni.est ? 'Est. ' + uni.est : (uni.city + ', ' + uni.country)}</span>
          </div>

          <h3 class="uni-card-title">${uni.name}</h3>
          <div class="uni-card-subtitle">${uni.subtitle || (uni.city + ', ' + uni.country)}</div>

          <div class="uni-badges-row">
            ${recognitions.map(r => `<span class="uni-badge-item ${r.includes('NMC') ? 'nmc' : ''}">${ICONS.check} ${r}</span>`).join("")}
            <span class="uni-badge-item">English Medium</span>
          </div>

          <div class="uni-metrics-bar">
            <div class="uni-metric-item">
              <span class="uni-metric-label">National Rank</span>
              <span class="uni-metric-val">${uni.nationalRank ? '#' + uni.nationalRank : 'Recognized'}</span>
            </div>
            <div class="uni-metric-item">
              <span class="uni-metric-label">Course Duration</span>
              <span class="uni-metric-val">${uni.duration ? uni.duration.split('(')[0].trim() : '6 Years'}</span>
            </div>
          </div>

          <div class="uni-fee-box">
            <div class="uni-fee-row">
              <span>Annual Tuition Fee:</span>
              <span class="uni-fee-amount">$${uni.tuitionFeeUSD ? uni.tuitionFeeUSD.toLocaleString() : '3,500'}/Yr</span>
            </div>
            <div class="uni-fee-row">
              <span>Annual Hostel Fee:</span>
              <span class="uni-fee-amount">$${uni.hostelFeeUSD ? uni.hostelFeeUSD.toLocaleString() : '600'}/Yr</span>
            </div>
            <div class="uni-fee-row total">
              <span>Total Annual Estimate:</span>
              <span>$${uni.totalAnnualUSD ? uni.totalAnnualUSD.toLocaleString() : '4,100'}/Yr <span class="uni-fee-inr">(${uni.approxAnnualINR || '₹3.4L/Yr'})</span></span>
            </div>
          </div>

          <ul class="uni-highlights-list">
            ${highlights.map(h => `<li class="uni-highlight-item">${ICONS.check} <span>${h}</span></li>`).join("")}
          </ul>

          <div class="uni-card-actions">
            <button type="button" class="btn btn-outline-primary" onclick="openUniversityModal('${uni.id}', '${uni.countryKey}')">
              <span>Fee Details</span>
            </button>
            <button type="button" class="btn btn-primary" onclick="selectUniversity('${uni.name.replace(/'/g, "\\'")}', '${uni.country}')">
              <span>Apply Now</span>
            </button>
          </div>
        </article>
      `;
    }).join("");
  }

  // Reset Search
  window.resetUniSearch = function() {
    currentSearchQuery = "";
    const searchInput = $("uni-search-input");
    if (searchInput) searchInput.value = "";
    renderUniversities();
  };

  // Render Country Comparison Table
  function renderComparisonTable() {
    const tbody = $("uzbekistan-table-body");
    const section = $("uzbekistan-comparison-section");
    const headerTitle = section ? section.querySelector("h3") : null;
    const headerDesc = section ? section.querySelector("p") : null;
    if (!tbody || !section) return;

    let countryToShow = currentCountryFilter;
    if (countryToShow !== "Uzbekistan" && countryToShow !== "Philippines" && countryToShow !== "Kazakhstan" && countryToShow !== "Kyrgyzstan" && countryToShow !== "TimorLeste") {
      if (countryToShow === "All") {
        countryToShow = "Uzbekistan";
      } else {
        section.style.display = "none";
        return;
      }
    }

    section.style.display = "block";
    const list = UNIVERSITIES_DATA[countryToShow] || [];

    if (headerTitle) {
      const displayTitleCountry = countryToShow === "TimorLeste" ? "Timor-Leste" : countryToShow;
      headerTitle.textContent = `${displayTitleCountry} Medical Universities – Side-by-Side Comparison`;
    }
    if (headerDesc) {
      if (countryToShow === "Philippines") {
        headerDesc.textContent = "All listed Philippine medical schools offer English-medium US-pattern dual degree (BS-MD) programs approved by NMC, WHO, and CHED.";
      } else if (countryToShow === "Kazakhstan") {
        headerDesc.textContent = "Top-rated Kazakhstan national and state medical universities with NMC, WHO, and UNESCO accreditation, subsidized tuition fees, and on-campus Indian mess.";
      } else if (countryToShow === "Kyrgyzstan") {
        headerDesc.textContent = "High-ranking Kyrgyzstan medical universities approved by NMC and WHO, offering European educational standards, digital simulators, and low-cost tuition packages.";
      } else if (countryToShow === "TimorLeste") {
        headerDesc.textContent = "Peaceful Southeast Asian island medical universities with personalized faculty attention, 6-year NMC-compliant curriculum, and low tuition fees starting from $3,000/year.";
      } else {
        headerDesc.textContent = "All listed institutions are recognized by the National Medical Commission (NMC) and the World Health Organization (WHO), offering full English-medium clinical MBBS programs.";
      }
    }

    tbody.innerHTML = list.map(u => {
      const isGovt = u.type && (u.type.includes("Government") || u.type.includes("Public") || u.type.includes("Top-Ranked"));
      return `
        <tr>
          <td>
            <strong style="color: var(--color-primary); display: block;">${u.name}</strong>
            <span style="font-size: 12px; color: var(--color-text-muted);">${u.city}</span>
          </td>
          <td>
            <span class="uni-table-badge ${isGovt ? 'govt' : ''}">${u.type}</span>
            <div style="font-size: 11.5px; color: var(--color-text-muted); margin-top: 2px;">Est. ${u.est}</div>
          </td>
          <td>
            <strong style="color: var(--color-primary);">${u.nationalRank ? '#' + u.nationalRank : 'Top Tier'}</strong>
            <div style="font-size: 11px; color: var(--color-text-muted);">${u.worldRank ? 'World: #' + u.worldRank : 'Recognized'}</div>
          </td>
          <td><strong>$${u.tuitionFeeUSD.toLocaleString()}</strong></td>
          <td>$${u.hostelFeeUSD.toLocaleString()}</td>
          <td><strong style="color: var(--color-secondary);">$${u.totalAnnualUSD.toLocaleString()}</strong></td>
          <td><span style="font-size: 12.5px; font-weight: 600;">${u.approxAnnualINR}</span></td>
          <td>
            <button type="button" class="btn btn-sm btn-primary" style="padding: 6px 12px; font-size: 12.5px;" onclick="selectUniversity('${u.name.replace(/'/g, "\\'")}', '${countryToShow}')">
              Apply
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Open University Modal
  window.openUniversityModal = function(uniId, countryKey) {
    let uni = null;
    let foundCountry = countryKey;

    if (UNIVERSITIES_DATA[countryKey]) {
      uni = UNIVERSITIES_DATA[countryKey].find(u => u.id === uniId);
    }
    if (!uni) {
      for (const k of Object.keys(UNIVERSITIES_DATA)) {
        const candidate = UNIVERSITIES_DATA[k].find(u => u.id === uniId);
        if (candidate) {
          uni = candidate;
          foundCountry = k;
          break;
        }
      }
    }
    if (!uni) return;

    const backdrop = $("uni-modal-backdrop");
    const titleEl = $("uni-modal-title");
    const subTitleEl = $("uni-modal-subtitle");
    const priceTagEl = $("uni-modal-price-tag");
    const bodyEl = $("uni-modal-body");
    const applyBtn = $("uni-modal-apply-btn");

    if (titleEl) titleEl.textContent = uni.name;
    if (subTitleEl) subTitleEl.textContent = `${uni.type || 'Medical Institution'} · ${uni.city}, ${uni.country}`;
    if (priceTagEl) priceTagEl.innerHTML = `Total Annual Estimate: <strong>$${uni.totalAnnualUSD ? uni.totalAnnualUSD.toLocaleString() : '4,100'}/Yr</strong> (${uni.approxAnnualINR || '₹3.4L/Yr'})`;

    if (applyBtn) {
      applyBtn.onclick = function() {
        selectUniversity(uni.name, uni.country);
      };
    }

    let bodyContent = ``;

    if (uni.legacyNote) {
      bodyContent += `
        <div class="uni-modal-section-title">Institutional Overview &amp; Legacy</div>
        <p style="font-size: 14px; color: var(--color-text-main); margin-bottom: 16px;">${uni.legacyNote}</p>
      `;
    }

    if (uni.feeSchedule && uni.feeSchedule.length > 0) {
      bodyContent += `
        <div class="uni-modal-section-title">Year-by-Year Written Fee Structure (USD)</div>
        <table class="uni-modal-fee-table">
          <thead>
            <tr>
              <th>Academic Year</th>
              <th>Tuition Fee (USD)</th>
              <th>Hostel Fee (USD)</th>
              <th>Total (USD)</th>
            </tr>
          </thead>
          <tbody>
            ${uni.feeSchedule.map(row => `
              <tr>
                <td><strong>${row.year}</strong></td>
                <td>${row.tuition}</td>
                <td>${row.hostel}</td>
                <td><strong>${row.total}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        <p style="font-size: 12.5px; color: var(--color-text-muted); margin-bottom: 20px;">
          * Note: Indian mess charges, one-time registration/visa extension, and medical insurance are provided transparently in writing before admission.
        </p>
      `;
    }

    if (uni.faculties && uni.faculties.length > 0) {
      bodyContent += `
        <div class="uni-modal-section-title">Faculties &amp; Departments</div>
        <ul style="padding-left: 20px; font-size: 13.5px; margin-bottom: 16px;">
          ${uni.faculties.map(f => `<li style="margin-bottom: 4px;">${f}</li>`).join("")}
        </ul>
      `;
    }

    if (uni.collaborations && uni.collaborations.length > 0) {
      bodyContent += `
        <div class="uni-modal-section-title">International Collaborations &amp; Partner Universities</div>
        <ul style="padding-left: 20px; font-size: 13.5px; margin-bottom: 16px;">
          ${uni.collaborations.map(c => `<li style="margin-bottom: 4px;">${c}</li>`).join("")}
        </ul>
      `;
    }

    if (uni.eligibility) {
      bodyContent += `
        <div class="uni-modal-section-title">Eligibility Criteria</div>
        <div style="background: var(--color-bg); padding: 12px 14px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); font-size: 13.5px; margin-bottom: 16px;">
          ${uni.eligibility}
        </div>
      `;
    }

    if (uni.requiredDocs && uni.requiredDocs.length > 0) {
      bodyContent += `
        <div class="uni-modal-section-title">Required Documents for Direct Admission</div>
        <ul style="padding-left: 20px; font-size: 13.5px; margin-bottom: 16px;">
          ${uni.requiredDocs.map(d => `<li style="margin-bottom: 4px;">${d}</li>`).join("")}
        </ul>
      `;
    }

    if (bodyEl) bodyEl.innerHTML = bodyContent;

    if (backdrop) {
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  // Close University Modal
  window.closeUniversityModal = function() {
    const backdrop = $("uni-modal-backdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  // Filter by country helper
  window.filterUniversitiesCountry = function(countryKey) {
    currentCountryFilter = countryKey;
    location.hash = "#universities";
    renderUniversityTabs();
    renderUniversities();
  };

  // Select university helper for forms
  window.selectUniversity = function(uniName, countryName) {
    // Set course to Medicine (MBBS)
    const courseSel = $("course-select") || $("home-course-select");
    if (courseSel) courseSel.value = "Medicine (MBBS)";

    // Set country
    const countrySel = $("country-select") || $("home-country-select");
    if (countrySel && countryName) {
      for (let i = 0; i < countrySel.options.length; i++) {
        if (countrySel.options[i].value.includes(countryName) || countrySel.options[i].text.includes(countryName)) {
          countrySel.selectedIndex = i;
          break;
        }
      }
    }

    // Set university dropdown
    const uniSel = $("apply-uni-select") || $("home-uni-select");
    if (uniSel && uniName) uniSel.value = uniName;

    // Navigate to #apply
    location.hash = "#apply";
    closeUniversityModal();

    // Scroll to form smoothly
    const formEl = $("apply-form");
    if (formEl) formEl.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // Populate University Dropdowns
  function populateUniversityDropdowns() {
    const selects = [$("apply-uni-select"), $("home-uni-select")];
    let optionsHtml = `<option value="">Any Approved University / Need Counselling</option>`;

    Object.keys(UNIVERSITIES_DATA).forEach(cKey => {
      const groupLabel = cKey === 'TimorLeste' ? 'Timor-Leste' : cKey;
      optionsHtml += `<optgroup label="${groupLabel}">`;
      UNIVERSITIES_DATA[cKey].forEach(u => {
        optionsHtml += `<option value="${u.name}">${u.name} (${u.city})</option>`;
      });
      optionsHtml += `</optgroup>`;
    });

    selects.forEach(sel => {
      if (sel) sel.innerHTML = optionsHtml;
    });
  }

  // Initialize Universities View
  function initUniversities() {
    renderUniversityTabs();
    renderUniversities();
    renderComparisonTable();
    populateUniversityDropdowns();

    // Search input listener
    const searchInput = $("uni-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        currentSearchQuery = e.target.value;
        renderUniversities();
      });
    }

    // Modal close handlers
    const closeBtn = $("uni-modal-close");
    const dismissBtn = $("uni-modal-dismiss-btn");
    const backdrop = $("uni-modal-backdrop");

    if (closeBtn) closeBtn.addEventListener("click", closeUniversityModal);
    if (dismissBtn) dismissBtn.addEventListener("click", closeUniversityModal);
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeUniversityModal();
      });
    }

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeUniversityModal();
    });
  }

  // Form Validation & WhatsApp Callback Dispatch
  function setupForm(formId, nameId, phoneId, courseId, neetId, countryId, uniId, branchId, errorId) {
    const form = $(formId);
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = $(nameId);
      const phoneInput = $(phoneId);
      const courseSelect = $(courseId);
      const neetSelect = $(neetId);
      const countrySelect = $(countryId);
      const uniSelect = $(uniId);
      const branchSelect = $(branchId);
      const errorDiv = $(errorId);

      const rawPhone = phoneInput ? phoneInput.value.trim() : "";
      const cleanPhone = rawPhone.replace(/\D/g, "").slice(-10);

      if (cleanPhone.length !== 10) {
        if (errorDiv) {
          errorDiv.textContent = "Please enter a valid 10-digit Indian mobile number.";
        }
        if (phoneInput) phoneInput.focus();
        return;
      }

      if (errorDiv) errorDiv.textContent = "";

      const studentName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Student";
      const selectedCourse = courseSelect ? courseSelect.value : "Not specified";
      const neetStatus = neetSelect ? neetSelect.value : "Not specified";
      const preferredCountry = countrySelect ? countrySelect.value : "Not decided";
      const preferredUni = (uniSelect && uniSelect.value) ? uniSelect.value : "";
      const nearestBranch = branchSelect ? branchSelect.value : "Tirunelveli Head Office";

      let messageText = 
        `Hello PARK International Education,\n` +
        `I would like to request admission guidance and written fee details.\n\n` +
        `• Student Name: ${studentName}\n` +
        `• Mobile: +91 ${cleanPhone}\n` +
        `• Course Interested: ${selectedCourse}\n` +
        `• NEET Qualification Status: ${neetStatus}\n` +
        `• Preferred Country/Location: ${preferredCountry}\n`;

      if (preferredUni && preferredUni.trim() !== "") {
        messageText += `• Preferred University: ${preferredUni}\n`;
      }

      messageText += 
        `• Nearest Branch: ${nearestBranch}\n\n` +
        `Please call me back with the official fee structure and university options.`;

      // Save lead to Admin Queries CRM
      addQueryToDatabase({
        source: formId === "apply-form" ? "Application Form" : "Homepage Quick Form",
        name: studentName,
        phone: cleanPhone,
        email: "",
        course: selectedCourse,
        country: preferredCountry,
        uni: preferredUni || "Any Approved University",
        city: nearestBranch,
        branch: nearestBranch,
        stage: "New Enquiry",
        currentPosition: "Online application submitted; awaiting document review",
        reqs: `NEET Status: ${neetStatus}. Preferred University: ${preferredUni || preferredCountry}.`,
        remarks: ""
      });

      const whatsappUrl = `https://wa.me/918807744900?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  // =========================================================================
  // LEAD REGISTRATION / ENQUIRY POPUP MODAL CONTROLLER
  // =========================================================================
  let leadPopupTimer = null;

  window.scheduleLeadPopup = function() {
    try {
      if (sessionStorage.getItem("park_lead_seen")) return;
      if (leadPopupTimer) {
        clearTimeout(leadPopupTimer);
        leadPopupTimer = null;
      }

      const hash = (location.hash || "#home").replace("#", "").trim().toLowerCase();
      // Popup should come once on all pages after 6.5s except apply page (and staff admin)
      if (hash === "apply" || hash === "admin") {
        return;
      }

      leadPopupTimer = setTimeout(() => {
        const currentHash = (location.hash || "#home").replace("#", "").trim().toLowerCase();
        if (currentHash === "apply" || currentHash === "admin") return;
        if (sessionStorage.getItem("park_lead_seen")) return;

        // Don't interrupt if user is already viewing the university details modal
        const uniModal = $("uni-modal-backdrop");
        if (!uniModal || !uniModal.classList.contains("open")) {
          openLeadModal();
        }
      }, 6500);
    } catch (e) {}
  };

  window.openLeadModal = function() {
    const backdrop = $("lead-modal-backdrop");
    if (backdrop) {
      backdrop.classList.add("open");
      document.body.style.overflow = "hidden";
      try {
        sessionStorage.setItem("park_lead_seen", "true");
      } catch (err) {}
    }
  };

  window.closeLeadModal = function() {
    const backdrop = $("lead-modal-backdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("park_lead_seen", "true");
      } catch (err) {}
    }
  };

  function initLeadModal() {
    const backdrop = $("lead-modal-backdrop");
    const closeBtn = $("lead-modal-close");
    const form = $("lead-popup-form");

    if (closeBtn) closeBtn.addEventListener("click", closeLeadModal);
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeLeadModal();
      });
    }

    // Auto-open once on all pages after 6.5 seconds except apply page
    scheduleLeadPopup();

    // Lead Form submission
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = ($("lead-name") ? $("lead-name").value.trim() : "");
        const phone = ($("lead-phone") ? $("lead-phone").value.trim().replace(/\D/g, "") : "");
        const course = ($("lead-course") ? $("lead-course").value : "Medicine (MBBS)");
        const country = ($("lead-country") ? $("lead-country").value : "Uzbekistan");
        const email = ($("lead-email") ? $("lead-email").value.trim() : "");
        const city = ($("lead-city") ? $("lead-city").value.trim() : "");
        const msg = ($("lead-message") ? $("lead-message").value.trim() : "");
        const errorEl = $("lead-error");

        if (!name || name.length < 2) {
          if (errorEl) {
            errorEl.textContent = "Please enter student's full name.";
            errorEl.style.display = "block";
          }
          return;
        }

        if (!phone || phone.length < 10) {
          if (errorEl) {
            errorEl.textContent = "Please enter a valid 10-digit mobile number.";
            errorEl.style.display = "block";
          }
          return;
        }

        if (!city || city.length < 2) {
          if (errorEl) {
            errorEl.textContent = "Please enter your city / native district.";
            errorEl.style.display = "block";
          }
          return;
        }

        if (errorEl) errorEl.style.display = "none";

        // Mark as seen so popup doesn't reopen
        try {
          sessionStorage.setItem("park_lead_seen", "true");
        } catch (err) {}

        // Construct pre-filled WhatsApp message
        let waText = 
          `*PARK ADMISSION REGISTRATION*\n\n` +
          `• *Student Name:* ${name}\n` +
          `• *Mobile:* +91 ${phone}\n` +
          `• *Course Interested:* ${course}\n` +
          `• *Preferred Destination:* ${country}\n` +
          `• *Student Native/City:* ${city}\n`;

        if (email) waText += `• *Email:* ${email}\n`;
        if (msg) waText += `• *Questions/Notes:* ${msg}\n`;

        waText += `\nPlease send me verified fee structure and admission procedure.`;

        // Automatically store in Admin CRM
        addQueryToDatabase({
          source: "Website Popup",
          name: name,
          phone: phone,
          email: email,
          course: course,
          country: country,
          uni: "Needs guidance / to be assigned",
          city: city,
          branch: "Tirunelveli Head Office",
          stage: "New Enquiry",
          currentPosition: "Lead captured via popup; call scheduled within 24h",
          reqs: msg || "Requested direct callback and official written fee details.",
          remarks: ""
        });

        // Render success view inside modal
        form.innerHTML = `
          <div class="lead-success-card">
            <div class="lead-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 style="color: var(--color-primary); font-size: 20px; font-weight: 700; margin-bottom: 8px;">Registration Received!</h4>
            <p style="color: var(--color-text-muted); font-size: 14px; margin-bottom: 20px; line-height: 1.5;">
              Thank you, <strong>${name}</strong>. Our senior admission counsellor from the Tirunelveli Head Office will contact you on <strong>+91 ${phone}</strong> within 24 hours.
            </p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <a href="https://wa.me/918110087722?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="justify-content: center; padding: 12px 18px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.27-.19.21-.71.7-.71 1.7 0 1 .73 1.97.83 2.11.1.14 1.43 2.19 3.47 3.07.49.21.87.33 1.17.43.49.16.94.13 1.29.08.4-.06 1.22-.5 1.39-.98.17-.49.17-.9.12-.98-.05-.09-.19-.14-.4-.24s-1.22-.6-1.41-.67c-.19-.07-.33-.1-.47.1-.14.21-.55.7-.67.84-.12.14-.24.16-.45.05s-.89-.33-1.69-1.05c-.63-.56-1.05-1.26-1.17-1.47-.12-.21-.01-.33.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36s-.47-1.14-.65-1.56c-.17-.42-.35-.36-.48-.37l-.41-.01z"/></svg>
                <span>Connect Immediately on WhatsApp</span>
              </a>
              <button type="button" class="btn btn-outline-secondary" onclick="closeLeadModal()" style="justify-content: center;">
                <span>Close Window</span>
              </button>
            </div>
          </div>
        `;
      });
    }
  }

  // =========================================================================
  // ADMIN PANEL, QUERY PIPELINE & AUTHENTICATION CONTROLLER
  // =========================================================================
  const DEFAULT_ADMIN_PASS = "park@2008";
  const QUERIES_STORAGE_KEY = "park_admin_queries_v2";
  const PASS_STORAGE_KEY = "park_admin_password_v2";
  const AUTH_SESSION_KEY = "park_admin_session_auth";

  // Pre-loaded realistic inquiries
  const INITIAL_SAMPLE_QUERIES = [
    {
      id: "PK-1021",
      date: "29 Oct 2026, 11:20 AM",
      source: "Website Popup",
      name: "Karthik Raja M.",
      phone: "9443187211",
      email: "karthik.raja@gmail.com",
      course: "Medicine (MBBS)",
      country: "Uzbekistan",
      uni: "Kokand Medical University",
      city: "Tirunelveli",
      branch: "Tirunelveli Head Office",
      stage: "Document Verification",
      currentPosition: "Passport submitted for MEA Apostille; NEET score 342 verified; Kokand admission letter issued",
      reqs: "Budget: ₹22 Lakhs total. Needs vegetarian mess and Indian senior student guidance.",
      remarks: "Parents visited Tirunelveli HO on Tuesday; highly satisfied with written fee breakdown."
    },
    {
      id: "PK-1022",
      date: "29 Oct 2026, 09:45 AM",
      source: "Application Form",
      name: "Priya Dharshini S.",
      phone: "9842155320",
      email: "priya.dharshini@outlook.com",
      course: "Medicine (MBBS)",
      country: "Philippines",
      uni: "University of Perpetual Help DALTA",
      city: "Madurai",
      branch: "Madurai Branch",
      stage: "Seat Booked",
      currentPosition: "BS-MD seat advance paid; CHED endorsement documents submitted; visa appointment booked",
      reqs: "Focus on US-aligned clinical training; 12th PCB 89%. Prefer on-campus dorm with attached bath.",
      remarks: "Counselling conducted by senior doctor alumnus."
    },
    {
      id: "PK-1023",
      date: "28 Oct 2026, 04:15 PM",
      source: "Office Walk-in",
      name: "Mohammed Faizal",
      phone: "9790923144",
      email: "faizal.med@gmail.com",
      course: "Medicine (MBBS)",
      country: "Uzbekistan",
      uni: "Tashkent Medical Academy",
      city: "Chennai",
      branch: "Chennai Branch",
      stage: "NEET Counselling",
      currentPosition: "Detailed university comparison provided; reviewing Tashkent vs Fergana; parent discussion on Friday",
      reqs: "Wants capital city university with direct flights from Delhi/Mumbai. NEET score 310.",
      remarks: "Follow-up scheduled for 31 Oct at 4:00 PM."
    },
    {
      id: "PK-1024",
      date: "28 Oct 2026, 02:30 PM",
      source: "Website Popup",
      name: "Sneha Ramachandran",
      phone: "9629411209",
      email: "sneha.ram@yahoo.com",
      course: "Medicine (MBBS)",
      country: "Philippines",
      uni: "Davao Medical School Foundation (DMSF)",
      city: "Coimbatore",
      branch: "Coimbatore Branch",
      stage: "Call Scheduled",
      currentPosition: "New lead captured; introductory call completed; WhatsApp fee brochure sent",
      reqs: "Interested in high FMGE passing rate (83%). Enquired about Davao climate and Indian mess.",
      remarks: "Send video of DMSF hostel and hospital clinical rotations."
    },
    {
      id: "PK-1025",
      date: "27 Oct 2026, 05:00 PM",
      source: "Direct Call",
      name: "Vignesh Kumar P.",
      phone: "9500833411",
      email: "vignesh.kumar@gmail.com",
      course: "Medicine (MBBS)",
      country: "Uzbekistan",
      uni: "Fergana Medical Institute of Public Health",
      city: "Salem",
      branch: "Salem Branch",
      stage: "Admitted",
      currentPosition: "Visa stamped; air ticket confirmed for Nov departure batch from Chennai airport; pre-departure briefing done",
      reqs: "Government medical degree; Indian mess hostel confirmed.",
      remarks: "Student and father attended Tirunelveli pre-departure orientation."
    }
  ];

  function getAdminPassword() {
    try {
      return localStorage.getItem(PASS_STORAGE_KEY) || DEFAULT_ADMIN_PASS;
    } catch (e) {
      return DEFAULT_ADMIN_PASS;
    }
  }

  function isAdminAuthenticated() {
    try {
      return sessionStorage.getItem(AUTH_SESSION_KEY) === "true";
    } catch (e) {
      return false;
    }
  }

  function checkAdminAuthState() {
    const loginScreen = $("admin-login-screen");
    const dashScreen = $("admin-dashboard-screen");
    if (!loginScreen || !dashScreen) return;

    if (isAdminAuthenticated()) {
      loginScreen.style.display = "none";
      dashScreen.style.display = "block";
      renderAdminDashboard();
    } else {
      loginScreen.style.display = "block";
      dashScreen.style.display = "none";
      const passInput = $("admin-pass-input");
      if (passInput) passInput.value = "";
      const err = $("admin-login-error");
      if (err) err.style.display = "none";
    }
  }

  window.handleAdminLogin = function(e) {
    if (e) e.preventDefault();
    const passInput = $("admin-pass-input");
    const err = $("admin-login-error");
    const entered = passInput ? passInput.value.trim() : "";
    const correct = getAdminPassword();

    if (entered === correct) {
      try {
        sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      } catch (err) {}
      if (err) err.style.display = "none";
      checkAdminAuthState();
    } else {
      if (err) {
        err.textContent = "Incorrect admin password. Please try again.";
        err.style.display = "block";
      }
      if (passInput) {
        passInput.focus();
        passInput.select();
      }
    }
  };

  window.handleAdminLogout = function() {
    try {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    } catch (e) {}
    checkAdminAuthState();
  };

  window.togglePassVisibility = function() {
    const input = $("admin-pass-input");
    if (input) {
      input.type = input.type === "password" ? "text" : "password";
    }
  };

  function getQueriesFromStorage() {
    try {
      const data = localStorage.getItem(QUERIES_STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      } else {
        localStorage.setItem(QUERIES_STORAGE_KEY, JSON.stringify(INITIAL_SAMPLE_QUERIES));
        return INITIAL_SAMPLE_QUERIES;
      }
    } catch (e) {
      return INITIAL_SAMPLE_QUERIES;
    }
  }

  function saveQueriesToStorage(list) {
    try {
      localStorage.setItem(QUERIES_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  function addQueryToDatabase(q) {
    const list = getQueriesFromStorage();
    const newEntry = {
      id: "PK-" + Math.floor(1000 + Math.random() * 9000),
      date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
      source: q.source || "Website Inquiry",
      name: q.name || "Student",
      phone: q.phone || "",
      email: q.email || "",
      course: q.course || "Medicine (MBBS)",
      country: q.country || "Uzbekistan",
      uni: q.uni || "Any Approved University",
      city: q.city || "Tirunelveli",
      branch: q.branch || "Tirunelveli Head Office",
      stage: q.stage || "New Enquiry",
      currentPosition: q.currentPosition || "Inquiry received; awaiting follow-up call",
      reqs: q.reqs || "Requested admission guidance and written fee structure.",
      remarks: q.remarks || ""
    };
    list.unshift(newEntry);
    saveQueriesToStorage(list);
  }

  function getStageBadgeClass(stage) {
    switch (stage) {
      case "New Enquiry": return "new";
      case "Call Scheduled": return "contacted";
      case "NEET Counselling": return "counselling";
      case "Document Verification": return "verified";
      case "Seat Booked": return "booked";
      case "Visa & Processing": return "visa";
      case "Admitted": return "admitted";
      case "Dropped": return "dropped";
      default: return "new";
    }
  }

  window.renderAdminDashboard = function() {
    const list = getQueriesFromStorage();
    const tbody = $("admin-queries-tbody");
    if (!tbody) return;

    // Update KPI Counts
    const kpiTotal = $("kpi-total");
    const kpiNew = $("kpi-new");
    const kpiCounselling = $("kpi-counselling");
    const kpiAdmitted = $("kpi-admitted");

    if (kpiTotal) kpiTotal.textContent = list.length;
    if (kpiNew) kpiNew.textContent = list.filter(q => q.stage === "New Enquiry" || q.stage === "Call Scheduled").length;
    if (kpiCounselling) kpiCounselling.textContent = list.filter(q => q.stage === "NEET Counselling" || q.stage === "Document Verification" || q.stage === "Visa & Processing").length;
    if (kpiAdmitted) kpiAdmitted.textContent = list.filter(q => q.stage === "Seat Booked" || q.stage === "Admitted").length;

    filterAdminQueries();
  };

  window.filterAdminQueries = function() {
    const list = getQueriesFromStorage();
    const tbody = $("admin-queries-tbody");
    if (!tbody) return;

    const queryInput = $("admin-search-query");
    const filterStatus = $("admin-filter-status");
    const filterCourse = $("admin-filter-course");
    const filterCountry = $("admin-filter-country");

    const q = queryInput ? queryInput.value.trim().toLowerCase() : "";
    const statusVal = filterStatus ? filterStatus.value : "ALL";
    const courseVal = filterCourse ? filterCourse.value : "ALL";
    const countryVal = filterCountry ? filterCountry.value : "ALL";

    let filtered = list.filter(item => {
      if (statusVal !== "ALL" && item.stage !== statusVal) return false;
      if (courseVal !== "ALL" && item.course !== courseVal) return false;
      if (countryVal !== "ALL" && item.country !== countryVal && item.country.replace("-", "").toLowerCase() !== countryVal.replace("-", "").toLowerCase()) return false;

      if (q) {
        const hay = `${item.id} ${item.name} ${item.phone} ${item.email} ${item.city} ${item.uni} ${item.currentPosition} ${item.reqs} ${item.remarks}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; padding: 40px 16px; color: var(--color-text-muted);">
            No queries found matching the selected filters.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(item => {
      const badgeCls = getStageBadgeClass(item.stage);
      const cleanPhone = item.phone.replace(/\D/g, "");
      const waLink = `https://wa.me/91${cleanPhone}?text=Hello%20${encodeURIComponent(item.name)}%2C%20greetings%20from%20PARK%20International%20Education%20Admissions%20Desk.`;

      return `
        <tr id="query-row-${item.id}">
          <td>
            <div style="font-weight: 700; color: var(--color-primary);">${item.id}</div>
            <div style="font-size: 11.5px; color: var(--color-text-muted); margin-top: 2px;">${item.date}</div>
            <span style="display: inline-block; font-size: 11px; background: #EDF4FA; color: var(--color-secondary); padding: 2px 6px; border-radius: 4px; margin-top: 4px;">${item.source || 'Website'}</span>
          </td>
          <td>
            <div class="admin-student-name">${item.name}</div>
            <div class="admin-student-contact">
              <div>📞 <a href="tel:+91${cleanPhone}" style="color: var(--color-primary); font-weight: 600;">+91 ${item.phone}</a></div>
              ${item.email ? `<div>✉️ ${item.email}</div>` : ''}
              <div>📍 ${item.city || 'Tamil Nadu'}</div>
            </div>
          </td>
          <td>
            <div class="admin-req-box">
              <div class="admin-req-course">${item.course}</div>
              <div class="admin-req-uni"><strong>${item.country}:</strong> ${item.uni || 'Any'}</div>
              ${item.reqs ? `<div class="admin-req-notes">📝 ${item.reqs}</div>` : ''}
            </div>
          </td>
          <td style="min-width: 140px;">
            <span class="admin-position-badge ${badgeCls}">${item.stage}</span>
            <select class="admin-quick-stage-select" onchange="updateQueryStage('${item.id}', this.value)" aria-label="Change stage for ${item.name}">
              <option value="New Enquiry" ${item.stage === 'New Enquiry' ? 'selected' : ''}>New Enquiry</option>
              <option value="Call Scheduled" ${item.stage === 'Call Scheduled' ? 'selected' : ''}>Call Scheduled</option>
              <option value="NEET Counselling" ${item.stage === 'NEET Counselling' ? 'selected' : ''}>NEET Counselling</option>
              <option value="Document Verification" ${item.stage === 'Document Verification' ? 'selected' : ''}>Document Verification</option>
              <option value="Seat Booked" ${item.stage === 'Seat Booked' ? 'selected' : ''}>Seat Booked</option>
              <option value="Visa & Processing" ${item.stage === 'Visa & Processing' ? 'selected' : ''}>Visa & Processing</option>
              <option value="Admitted" ${item.stage === 'Admitted' ? 'selected' : ''}>Admitted</option>
              <option value="Dropped" ${item.stage === 'Dropped' ? 'selected' : ''}>Dropped</option>
            </select>
          </td>
          <td style="max-width: 220px;">
            <div class="admin-position-detail">${item.currentPosition || 'Initial inquiry stage.'}</div>
            ${item.remarks ? `<div style="font-size: 11.5px; color: #64748B; margin-top: 4px;"><em>Counsellor: ${item.remarks}</em></div>` : ''}
          </td>
          <td style="text-align: right;">
            <div class="admin-actions-cell" style="justify-content: flex-end;">
              <a href="tel:+91${cleanPhone}" class="admin-mini-btn" title="Call Student">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="admin-mini-btn wa" title="WhatsApp Chat">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.27-.19.21-.71.7-.71 1.7 0 1 .73 1.97.83 2.11.1.14 1.43 2.19 3.47 3.07.49.21.87.33 1.17.43.49.16.94.13 1.29.08.4-.06 1.22-.5 1.39-.98.17-.49.17-.9.12-.98-.05-.09-.19-.14-.4-.24s-1.22-.6-1.41-.67c-.19-.07-.33-.1-.47.1-.14.21-.55.7-.67.84-.12.14-.24.16-.45.05s-.89-.33-1.69-1.05c-.63-.56-1.05-1.26-1.17-1.47-.12-.21-.01-.33.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36s-.47-1.14-.65-1.56c-.17-.42-.35-.36-.48-.37l-.41-.01z"/></svg>
              </a>
              <button type="button" class="admin-mini-btn" onclick="openAdminEditModal('${item.id}')" title="Edit Requirements & Position">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                <span>Edit</span>
              </button>
              <button type="button" class="admin-mini-btn danger" onclick="deleteAdminQuery('${item.id}')" title="Delete">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  };

  window.updateQueryStage = function(id, newStage) {
    const list = getQueriesFromStorage();
    const item = list.find(q => q.id === id);
    if (!item) return;

    item.stage = newStage;
    if (newStage === "Seat Booked" && !item.currentPosition.includes("advance")) {
      item.currentPosition = "Seat advance booked; admission letter in progress";
    } else if (newStage === "Admitted" && !item.currentPosition.includes("Visa")) {
      item.currentPosition = "Visa stamped; student successfully admitted";
    }

    saveQueriesToStorage(list);
    renderAdminDashboard();
  };

  window.openAdminEditModal = function(id) {
    const list = getQueriesFromStorage();
    const item = list.find(q => q.id === id);
    if (!item) return;

    if ($("edit-query-id")) $("edit-query-id").value = item.id;
    if ($("edit-student-name")) $("edit-student-name").value = item.name;
    if ($("edit-student-phone")) $("edit-student-phone").value = item.phone;
    if ($("edit-student-course")) $("edit-student-course").value = item.course;
    if ($("edit-student-country")) $("edit-student-country").value = item.country;
    if ($("edit-student-uni")) $("edit-student-uni").value = item.uni || "";
    if ($("edit-student-city")) $("edit-student-city").value = item.city || "";
    if ($("edit-student-stage")) $("edit-student-stage").value = item.stage;
    if ($("edit-student-branch")) $("edit-student-branch").value = item.branch || "Tirunelveli Head Office";
    if ($("edit-current-position")) $("edit-current-position").value = item.currentPosition || "";
    if ($("edit-student-reqs")) $("edit-student-reqs").value = item.reqs || "";
    if ($("edit-counsellor-remarks")) $("edit-counsellor-remarks").value = item.remarks || "";

    const modal = $("admin-edit-modal");
    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeAdminEditModal = function() {
    const modal = $("admin-edit-modal");
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  window.saveAdminQueryEdit = function(e) {
    if (e) e.preventDefault();
    const id = $("edit-query-id") ? $("edit-query-id").value : "";
    const list = getQueriesFromStorage();
    const item = list.find(q => q.id === id);
    if (!item) return;

    if ($("edit-student-name")) item.name = $("edit-student-name").value.trim();
    if ($("edit-student-phone")) item.phone = $("edit-student-phone").value.trim();
    if ($("edit-student-course")) item.course = $("edit-student-course").value.trim();
    if ($("edit-student-country")) item.country = $("edit-student-country").value.trim();
    if ($("edit-student-uni")) item.uni = $("edit-student-uni").value.trim();
    if ($("edit-student-city")) item.city = $("edit-student-city").value.trim();
    if ($("edit-student-stage")) item.stage = $("edit-student-stage").value;
    if ($("edit-student-branch")) item.branch = $("edit-student-branch").value;
    if ($("edit-current-position")) item.currentPosition = $("edit-current-position").value.trim();
    if ($("edit-student-reqs")) item.reqs = $("edit-student-reqs").value.trim();
    if ($("edit-counsellor-remarks")) item.remarks = $("edit-counsellor-remarks").value.trim();

    saveQueriesToStorage(list);
    closeAdminEditModal();
    renderAdminDashboard();
  };

  window.openAdminAddModal = function() {
    const modal = $("admin-add-modal");
    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeAdminAddModal = function() {
    const modal = $("admin-add-modal");
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  };

  window.saveAdminNewQuery = function(e) {
    if (e) e.preventDefault();
    const name = $("add-student-name") ? $("add-student-name").value.trim() : "";
    const phone = $("add-student-phone") ? $("add-student-phone").value.trim() : "";
    const course = $("add-student-course") ? $("add-student-course").value : "Medicine (MBBS)";
    const country = $("add-student-country") ? $("add-student-country").value : "Uzbekistan";
    const uni = $("add-student-uni") ? $("add-student-uni").value.trim() : "";
    const city = $("add-student-city") ? $("add-student-city").value.trim() : "Tirunelveli";
    const stage = $("add-student-stage") ? $("add-student-stage").value : "New Enquiry";
    const source = $("add-student-source") ? $("add-student-source").value : "Office Walk-in";
    const currentPosition = $("add-current-position") ? $("add-current-position").value.trim() : "New inquiry received";
    const notes = $("add-student-notes") ? $("add-student-notes").value.trim() : "";

    addQueryToDatabase({
      name,
      phone,
      course,
      country,
      uni,
      city,
      stage,
      source,
      currentPosition,
      reqs: notes
    });

    closeAdminAddModal();
    renderAdminDashboard();

    const form = $("admin-add-form");
    if (form) form.reset();
  };

  window.deleteAdminQuery = function(id) {
    if (!confirm(`Are you sure you want to delete lead query ${id}?`)) return;
    let list = getQueriesFromStorage();
    list = list.filter(q => q.id !== id);
    saveQueriesToStorage(list);
    renderAdminDashboard();
  };

  window.openChangePassModal = function() {
    const modal = $("admin-pass-modal");
    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeChangePassModal = function() {
    const modal = $("admin-pass-modal");
    if (modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
    const msg = $("pass-change-msg");
    if (msg) msg.style.display = "none";
    const form = $("admin-change-pass-form");
    if (form) form.reset();
  };

  window.saveAdminPassword = function(e) {
    if (e) e.preventDefault();
    const curr = $("curr-pass-input") ? $("curr-pass-input").value.trim() : "";
    const newPass = $("new-pass-input") ? $("new-pass-input").value.trim() : "";
    const conf = $("confirm-pass-input") ? $("confirm-pass-input").value.trim() : "";
    const msg = $("pass-change-msg");

    if (curr !== getAdminPassword()) {
      if (msg) {
        msg.textContent = "Current password is incorrect.";
        msg.style.display = "block";
      }
      return;
    }

    if (newPass.length < 4) {
      if (msg) {
        msg.textContent = "New password must be at least 4 characters.";
        msg.style.display = "block";
      }
      return;
    }

    if (newPass !== conf) {
      if (msg) {
        msg.textContent = "New passwords do not match.";
        msg.style.display = "block";
      }
      return;
    }

    try {
      localStorage.setItem(PASS_STORAGE_KEY, newPass);
      alert("Admin password updated successfully!");
      closeChangePassModal();
    } catch (err) {
      alert("Could not save password to browser storage.");
    }
  };

  window.exportQueriesToCSV = function() {
    const list = getQueriesFromStorage();
    if (!list || list.length === 0) {
      alert("No queries to export.");
      return;
    }

    const headers = ["Query ID", "Date", "Source", "Student Name", "Phone", "Email", "Course", "Country", "University", "City", "Branch", "Stage", "Current Position", "Requirements", "Remarks"];
    const rows = list.map(q => [
      `"${q.id}"`,
      `"${q.date}"`,
      `"${q.source || ''}"`,
      `"${q.name}"`,
      `"${q.phone}"`,
      `"${q.email || ''}"`,
      `"${q.course || ''}"`,
      `"${q.country || ''}"`,
      `"${(q.uni || '').replace(/"/g, '""')}"`,
      `"${q.city || ''}"`,
      `"${q.branch || ''}"`,
      `"${q.stage || ''}"`,
      `"${(q.currentPosition || '').replace(/"/g, '""')}"`,
      `"${(q.reqs || '').replace(/"/g, '""')}"`,
      `"${(q.remarks || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `PARK_Education_Queries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Initialize Entire Page
  function init() {
    renderNav();
    renderCourses();
    renderCountries();
    renderServices();
    renderBranches();
    initUniversities();
    initLeadModal();

    // Language toggle removed
    initMobileDrawer();
    initHeaderScroll();

    // Setup both form instances with university selects
    setupForm("apply-form", "apply-name", "apply-phone", "course-select", "neet-select", "country-select", "apply-uni-select", "branch-select", "apply-error");
    setupForm("home-enquiry-form", "home-name", "home-phone", "home-course-select", "home-neet-select", "home-country-select", "home-uni-select", "home-branch-select", "home-error");

    // Initialize Routing
    window.addEventListener("hashchange", handleRouting);
    handleRouting();
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
