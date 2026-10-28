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
    TimorLeste: `<svg viewBox="0 0 60 40" class="country-flag-svg" role="img" aria-label="Flag of Timor-Leste"><rect width="60" height="40" fill="#dc241f"/><path d="M0 0L30 20L0 40Z" fill="#ffc726"/><path d="M0 0L20 20L0 40Z" fill="#000"/><polygon points="7,15 8.2,18.8 12,18.8 9,21 10.1,24.8 7,22.5 3.9,24.8 5,21 2,18.8 5.8,18.8" fill="#fff"/></svg>`
  };

  // 1. Pages for Navigation
  const PAGES = [
    { id: "home", en: "Home", ta: "முகப்பு" },
    { id: "courses", en: "Courses", ta: "படிப்புகள்" },
    { id: "services", en: "Services", ta: "சேவைகள்" },
    { id: "countries", en: "Countries", ta: "நாடுகள்" },
    { id: "process", en: "Admission", ta: "சேர்க்கை" },
    { id: "branches", en: "Branches", ta: "கிளைகள்" },
    { id: "apply", en: "Apply", ta: "விண்ணப்பம்" }
  ];

  // 2. The 10 Official Course Categories
  const COURSES = [
    {
      icon: ICONS.stethoscope,
      titleEn: "Medicine (MBBS)",
      titleTa: "மருத்துவம் (MBBS)",
      descEn: "Undergraduate medical degrees (MBBS/MD) in top government and recognized international universities meeting NMC criteria.",
      descTa: "NMC விதிமுறைகளுக்கு உட்பட்ட சிறந்த அரசு மற்றும் சர்வதேச மருத்துவப் பல்கலைக்கழகங்களில் MBBS பட்டப்படிப்புகள்.",
      duration: "5.5 to 6 Years (incl. internship)"
    },
    {
      icon: ICONS.engineering,
      titleEn: "Engineering",
      titleTa: "பொறியியல் (B.E / B.Tech)",
      descEn: "B.E. and B.Tech degree programs across premier engineering institutes with specialization guidance.",
      descTa: "சிறந்த பொறியியல் கல்லூரிகளில் கம்ப்யூட்டர், மெக்கானிக்கல், சிவில் உள்ளிட்ட பி.இ / பி.டெக் படிப்புகள்.",
      duration: "4 Years"
    },
    {
      icon: ICONS.nursing,
      titleEn: "Nursing",
      titleTa: "செவிலியர் படிப்பு (Nursing)",
      descEn: "B.Sc Nursing, Post Basic B.Sc, and GNM programs with hospital clinical exposure and global placement opportunities.",
      descTa: "மருத்துவமனை நேரடிப் பயிற்சியுடன் கூடிய B.Sc நர்சிங் மற்றும் GNM பட்டயப் படிப்புகள்.",
      duration: "3 to 4 Years"
    },
    {
      icon: ICONS.law,
      titleEn: "Law (LL.B / Integrated)",
      titleTa: "சட்டப் படிப்பு (Law)",
      descEn: "Bar Council of India approved 3-year LL.B and 5-year integrated B.A./BBA LL.B degree programs.",
      descTa: "பார் கவுன்சில் அங்கீகாரம் பெற்ற 3 ஆண்டு எல்.எல்.பி மற்றும் 5 ஆண்டு ஒருங்கிணைந்த சட்டப் படிப்புகள்.",
      duration: "3 or 5 Years"
    },
    {
      icon: ICONS.paramedical,
      titleEn: "Paramedical Sciences",
      titleTa: "பாராமெடிக்கல் படிப்புகள்",
      descEn: "Essential clinical programs including Dialysis Technology, OT & Anaesthesia, Medical Radiography, and Emergency Care.",
      descTa: "டயாலிசிஸ், அறுவை சிகிச்சை அரங்கு, எக்ஸ்-ரே உள்ளிட்ட உடனடி வேலைவாய்ப்பு கொண்ட மருத்துவத் தொழில்நுட்பப் படிப்புகள்.",
      duration: "2 to 4 Years"
    },
    {
      icon: ICONS.alliedHealth,
      titleEn: "Allied Health Science",
      titleTa: "அலைடு ஹெல்த் சயின்ஸ்",
      descEn: "Advanced health-science degrees like Medical Laboratory Technology, Cardiac Care, and Physician Assistant programs.",
      descTa: "மருத்துவ ஆய்வகத் தொழில்நுட்பம், இருதயப் பராமரிப்பு உள்ளிட்ட உயர் மருத்துவ அறிவியல் பட்டப்படிப்புகள்.",
      duration: "3 to 4 Years"
    },
    {
      icon: ICONS.pharmacy,
      titleEn: "Pharmacy",
      titleTa: "பார்மசி (D.Pharm / B.Pharm)",
      descEn: "PCI-approved D.Pharm, B.Pharm, and Pharm.D programs providing career pathways in clinical and industrial pharmacy.",
      descTa: "மருந்து உற்பத்தி மற்றும் மருத்துவமனை ஆராய்ச்சிப் பணிகளுக்கான டி.பார்ம், பி.பார்ம் படிப்புகள்.",
      duration: "2, 4 or 6 Years"
    },
    {
      icon: ICONS.aviation,
      titleEn: "Aviation & Aerospace",
      titleTa: "ஏவியேஷன் படிப்புகள்",
      descEn: "Commercial pilot license guidance, B.Sc Aviation, Aircraft Maintenance Engineering, and airport management.",
      descTa: "விமானி பயிற்சி, ஏர்-கிராப்ட் பராமரிப்பு மற்றும் விமான நிலைய மேலாண்மை தொடர்பான சிறப்புப் படிப்புகள்.",
      duration: "Varies by Programme"
    },
    {
      icon: ICONS.artsScience,
      titleEn: "Arts & Science",
      titleTa: "கலை மற்றும் அறிவியல்",
      descEn: "Undergraduate collegiate programs in Commerce (B.Com), Computer Applications (BCA), BBA, and pure sciences.",
      descTa: "பி.காம், பிசிஏ, பிபிஏ, பி.எஸ்சி உள்ளிட்ட முன்னணி கலை மற்றும் அறிவியல் பட்டப்படிப்புகள்.",
      duration: "3 Years"
    },
    {
      icon: ICONS.bpt,
      titleEn: "BPT (Physiotherapy)",
      titleTa: "பிசியோதெரபி (BPT)",
      descEn: "Bachelor of Physiotherapy with rigorous clinical training in physical rehabilitation, orthopedics, and sports medicine.",
      descTa: "உடல் மறுவாழ்வு மற்றும் எலும்பியல் சிகிச்சைக்கான 4.5 ஆண்டு இளங்கலை பிசியோதெரபி படிப்பு.",
      duration: "4.5 Years (incl. 6-mo internship)"
    }
  ];

  // 3. MBBS Study Destinations (8 Countries)
  const COUNTRIES = [
    {
      key: "Uzbekistan",
      flag: FLAGS.Uzbekistan,
      nameEn: "Uzbekistan",
      nameTa: "உஸ்பெகிஸ்தான்",
      descEn: "Rapidly growing MBBS destination offering 5+1 year programs, modern medical campuses, high clinical exposure, and direct flight connectivity from India.",
      descTa: "இந்தியாவில் இருந்து நேரடி விமான வசதி, நவீன ஆய்வகங்கள் மற்றும் சிறந்த அரசு மருத்துவமனைகளைக் கொண்ட 5+1 ஆண்டு மருத்துவப் படிப்பு."
    },
    {
      key: "Philippines",
      flag: FLAGS.Philippines,
      nameEn: "Philippines",
      nameTa: "பிலிப்பைன்ஸ்",
      descEn: "Known for English-medium instruction, US-aligned curriculum, high FMGE success track record, and extensive tropical disease clinical exposure.",
      descTa: "முழு ஆங்கில வழி கல்வி, அமெரிக்க பாடத்திட்டம் மற்றும் இந்திய மருத்துவ கவுன்சில் தேர்வுகளில் சிறந்த வெற்றி விகிதம் கொண்ட நாடு."
    },
    {
      key: "Kazakhstan",
      flag: FLAGS.Kazakhstan,
      nameEn: "Kazakhstan",
      nameTa: "கஜகஸ்தான்",
      descEn: "Established national and state universities offering 5-year MBBS programs, globally recognized degrees, and welcoming Indian student communities.",
      descTa: "மலிவான கல்விக் கட்டணம், 5 வருட பாடத்திட்டம் மற்றும் ஆயிரக்கணக்கான இந்திய மாணவர்கள் பயிலும் மத்திய ஆசிய நாடு."
    },
    {
      key: "Kyrgyzstan",
      flag: FLAGS.Kyrgyzstan,
      nameEn: "Kyrgyzstan",
      nameTa: "கிர்கிஸ்தான்",
      descEn: "One of the most budget-friendly international MBBS destinations with affordable tuition, comfortable hostels, and Indian mess facilities.",
      descTa: "குறைந்த கட்டணத்தில் உயர்தர மருத்துவக் கல்வி, சிறந்த விடுதி மற்றும் இந்திய உணவு வசதி கொண்ட முன்னணி நாடு."
    },
    {
      key: "Vietnam",
      flag: FLAGS.Vietnam,
      nameEn: "Vietnam",
      nameTa: "வியட்நாம்",
      descEn: "Emerging Southeast Asian medical education destination featuring English-taught medical programs, welcoming culture, and modern hospital infrastructure.",
      descTa: "தென்கிழக்கு ஆசியாவில் அதிவேகமாக வளர்ந்து வரும் ஆங்கில வழி மருத்துவக் கல்வி மற்றும் உயர் மருத்துவமனை வசதிகள்."
    },
    {
      key: "Russia",
      flag: FLAGS.Russia,
      nameEn: "Russia",
      nameTa: "ரஷ்யா",
      descEn: "Century-old government medical academies listed with WHO and WDOMS, offering comprehensive European medical training with subsidised fee structures.",
      descTa: "நூற்றாண்டு பாரம்பரியம் கொண்ட அரசு மருத்துவப் பல்கலைக்கழகங்கள் மற்றும் உலக சுகாதார நிறுவனத்தால் அங்கீகரிக்கப்பட்ட பட்டங்கள்."
    },
    {
      key: "Georgia",
      flag: FLAGS.Georgia,
      nameEn: "Georgia",
      nameTa: "ஜார்ஜியா",
      descEn: "European-standard clinical education following ECTS credit guidelines, safe university towns, and excellent preparation for international licensing exams.",
      descTa: "ஐரோப்பிய மருத்துவத் தரம், பாதுகாப்பான கல்விச் சூழல் மற்றும் உலகளாவிய மருத்துவர் தகுதித் தேர்வுகளுக்கான வழிகாட்டுதல்."
    },
    {
      key: "TimorLeste",
      flag: FLAGS.TimorLeste,
      nameEn: "Timor-Leste",
      nameTa: "திமோர்-லெஸ்தே",
      descEn: "Emerging tropical island medical destination with focused classroom ratios, dedicated clinical faculty, and NMC-compliant curriculum options.",
      descTa: "சிறிய வகுப்பறை விகிதம் மற்றும் அர்ப்பணிப்புடன் கூடிய மருத்துவ ஆசிரியர்களைக் கொண்ட வளரும் சர்வதேச மருத்துவ வாய்ப்பு."
    }
  ];

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
  const BRANCHES = [
    {
      city: "Tirunelveli",
      type: "Head Office",
      isHead: true,
      address: "No. 6/1, Pioneer Kumarasamy Nagar, Vasanth Nagar, Near RHOCK Hospital, Opp. New Bus Stand, Tirunelveli – 627007.",
      contact: "📞 81100 87722 / 88077 44900"
    },
    {
      city: "Madurai",
      type: "Branch Office",
      isHead: false,
      address: "No. 64, Press Colony, RTO Office Road, Opp. Mattuthavani Bus Stand, Madurai – 625007.",
      contact: "📞 81100 87722 / 88077 44900"
    },
    {
      city: "Ramanathapuram",
      type: "Branch Office",
      isHead: false,
      address: "Direct Admissions Desk, Ramanathapuram Main Center.",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Trichy",
      type: "Branch Office",
      isHead: false,
      address: "Central Admissions Desk, Opp. Central Bus Stand Area, Trichy.",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Karur",
      type: "Branch Office",
      isHead: false,
      address: "Direct Admissions Desk, Karur City Office.",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Salem",
      type: "Branch Office",
      isHead: false,
      address: "Regional Admissions Office, Near New Bus Stand, Salem.",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "Chennai",
      type: "Branch Office",
      isHead: false,
      address: "Metropolitan Admissions Desk, Chennai Regional Office.",
      contact: "Call 81100 87722 for consultation & visiting hours."
    },
    {
      city: "New Delhi",
      type: "Northern Regional Desk",
      isHead: false,
      address: "International Admissions Desk, New Delhi.",
      contact: "Call 81100 87722 for consultation & visiting hours."
    }
  ];

  // Render Navigation Links
  function renderNav() {
    const navDesktop = $("main-nav");
    const navMobile = $("mobile-nav-links");
    if (!navDesktop) return;

    const html = PAGES.map(p => `
      <a href="#${p.id}" class="nav-link" data-page="${p.id}">
        <span class="en">${p.en}</span>
        <span class="ta">${p.ta}</span>
      </a>
    `).join("");

    navDesktop.innerHTML = html;
    if (navMobile) {
      navMobile.innerHTML = html;
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
        <h3 class="course-title">
          <span class="en">${c.titleEn}</span>
          <span class="ta">${c.titleTa}</span>
        </h3>
        <p class="course-desc">
          <span class="en">${c.descEn}</span>
          <span class="ta">${c.descTa}</span>
        </p>
        <div class="course-meta">
          <span class="duration-tag">${ICONS.clock} ${c.duration}</span>
        </div>
        <a href="#apply" class="card-action-link" onclick="selectCourse('${c.titleEn}')">
          <span class="en">Get Admission Details</span>
          <span class="ta">சேர்க்கை விபரம்</span>
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

    const cardsHtml = COUNTRIES.map(c => `
      <div class="card country-card">
        <div class="country-flag-header">
          ${c.flag}
          <div class="country-name-wrap">
            <h3 class="country-title">MBBS in ${c.nameEn}</h3>
            <span class="country-tag">NMC Compliant Curriculum</span>
          </div>
        </div>
        <div class="country-body">
          <p class="country-desc">
            <span class="en">${c.descEn}</span>
            <span class="ta">${c.descTa}</span>
          </p>
          <a href="#apply" class="card-action-link" onclick="selectCountry('${c.nameEn}')">
            <span class="en">Request Written Fee Sheet</span>
            <span class="ta">கட்டண விபரம் பெற</span>
            ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    `).join("");

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
        <h3 class="service-title">
          <span class="en">${s.titleEn}</span>
          <span class="ta">${s.titleTa}</span>
        </h3>
        <p class="service-desc">
          <span class="en">${s.descEn}</span>
          <span class="ta">${s.descTa}</span>
        </p>
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
    const validViews = ["home", "courses", "services", "countries", "process", "branches", "apply"];
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

    // Trigger number counter if entering home view
    if (hash === "home") {
      animateCounters();
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

  // Language Toggle
  function initLanguageToggle() {
    const btn = $("lang-btn");
    if (!btn) return;

    // Check saved preference
    const saved = localStorage.getItem("park_lang") || "en";
    if (saved === "ta") {
      document.body.classList.add("tm");
      btn.textContent = "English";
      document.documentElement.lang = "ta";
    } else {
      document.body.classList.remove("tm");
      btn.textContent = "தமிழ்";
      document.documentElement.lang = "en";
    }

    btn.addEventListener("click", () => {
      const isTamil = document.body.classList.toggle("tm");
      btn.textContent = isTamil ? "English" : "தமிழ்";
      document.documentElement.lang = isTamil ? "ta" : "en";
      localStorage.setItem("park_lang", isTamil ? "ta" : "en");
    });
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

  // Form Validation & WhatsApp Callback Dispatch
  function setupForm(formId, nameId, phoneId, courseId, neetId, countryId, branchId, errorId) {
    const form = $(formId);
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = $(nameId);
      const phoneInput = $(phoneId);
      const courseSelect = $(courseId);
      const neetSelect = $(neetId);
      const countrySelect = $(countryId);
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
      const nearestBranch = branchSelect ? branchSelect.value : "Tirunelveli Head Office";

      const messageText = 
        `Hello PARK International Education,\n` +
        `I would like to request admission guidance and written fee details.\n\n` +
        `• Student Name: ${studentName}\n` +
        `• Mobile: +91 ${cleanPhone}\n` +
        `• Course Interested: ${selectedCourse}\n` +
        `• NEET Qualification Status: ${neetStatus}\n` +
        `• Preferred Country/Location: ${preferredCountry}\n` +
        `• Nearest Branch: ${nearestBranch}\n\n` +
        `Please call me back with the official fee structure and university options.`;

      const whatsappUrl = `https://wa.me/918807744900?text=${encodeURIComponent(messageText)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  // Initialize Entire Page
  function init() {
    renderNav();
    renderCourses();
    renderCountries();
    renderServices();
    renderBranches();

    initLanguageToggle();
    initMobileDrawer();
    initHeaderScroll();

    // Setup both form instances
    setupForm("apply-form", "apply-name", "apply-phone", "course-select", "neet-select", "country-select", "branch-select", "apply-error");
    setupForm("home-enquiry-form", "home-name", "home-phone", "home-course-select", "home-neet-select", "home-country-select", "home-branch-select", "home-error");

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
