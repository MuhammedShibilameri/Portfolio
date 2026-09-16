/**
 * Muhammed Shibil A - Portfolio Interactions & Features
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Theme Toggle (Dark / Light Mode)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('i');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('shibil_theme') || 'dark';
  setTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('shibil_theme', theme);
    if (theme === 'light') {
      themeIcon.className = 'fa-solid fa-sun';
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeIcon.className = 'fa-solid fa-moon';
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    }
  }

  // ==========================================
  // 2. Mobile Hamburger Menu
  // ==========================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
  });

  // Close mobile menu when any navigation link is clicked
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('mobile-open');
    });
  });

  // Close mobile menu on click outside
  document.addEventListener('click', (e) => {
    if (!hamburgerBtn.contains(e.target) && !navLinks.contains(e.target)) {
      hamburgerBtn.classList.remove('active');
      navLinks.classList.remove('mobile-open');
    }
  });

  // ==========================================
  // 3. Scroll Spy & Active Nav Link Highlight
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });

  // ==========================================
  // 4. Project Category Filtering
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 5. Project Details Deep-Dive Data & Modal
  // ==========================================
  const projectDetails = {
    dripstore: {
      title: "DripStore – E-Commerce Clothing App",
      category: "E-Commerce / Fashion Mobile Application",
      tech: ["Flutter SDK", "Dart", "Provider State Management", "REST APIs", "JSON Serialization", "Material 3"],
      github: "https://github.com/MuhammedShibilameri/dripstore-clothes-",
      overview: "DripStore is a full-featured apparel and fashion e-commerce mobile application designed to deliver an engaging, fluid, and responsive shopping experience.",
      highlights: [
        "Dynamic Product Discovery: Explore curated clothing collections with responsive grid layouts, category carousels, and high-resolution multi-angle image views.",
        "Interactive Filtering & Search: Multi-criteria filtering supporting clothing size, color swatches, price range, brand tags, and keywords.",
        "Reactive Shopping Cart & Wishlist: Built using Provider to ensure reactive real-time subtotal recalculations, quantity adjustment, coupon discounts, and instant UI state updates.",
        "Checkout & Order Summary Flow: Address management, delivery estimation, shipping selection, and simulated payment confirmation.",
        "Smooth 60fps UX: Optimized image loading, lazy lists, and zero UI stutters on device rotations."
      ]
    },
    blooddonation: {
      title: "Real-Time Blood Donation Application",
      category: "Healthcare & Community Network",
      tech: ["Flutter SDK", "Dart", "Firebase Authentication", "Cloud Firestore", "Firebase Storage", "Push Notifications"],
      github: "https://github.com/MuhammedShibilameri",
      overview: "A community healthcare mobile solution connecting blood donors with recipients and hospitals in real-time across regional zones.",
      highlights: [
        "Secure User Onboarding: Integrated Firebase Authentication for quick mobile number verification and email credentials.",
        "Real-Time Snapshot Listeners: Powered by Cloud Firestore to broadcast urgent blood requirements to matching blood groups in milliseconds without page refreshes.",
        "Donor Profiles & Media Upload: Firebase Storage for donor identity verification and medical clearance documents.",
        "Geolocation & Regional Filtering: Filter active donors by blood type (A+, B+, O+, AB+, etc.) and regional proximity.",
        "Emergency Broadcast Alert: Urgent SOS button that flags instant notifications across all registered donors in the vicinity."
      ]
    },
    expensetracker: {
      title: "Personal Expense Tracker App",
      category: "Finance & Offline Utility",
      tech: ["Flutter SDK", "Dart", "Hive Database (NoSQL)", "Provider", "Fl_Chart", "Shared Preferences"],
      github: "https://github.com/MuhammedShibilameri/expense-tracker-",
      overview: "An offline-first personal finance tracker engineered for ultra-fast, zero-latency transaction logging and visual spending analytics.",
      highlights: [
        "Offline-First Architecture: Utilizes Hive NoSQL local embedded database, allowing users to log transactions completely offline with lightning speed.",
        "Interactive Spending Analytics: Visual charts breaking down expenses by category (Food, Travel, Bills, Entertainment, etc.) and month-over-month trends.",
        "Custom Transaction Management: Add, edit, filter, and delete income and expense records with customizable tags and date ranges.",
        "Budget Limit Alerts: Visual indicators when spending approaches user-defined category thresholds.",
        "Data Backup & Export: Lightweight export utilities to safeguard financial records."
      ]
    },
    nykaa: {
      title: "Nykaa E-Commerce UI Clone",
      category: "UI/UX Engineering & Design Replication",
      tech: ["Flutter SDK", "Dart", "Responsive Design", "Custom Widgets", "Figma Translation"],
      github: "https://github.com/MuhammedShibilameri/nykaa",
      overview: "A pixel-perfect mobile shopping interface inspired by Nykaa's beauty and lifestyle platform, highlighting advanced UI/UX layout engineering in Flutter.",
      highlights: [
        "Pixel-Perfect UI Replication: Faithfully implemented Nykaa's iconic design language, typography, color palette, and micro-interactions.",
        "Custom Widget Architecture: Modular, highly reusable component library including promotional banners, brand spotlight cards, and flash sale countdowns.",
        "Responsive Across Form Factors: Fluid UI adaptation across small Android phones, large iPhones, and tablets.",
        "Multi-Tier Navigation: Smooth tab bars, nested navigation stacks, and custom drawer menus."
      ]
    },
    kervia: {
      title: "Kervia Mobile Solution",
      category: "Cross-Platform Mobile Application",
      tech: ["Flutter SDK", "Dart", "Material Design 3", "Clean Architecture", "REST Client"],
      github: "https://github.com/MuhammedShibilameri",
      overview: "Scalable cross-platform mobile application built with modular architectural separation and cross-device performance in mind.",
      highlights: [
        "Clean Architecture: Separated Presentation, Domain, and Data layers ensuring testability and easy future extensions.",
        "Responsive Multi-Platform Support: Seamless performance across iOS, Android, and Desktop builds.",
        "Asynchronous Data Flow: Efficient error handling, loading states, and network failover logic.",
        "Material 3 Design System: Dynamic theming, custom color schemes, and fluid motion."
      ]
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBody = document.getElementById('modal-project-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetails[projKey];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <div style="margin-bottom: 1.2rem;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 1px;">${data.category}</span>
          <p style="font-size: 1.05rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.7;">${data.overview}</p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.6rem;">Key Engineering Highlights:</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${data.highlights.map(h => `<li style="font-size: 0.92rem; color: var(--text-secondary); padding-left: 1.2rem; position: relative;"><span style="position: absolute; left: 0; color: var(--accent-cyan); font-weight: bold;">▹</span>${h}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-bottom: 1.8rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Technologies & Tools Used:</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
            ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.2rem;">
          <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i class="fa-brands fa-github"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      `;

      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalCloseBtn.addEventListener('click', () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ==========================================
  // 6. Resume Modal & Triggers
  // ==========================================
  const resumeModal = document.getElementById('resume-modal');
  const resumeCloseBtn = document.getElementById('resume-modal-close-btn');
  const resumeTriggers = [
    document.getElementById('btn-open-resume-nav'),
    document.getElementById('btn-hero-resume'),
    document.getElementById('btn-preview-resume')
  ];

  resumeTriggers.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  resumeCloseBtn.addEventListener('click', () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ESC key to close all open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      projectModal.classList.remove('active');
      resumeModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ==========================================
  // 7. Contact Form Handling
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Show user feedback
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 0.25rem;">
          <i class="fa-solid fa-circle-check"></i> Thank you, ${name}!
        </div>
        <div>Your message has been captured. Opening your email client to send to <strong>mhdshibil9562@gmail.com</strong>...</div>
      `;

      // Open email client with pre-filled details
      const mailtoUrl = `mailto:mhdshibil9562@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 900);

      contactForm.reset();
    });
  }
});
