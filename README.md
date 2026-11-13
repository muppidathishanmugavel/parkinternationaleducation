# 🎓 PARK International Education (PARK Abroad)
### *Direct Path to Professional Success · Guiding Students Since 2008*

Official website and digital admissions portal for **PARK International Education**, Tamil Nadu's leading higher education and study-abroad consultancy with over **18+ years of excellence** in MBBS (India & Abroad), Engineering, Nursing, and professional degree admissions.

🌐 **Official Domain:** [https://www.parkabroad.com/](https://www.parkabroad.com/)  
🚀 **Live Vercel Mirror:** [https://parkinternationaleducation.vercel.app/](https://parkinternationaleducation.vercel.app/)

---

## 📌 Key Highlights

- **Established Excellence (Since 2008):** 18+ continuous years of student admission guidance and personalized career counselling.
- **Head Office in Tirunelveli:** Palayamkottai / Vannarpettai Junction, Tirunelveli (`+91 81100 87722`).
- **8 Active Regional Branch Offices:** Trichy (`+91 88077 44900`), Madurai, Chennai, Coimbatore, Nagercoil, Tenkasi, Ramanathapuram, and New Delhi.
- **Global MBBS Destinations:** Curated, NMC/WHO-compliant medical universities across **Uzbekistan, Philippines, Timor-Leste, Mongolia, Kyrgyzstan, Kazakhstan, Russia, Georgia, and Vietnam**.
- **Transparent Fee Guarantee:** 100% written fee structures with zero hidden charges.
- **Official Social Desks:** Direct WhatsApp counselling, Instagram feed (`@park.abroad`), Facebook, and YouTube channel.

---

## ⚡ Features & Modern UI Architecture

1. **Animated Dynamic Counters:** Hardware-accelerated count-up animations for key metrics (Years of Experience, Students Guided, Regional Branches, Fee Transparency).
2. **Flight Corridor Animation:** Interactive flight route visualizer showing direct escorted flights from India (DEL/MAA/TRZ) to international medical capitals (Tashkent, Manila, Dili, etc.).
3. **Smooth Scroll Reveals:** Sleek sliding card reveals and micro-interactions optimized for 60fps performance.
4. **Country & University Filter Tabs:** Fast client-side filtering with crisp national flag vectors and side-by-side fee comparison matrices.
5. **SEO & Search Indexing Ready:**
   - Full [`robots.txt`](./robots.txt) allowing Googlebot and image crawlers.
   - Standard [`sitemap.xml`](./sitemap.xml) listing all pages and priority levels.
   - Comprehensive Open Graph, Twitter Cards, and **Schema.org JSON-LD** structured data (`EducationalOrganization` + `WebSite`) for Google Rich Snippets.
6. **Smart Asset Fallback Engine:** Automatic 3-stage resolver ensuring images render seamlessly across GitHub and Vercel environments.
7. **Lead Capture & Consultation Popup:** Intelligent 6.5-second admission modal triggered across pages (automatically suppressed on the `#apply` page).

---

## 📁 Repository Structure

```text
├── assets/                       # High-resolution brand assets & photography
│   ├── logo.png                  # Official PARK brand crest and logo
│   ├── students-parents.jpg      # Hero guidance banner photo
│   ├── clinical-training.jpg     # Medical clinical hospital training photo
│   ├── whatsapp-qr.png           # WhatsApp Business QR connect code
│   └── instagram-qr.png          # Instagram (@park.abroad) QR connect code
├── css/
│   └── styles.css                # Production stylesheet with animations, flexbox & CSS variables
├── js/
│   └── app.js                    # SPA hash routing, counter observer, search & filter engine
├── index.html                    # Main web application entry point
├── index-standalone.html         # Self-contained all-in-one bundled build (CSS + JS inlined)
├── robots.txt                    # Googlebot & search crawler permissions
├── sitemap.xml                   # XML Sitemap for Google Search Console
└── README.md                     # Project documentation
```

---

## 🚀 How to Run Locally

Because the project is built with clean semantic HTML5, CSS3, and modern vanilla JavaScript, **no node modules, build steps, or compilers are required**.

1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Double-click `index.html` (or `index-standalone.html`) to open it directly in any modern browser (Chrome, Edge, Safari, Firefox).
3. Alternatively, serve with any local HTTP server:
   ```bash
   npx serve .
   # or with python:
   python -m http.server 8000
   ```

---

## 📤 How to Push the Entire Folder to GitHub

### Option A: Using Git Command Line (Recommended)

1. Open PowerShell or Terminal inside this project folder:
   ```bash
   # Initialize repository (if not already done)
   git init

   # Stage all files (HTML, CSS, JS, Assets, robots.txt, sitemap.xml, README)
   git add .

   # Commit changes
   git commit -m "Complete PARK International Education platform with animations, SEO & sitemap"

   # Set main branch
   git branch -M main

   # Link your GitHub repository (replace with your repo URL)
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git

   # Push all files to GitHub
   git push -u origin main --force
   ```

### Option B: Using GitHub Web Interface

1. Open your repository on [GitHub.com](https://github.com/).
2. Click **Add file** ➔ **Upload files**.
3. Drag and drop all project files and folders (`assets/`, `css/`, `js/`, `index.html`, `robots.txt`, `sitemap.xml`, `README.md`).
4. Type a commit message (e.g. `Update website files`) and click **Commit changes**.

---

## 🌐 Deploy to Vercel

When your GitHub repository is connected to Vercel:
1. Every `git push` automatically triggers a zero-config production deployment in ~15 seconds.
2. In the Vercel Project Settings ➔ **Domains**, ensure `www.parkabroad.com` and `parkabroad.com` are assigned as production domains.

---

## 📞 Admissions & Contact Information

* **Tirunelveli Head Office:** Palayamkottai / Vannarpettai Junction, Tirunelveli – 627002  
  **Phone:** +91 81100 87722 / +91 88077 44900
* **Trichy Branch Office:** Thillai Nagar Main Road, Tiruchirappalli – 620018  
  **Phone:** +91 88077 44900 / +91 81100 87722
* **Email:** [admissions@parkabroad.com](mailto:admissions@parkabroad.com)
* **Website:** [https://www.parkabroad.com/](https://www.parkabroad.com/)

© 2008–2026 **PARK International Education**. All Rights Reserved.
