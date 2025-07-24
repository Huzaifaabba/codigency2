document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a, .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Keyboard navigation for menu
        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });
    }

    // Sticky header background on scroll
    const header = document.querySelector('.sticky-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name')?.value;
            const email = document.getElementById('email')?.value;
            const service = document.getElementById('service')?.value;
            
            if (name && email && service) {
                alert(`Thank you, ${name}! Your message about ${service} has been received. We'll contact you at ${email} shortly.`);
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Portfolio filtering (only if elements exist)
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = [
            // Your portfolio items array...
        ];

        // ... rest of portfolio filtering code
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle aria-expanded for accessibility
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
        
        // Close menu when clicking on links (for mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});


// Add pulse animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        // Add pulse class initially
        whatsappBtn.classList.add('pulse');
        
        // Remove pulse after 5 seconds
        setTimeout(() => {
            whatsappBtn.classList.remove('pulse');
        }, 5000);
        
        // Add pulse when hovered
        whatsappBtn.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    }
});

// Optional: Hide on scroll
window.addEventListener('scroll', () => {
  const btn = document.querySelector('.whatsapp-btn');
  btn.style.bottom = (window.scrollY > 50) ? '-70px' : '30px';
});


// Position Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const positionCards = document.querySelectorAll('.position-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter positions
            positionCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('main-nav');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if(navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-btn, .whatsapp-btn').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
});


// Scroll Animation Trigger
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});



document.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelectorAll('.work-category');
  
  categories.forEach(category => {
    category.addEventListener('click', function() {
      // Remove active class from all categories
      categories.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked category
      this.classList.add('active');
      
      // Hide all work examples
      document.querySelectorAll('.work-example').forEach(example => {
        example.style.display = 'none';
      });
      
      // Show selected category's work examples
      const categoryName = this.getAttribute('data-category');
      document.querySelectorAll(`.${categoryName}`).forEach(example => {
        example.style.display = 'block';
      });
    });
  });
});




document.addEventListener('DOMContentLoaded', function() {
    // Key Features Data
    const features = [
        {
            icon: 'fa-chalkboard-teacher',
            title: 'Interactive Virtual Classroom',
            desc: 'Integrated Zoom API with recording capabilities and digital whiteboard'
        },
        {
            icon: 'fa-user-graduate',
            title: 'Student Progress Tracking',
            desc: 'Custom dashboard to track memorization, attendance, and performance'
        },
        {
            icon: 'fa-globe',
            title: 'Multilingual Support',
            desc: 'Arabic/English interface with RTL text direction options'
        },
        {
            icon: 'fa-credit-card',
            title: 'Payment System',
            desc: 'Multi-currency payment gateway with installment options'
        },
        {
            icon: 'fa-calendar-alt',
            title: 'Scheduling System',
            desc: 'Automated scheduling across timezones with reminders'
        },
        {
            icon: 'fa-mobile-alt',
            title: 'Mobile Responsive',
            desc: 'Fully responsive design for all devices'
        }
    ];

    // Results Data
    const results = [
        {
            value: '300+',
            label: 'Active Students'
        },
        {
            value: '95%',
            label: 'Student Satisfaction'
        },
        {
            value: '40%',
            label: 'Revenue Increase'
        },
        {
            value: '15',
            label: 'Countries Served'
        }
    ];

    // Insert Features
    const featuresContainer = document.querySelector('.features-grid');
    features.forEach(feature => {
        featuresContainer.innerHTML += `
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas ${feature.icon}"></i>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            </div>
        `;
    });

    // Insert Results
    const resultsContainer = document.querySelector('.results-grid');
    results.forEach(result => {
        resultsContainer.innerHTML += `
            <div class="result-card">
                <h3>${result.value}</h3>
                <p>${result.label}</p>
            </div>
        `;
    });

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .result-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    document.querySelectorAll('.feature-card, .result-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });

    // Add scroll event
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});


/* Add these styles to your existing CSS */



// Update the features data
const features = [
    {
        icon: 'fa-code',
        title: 'Custom Frontend',
        desc: 'Built from scratch with semantic HTML5 and modern CSS3'
    },
    {
        icon: 'fa-mobile-alt',
        title: 'Responsive Design',
        desc: 'Fully responsive across all devices using CSS Grid/Flexbox'
    },
    {
        icon: 'fa-users',
        title: 'User System',
        desc: 'Firebase authentication for students/teachers'
    },
    {
        icon: 'fa-video',
        title: 'Virtual Classroom',
        desc: 'Zoom Web SDK integration for live classes'
    },
    {
        icon: 'fa-credit-card',
        title: 'Payments',
        desc: 'Stripe API for secure payment processing'
    },
    {
        icon: 'fa-calendar-alt',
        title: 'Scheduling',
        desc: 'Custom JavaScript scheduling system'
    }
];

// Add tech stack display
const techStack = [
    { name: "HTML5", color: "#E44D26" },
    { name: "CSS3", color: "#2965F1" },
    { name: "JavaScript", color: "#F0DB4F", text: "#323330" },
    { name: "Firebase", color: "#FFCA28", text: "#12181A" },
    { name: "Zoom SDK", color: "#2D8CFF" },
    { name: "Stripe API", color: "#6772E5" }
];

// Insert Tech Stack
const techContainer = document.createElement('div');
techContainer.className = 'tech-stack';
techContainer.innerHTML = `
    <h3>Technology Stack</h3>
    ${techStack.map(tech => `
        <span class="tech-badge" style="background-color: ${tech.color}; ${tech.text ? `color: ${tech.text};` : ''}">
            ${tech.name}
        </span>
    `).join('')}
`;

document.querySelector('.project-details .container').appendChild(techContainer);




document.addEventListener('DOMContentLoaded', function() {
    // Design process data for each category
    const designProcesses = {
        'logo-design': [
            { icon: 'fa-search', title: 'Research Phase', desc: 'Market analysis and brand positioning' },
            { icon: 'fa-pencil-alt', title: 'Sketching', desc: '50+ conceptual sketches for each project' },
            { icon: 'fa-vector-square', title: 'Digital Rendering', desc: 'Vector refinement in Adobe Illustrator' }
        ],
        'packaging-design': [
            { icon: 'fa-box-open', title: 'Structural Design', desc: '3D modeling and prototyping' },
            { icon: 'fa-palette', title: 'Visual Design', desc: 'Brand-consistent graphics and typography' },
            { icon: 'fa-print', title: 'Print Preparation', desc: 'CMYK color management and die-line setup' }
        ],
        'flyer-design': [
            { icon: 'fa-bullseye', title: 'Goal Definition', desc: 'Identifying key call-to-action and audience' },
            { icon: 'fa-layer-group', title: 'Layout Design', desc: 'Hierarchy and information flow optimization' },
            { icon: 'fa-magic', title: 'Final Polish', desc: 'High-resolution print-ready files' }
        ],
        'illustration': [
            { icon: 'fa-lightbulb', title: 'Concept Development', desc: 'Mood boards and style exploration' },
            { icon: 'fa-paint-brush', title: 'Execution', desc: 'Digital painting or vector creation' },
            { icon: 'fa-file-export', title: 'Delivery', desc: 'Multiple file formats for all use cases' }
        ],
        'business-cards': [
            { icon: 'fa-handshake', title: 'Client Consultation', desc: 'Understanding professional needs and style' },
            { icon: 'fa-edit', title: 'Design Iterations', desc: '3-5 unique design concepts' },
            { icon: 'fa-certificate', title: 'Premium Finishes', desc: 'Spot UV, foil stamping, and special cuts' }
        ]
    };

    // Populate design processes
    for (const [categoryId, steps] of Object.entries(designProcesses)) {
        const processContainer = document.querySelector(`#${categoryId} .design-process`);
        
        steps.forEach(step => {
            processContainer.innerHTML += `
                <div class="process-step">
                    <h4><i class="fas ${step.icon}"></i> ${step.title}</h4>
                    <p>${step.desc}</p>
                </div>
            `;
        });
    }

    // Animation on scroll
    const animateOnScroll = () => {
        const designCategories = document.querySelectorAll('.design-category');
        
        designCategories.forEach(category => {
            const categoryPosition = category.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(categoryPosition < screenPosition) {
                category.style.opacity = '1';
                category.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    document.querySelectorAll('.design-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });

    // Add scroll event
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});





// script.js - Codigency Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== Mobile Navigation ==========
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.primary-navigation');
    
    if(mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', function() {
            primaryNav.classList.toggle('active');
            this.classList.toggle('fa-times');
            this.classList.toggle('fa-bars');
        });
    }

    // ========== Smooth Scrolling ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if(primaryNav && primaryNav.classList.contains('active')) {
                    primaryNav.classList.remove('active');
                    mobileNavToggle.classList.toggle('fa-times');
                    mobileNavToggle.classList.toggle('fa-bars');
                }
            }
        });
    });

    // ========== Portfolio Filtering ==========
    const portfolioFilters = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if(portfolioFilters.length && portfolioItems.length) {
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Update active filter
                portfolioFilters.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter items
                const filterValue = this.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    if(filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ========== Testimonial Slider ==========
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    if(testimonials.length > 1) {
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 5000);
    }

    // ========== Animate on Scroll ==========
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    // Initialize elements
    document.querySelectorAll('.portfolio-item, .service-card, .team-member').forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // ========== Contact Form Validation ==========
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[name="name"]');
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            let isValid = true;
            
            // Simple validation
            if(nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                isValid = false;
            } else {
                nameInput.classList.remove('error');
            }
            
            if(!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
                emailInput.classList.add('error');
                isValid = false;
            } else {
                emailInput.classList.remove('error');
            }
            
            if(messageInput.value.trim() === '') {
                messageInput.classList.add('error');
                isValid = false;
            } else {
                messageInput.classList.remove('error');
            }
            
            if(isValid) {
                // Form submission logic (AJAX or other)
                this.querySelector('.form-submit-btn').textContent = 'Sending...';
                
                // Simulate form submission
                setTimeout(() => {
                    this.querySelector('.form-submit-btn').textContent = 'Message Sent!';
                    this.reset();
                    
                    setTimeout(() => {
                        this.querySelector('.form-submit-btn').textContent = 'Send Message';
                    }, 3000);
                }, 1500);
            }
        });
    }

    // ========== Scroll to Top Button ==========
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top-btn';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});