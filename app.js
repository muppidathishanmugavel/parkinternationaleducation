      const nearestBranch = branchSelect ? branchSelect.value : "Tirunelveli Head Office";
      const messageText = 
      let messageText = 
        `Hello PARK International Education,\n` +
        `I would like to request admission guidance and written fee details.\n\n` +
        `• Student Name: ${studentName}\n` +
        `• Mobile: +91 ${cleanPhone}\n` +
        `• Course Interested: ${selectedCourse}\n` +
        `• NEET Qualification Status: ${neetStatus}\n` +
        `• Preferred Country/Location: ${preferredCountry}\n` +
        `• Preferred Country/Location: ${preferredCountry}\n`;
      if (preferredUni && preferredUni.trim() !== "") {
        messageText += `• Preferred University: ${preferredUni}\n`;
      }
      messageText += 
        `• Nearest Branch: ${nearestBranch}\n\n` +
        `Please call me back with the official fee structure and university options.`;
    renderCountries();
    renderServices();
    renderBranches();
    initUniversities();
    initLanguageToggle();
    initMobileDrawer();
    initHeaderScroll();
    // Setup both form instances
    setupForm("apply-form", "apply-name", "apply-phone", "course-select", "neet-select", "country-select", "branch-select", "apply-error");
    setupForm("home-enquiry-form", "home-name", "home-phone", "home-course-select", "home-neet-select", "home-country-select", "home-branch-select", "home-error");
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
