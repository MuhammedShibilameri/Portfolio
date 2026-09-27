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
      apkLink: "dripstore-app.apk",
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
      title: "KERVIA – Job Marketplace Application",
      category: "Job Marketplace & Professional Recruiting App",
      tech: ["Flutter SDK", "Dart", "BLoC State Management", "Clean Architecture", "Firebase Auth", "Cloud Firestore", "Cloud Storage", "Firestore Security Rules"],
      github: "https://github.com/MuhammedShibilameri",
      apkLink: "kervia-app.apk",
      hasArchDiagram: true,
      overview: "A comprehensive cross-platform job marketplace application developed using Flutter and Dart, engineered with Clean Architecture and BLoC with dedicated, role-based workflows for Job Seekers and Companies.",
      highlights: [
        "Clean Architecture: Engineered with strict Domain, Data, and Presentation layer separation for maintainable, testable, and enterprise-grade scalability.",
        "BLoC State Management: Implemented predictable state management with clear separation between UI, business logic, use cases, repositories, and data sources.",
        "Role-Based User Flows: Distinct application experiences, navigation trees, and feature sets tailored for Job Seekers vs. Hiring Companies.",
        "Firebase Authentication: Secure onboarding with phone OTP verification and Google Sign-In.",
        "Cloud Firestore & Real-Time Streams: Managed users, companies, job postings, applications, conversations, and live instant messaging via real-time snapshot streams.",
        "Cloud Storage Integration: Full profile management and secure resume document uploads.",
        "Granular Security Rules: Role-based authorization allowing Companies to initiate candidate conversations while Job Seekers reply.",
        "Application Tracking: Comprehensive job application tracking and status lifecycle management throughout the hiring workflow."
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

      let archDiagramHtml = '';
      if (data.hasArchDiagram) {
        archDiagramHtml = `
          <div class="arch-diagram-container">
            <h4 style="font-size: 1rem; font-weight: 700; color: #38bdf8; margin-bottom: 0.8rem;">
              <i class="fa-solid fa-sitemap"></i> Enterprise Clean Architecture Breakdown:
            </h4>

            <!-- Presentation Layer -->
            <div class="arch-layer-box presentation">
              <div class="arch-layer-header">
                <span class="arch-layer-title"><i class="fa-solid fa-mobile-screen"></i> 1. Presentation Layer</span>
                <span class="arch-layer-badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8;">Flutter UI & BLoC</span>
              </div>
              <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 0.4rem;">
                • Reusable Atomic Widgets & Responsive Screens (Seeker Feed, Company Portal).<br>
                • <strong>BLoC State Machine:</strong> Maps user interactions (<code>JobApplyEvent</code>, <code>FilterJobsEvent</code>) to reactive UI states (<code>JobsLoaded</code>, <code>ApplicationSubmitted</code>).
              </p>
            </div>

            <div class="arch-arrow">▼ Calls Use Cases & Listens to State Streams</div>

            <!-- Domain Layer -->
            <div class="arch-layer-box domain">
              <div class="arch-layer-header">
                <span class="arch-layer-title"><i class="fa-solid fa-brain"></i> 2. Domain Layer (Core Business Rules)</span>
                <span class="arch-layer-badge" style="background: rgba(129, 140, 248, 0.2); color: #818cf8;">Pure Dart (Zero Dependencies)</span>
              </div>
              <p style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 0.4rem;">
                • <strong>Use Cases:</strong> <code>ApplyToJobUseCase</code>, <code>GetJobStreamUseCase</code>, <code>UploadResumeUseCase</code>.<br>
                • <strong>Entities:</strong> Immutable pure Dart models (<code>JobEntity</code>, <code>UserProfileEntity</code>).<br>
                • <strong>Abstract Repository Contracts:</strong> Defines data access boundaries without knowing underlying databases.
              </p>
            </div>

            <div class="arch-arrow">▼ Implemented by Data Layer</div>

            <!-- Data Layer -->
            <div class="arch-layer-box data">
              <div class="arch-layer-header">
                <span class="arch-layer-title"><i class="fa-solid fa-server"></i> 3. Data Layer (Data Sources & APIs)</span>
                <span class="arch-layer-badge" style="background: rgba(52, 211, 153, 0.2); color: #34d399;">Cloud & Local Storage</span>
              </div>
              <p style="font-size: 0.85rem; color: #cbd5e1;">
                • <strong>Repository Implementations:</strong> <code>JobRepositoryImpl</code>, <code>AuthRepositoryImpl</code>.<br>
                • <strong>Remote Data Sources:</strong> Cloud Firestore Snapshot Listeners, Firebase Auth, Firebase Storage SDK.<br>
                • <strong>Local Data Sources:</strong> Hive NoSQL Box for offline caching and active session persistence.
              </p>
            </div>

            <!-- Security Rules Deep Dive -->
            <div style="margin-top: 1.2rem;">
              <h5 style="font-size: 0.88rem; font-weight: 700; color: #f59e0b; margin-bottom: 0.3rem;">
                <i class="fa-solid fa-shield-halved"></i> Role-Based Firestore Security Rules:
              </h5>
              <div class="code-snippet-box">
match /conversations/{conversationId} {
  // Only verified Companies can initiate recruitment conversations
  allow create: if request.auth != null && request.auth.token.role == 'company';
  
  // Job Seekers can read and reply to their active conversations
  allow read, update: if request.auth != null && 
    (request.auth.uid == resource.data.seekerId || request.auth.uid == resource.data.companyId);
}</div>
            </div>
          </div>
        `;
      }

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.2rem;">
          <span style="font-size: 0.85rem; font-weight: 600; color: var(--accent-cyan); text-transform: uppercase; letter-spacing: 1px;">${data.category}</span>
          <p style="font-size: 1.05rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.7;">${data.overview}</p>
        </div>

        ${archDiagramHtml}

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

        <div style="display: flex; align-items: center; justify-content: flex-end; flex-wrap: wrap; gap: 0.8rem; border-top: 1px solid var(--border-color); padding-top: 1.2rem;">
          ${data.apkLink ? `
            <a href="${data.apkLink}" download="${data.apkLink}" class="btn btn-secondary btn-sm" style="color: #10b981; border-color: rgba(16,185,129,0.4);">
              <i class="fa-brands fa-android"></i>
              <span>Download APK</span>
            </a>
          ` : ''}
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
  // 7. Direct Email Contact Form (Formsubmit.co)
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim() || `Inquiry from ${name}`;
      const message = document.getElementById('message').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Show sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending Message...</span>`;
      }

      formFeedback.style.display = 'block';
      formFeedback.className = 'form-feedback';
      formFeedback.innerHTML = `<i class="fa-solid fa-paper-plane fa-fade"></i> Delivering your message to Muhammed Shibil's inbox...`;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch("https://formsubmit.co/ajax/c94b95ed06fc600397a20234eb0a992e", {
          method: "POST",
          headers: { 
            'Accept': 'application/json'
          },
          body: formData
        });

        const result = await response.json();

        if (response.ok || result.success) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <div style="font-weight: 700; margin-bottom: 0.35rem; color: #10b981;">
              <i class="fa-solid fa-circle-check"></i> Message Sent Successfully!
            </div>
            <div style="font-size: 0.9rem; color: var(--text-secondary);">
              Thank you, <strong>${name}</strong>! Your inquiry was delivered directly to <strong>mhdshibil9562@gmail.com</strong>. I will get back to you shortly.
            </div>
          `;
          contactForm.reset();
          triggerConfetti();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        // Graceful fallback to mailto if network or adblocker blocks AJAX
        formFeedback.className = 'form-feedback';
        formFeedback.innerHTML = `
          <div style="margin-bottom: 0.4rem; color: var(--accent-cyan); font-weight: 600;">
            <i class="fa-solid fa-envelope-open-text"></i> Opening your email client to send directly...
          </div>
          <div style="font-size: 0.88rem; color: var(--text-secondary);">
            If it does not open automatically, <a href="mailto:mhdshibil9562@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" style="color: var(--accent-cyan); text-decoration: underline;">click here to email mhdshibil9562@gmail.com</a>.
          </div>
        `;
        const mailtoUrl = `mailto:mhdshibil9562@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 1000);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>Send Message</span>`;
        }
      }
    });
  }

  // ==========================================
  // 8. High-Energy Canvas Confetti Engine
  // ==========================================
  const confettiCanvas = document.getElementById('confetti-canvas');
  let confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
  let particles = [];
  let confettiAnimId = null;

  function resizeConfetti() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeConfetti);
  resizeConfetti();

  function triggerConfetti(originX, originY) {
    if (!confettiCanvas || !confettiCtx) return;
    const colors = ['#0284c7', '#38bdf8', '#4f46e5', '#818cf8', '#10b981', '#f59e0b', '#ec4899'];
    const count = 75;
    const x = originX || window.innerWidth / 2;
    const y = originY || window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 18,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.012
      });
    }

    if (!confettiAnimId) {
      renderConfetti();
    }
  }

  function renderConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.rotation += p.rSpeed;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = p.alpha;
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      confettiCtx.restore();
    }

    if (particles.length > 0) {
      confettiAnimId = requestAnimationFrame(renderConfetti);
    } else {
      confettiAnimId = null;
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // Hook confetti to resume downloads and APK buttons
  document.querySelectorAll('a[download], #btn-preview-resume, .apk-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      triggerConfetti(e.clientX, e.clientY);
    });
  });

  // ==========================================
  // 9. 3D Gyroscope Tilt & Cursor Spotlight
  // ==========================================
  const tiltElements = document.querySelectorAll('.tilt-card, .project-card, .skill-category-card');

  tiltElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update spotlight position CSS variables
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    });
  });

  // ==========================================
  // 10. Live Hero Phone Simulator Logic
  // ==========================================
  const simTabDrip = document.getElementById('sim-tab-dripstore');
  const simTabKervia = document.getElementById('sim-tab-kervia');
  const simViewDrip = document.getElementById('sim-view-dripstore');
  const simViewKervia = document.getElementById('sim-view-kervia');
  const simToast = document.getElementById('sim-toast');
  const simCartCount = document.getElementById('sim-cart-count');
  const simBtnCart = document.getElementById('sim-btn-cart');
  const simCartBtnText = document.getElementById('sim-cart-btn-text');
  const simBtnApply = document.getElementById('sim-btn-apply');
  let cartItemsTotal = 2;
  let selectedItemName = 'Urban Streetwear Hoodie';

  function showSimToast(msg) {
    if (!simToast) return;
    simToast.textContent = msg;
    simToast.classList.add('show');
    setTimeout(() => {
      simToast.classList.remove('show');
    }, 2200);
  }

  if (simTabDrip && simTabKervia) {
    simTabDrip.addEventListener('click', () => {
      simTabDrip.classList.add('active');
      simTabKervia.classList.remove('active');
      simViewDrip.classList.add('active');
      simViewKervia.classList.remove('active');
    });

    simTabKervia.addEventListener('click', () => {
      simTabKervia.classList.add('active');
      simTabDrip.classList.remove('active');
      simViewKervia.classList.add('active');
      simViewDrip.classList.remove('active');
    });
  }

  // DripStore item click
  document.querySelectorAll('.sim-interactive-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.sim-interactive-item').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      selectedItemName = item.getAttribute('data-item') || 'Product';
      if (simCartBtnText) {
        simCartBtnText.textContent = `Add "${selectedItemName.slice(0, 14)}..."`;
      }
    });
  });

  // DripStore Add to Cart click
  if (simBtnCart) {
    simBtnCart.addEventListener('click', (e) => {
      cartItemsTotal++;
      if (simCartCount) {
        simCartCount.textContent = cartItemsTotal;
        simCartCount.classList.add('pop');
        setTimeout(() => simCartCount.classList.remove('pop'), 250);
      }
      showSimToast(`✓ ${selectedItemName} added! (Provider reactive state)`);
      triggerConfetti(e.clientX, e.clientY);
    });
  }

  // Kervia 1-Click Apply click
  if (simBtnApply) {
    simBtnApply.addEventListener('click', (e) => {
      simBtnApply.disabled = true;
      simBtnApply.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Submitting via BLoC...</span>`;
      setTimeout(() => {
        simBtnApply.disabled = false;
        simBtnApply.style.background = '#10b981';
        simBtnApply.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Applied! (BLoC Success)</span>`;
        showSimToast(`✓ Application sent to Firestore live stream!`);
        triggerConfetti(e.clientX, e.clientY);
        const applicantCount = document.getElementById('kervia-applicant-count');
        if (applicantCount) applicantCount.textContent = '15 Active Streams (You Applied)';
      }, 700);
    });
  }
});


