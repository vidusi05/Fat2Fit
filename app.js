/* -------------------------------------------------------------
 * Gym Website "Fat2Fit" Javascript Logic
 * Mobile Navigation, Scroll Indicators, Facilities Slider, Reviews Slider & Contact Form
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load


    // --- Mobile Hamburger Menu ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Prevent body scrolling when mobile menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    };

    const closeMenu = () => {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    hamburgerMenu.addEventListener('click', toggleMenu);
    
    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });


    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNav = () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for fixed navbar
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-list a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    };
    window.addEventListener('scroll', highlightNav);


    // --- Facilities Auto Scroll Slider ---
    const facilitySlides = document.querySelectorAll('.facility-slide');
    const facilityDots = document.querySelectorAll('.facilities-dots .f-dot');
    
    let currentFacilityIndex = 0;
    let facilityTimer = null;

    const showFacility = (index) => {
        if (index >= facilitySlides.length) currentFacilityIndex = 0;
        else if (index < 0) currentFacilityIndex = facilitySlides.length - 1;
        else currentFacilityIndex = index;

        facilitySlides.forEach((slide, idx) => {
            if (idx === currentFacilityIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        facilityDots.forEach((dot, idx) => {
            if (idx === currentFacilityIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const nextFacility = () => {
        showFacility(currentFacilityIndex + 1);
    };

    const startFacilityCycle = () => {
        stopFacilityCycle();
        facilityTimer = setInterval(nextFacility, 5000); // 5 seconds interval
    };

    const stopFacilityCycle = () => {
        if (facilityTimer) {
            clearInterval(facilityTimer);
        }
    };

    facilityDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showFacility(index);
            startFacilityCycle(); // Reset timer on interaction
        });
    });

    // Start auto scroll
    startFacilityCycle();


    // --- Client Reviews Slider ---
    const reviewCards = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.getElementById('prev-review');
    const nextBtn = document.getElementById('next-review');
    
    let currentReviewIndex = 0;
    let autoPlayTimer = null;

    const showReview = (index) => {
        if (index >= reviewCards.length) currentReviewIndex = 0;
        else if (index < 0) currentReviewIndex = reviewCards.length - 1;
        else currentReviewIndex = index;

        reviewCards.forEach((card, idx) => {
            if (idx === currentReviewIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        dots.forEach((dot, idx) => {
            if (idx === currentReviewIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const nextReview = () => {
        showReview(currentReviewIndex + 1);
    };

    const prevReview = () => {
        showReview(currentReviewIndex - 1);
    };

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextReview, 6000);
    };

    const stopAutoPlay = () => {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
        }
    };

    nextBtn.addEventListener('click', () => {
        nextReview();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevReview();
        startAutoPlay();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showReview(index);
            startAutoPlay();
        });
    });

    startAutoPlay();


    // --- Contact Form Validation & Submission ---
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const toast = document.getElementById('toast-notification');
    const toastClose = document.getElementById('toast-close');
    
    let toastTimeout = null;

    const showToast = () => {
        clearTimeout(toastTimeout);
        toast.classList.add('active');
        toastTimeout = setTimeout(hideToast, 5000);
    };

    const hideToast = () => {
        toast.classList.remove('active');
    };

    toastClose.addEventListener('click', hideToast);

    const validateField = (element) => {
        const parent = element.parentElement;
        let isValid = true;

        if (element.required && !element.value.trim()) {
            isValid = false;
        }

        if (isValid && element.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(element.value.trim())) {
                isValid = false;
            }
        }

        if (!isValid) {
            parent.classList.add('invalid');
        } else {
            parent.classList.remove('invalid');
        }

        return isValid;
    };

    const formFields = contactForm.querySelectorAll('input, select, textarea');
    formFields.forEach(field => {
        field.addEventListener('input', () => {
            if (field.parentElement.classList.contains('invalid')) {
                validateField(field);
            }
        });
        field.addEventListener('blur', () => {
            validateField(field);
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;

        formFields.forEach(field => {
            const isValid = validateField(field);
            if (!isValid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;

            setTimeout(() => {
                showToast();
                contactForm.reset();
                
                formFields.forEach(field => {
                    field.parentElement.classList.remove('invalid');
                });

                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            }, 1500);
        }
    });

});
