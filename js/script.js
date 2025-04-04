document.addEventListener("DOMContentLoaded", function () {
  // Initialize Bootstrap components
  initBootstrapComponents();

  // Populate dynamic content
  populateServicesSection();
  populateTeamSection();
  populateTestimonialsSection();
  populateClinicInfo();

  // Initialize smooth scrolling
  initSmoothScrolling();
});

// Initialize Bootstrap components
function initBootstrapComponents() {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Initialize popovers
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]'),
  );
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}

// Populate Services Section
function populateServicesSection() {
  const servicesContainer = document.getElementById("services-container");

  if (!servicesContainer) return;

  servicesContainer.innerHTML = "";

  servicesData.forEach((service) => {
    const iconClass = getIconClass(service.icon);

    const serviceHTML = `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="service-card">
          <div class="service-icon">
            <i class="${iconClass}"></i>
          </div>
          <h3 class="service-title">${service.title}</h3>
          <p>${service.description}</p>
        </div>
      </div>
    `;

    servicesContainer.innerHTML += serviceHTML;
  });
}

// Populate Team Section
function populateTeamSection() {
  const teamContainer = document.getElementById("team-container");

  if (!teamContainer) return;

  // Add class to center the team container contents
  teamContainer.classList.add("justify-content-center");
  
  teamContainer.innerHTML = "";

  teamData.forEach((member) => {
    const teamHTML = `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="team-card">
          <div class="team-image-container">
            <img src="${member.imageUrl}" alt="${member.name}" class="team-image">
          </div>
          <div class="team-info">
            <h3 class="team-name">${member.name}</h3>
            <p class="team-position">${member.position}</p>
            <p class="team-description">${member.description}</p>
          </div>
        </div>
      </div>
    `;

    teamContainer.innerHTML += teamHTML;
  });
}

// Populate Testimonials Section
function populateTestimonialsSection() {
  const testimonialsContainer = document.getElementById(
    "testimonials-container",
  );

  if (!testimonialsContainer) return;

  testimonialsContainer.innerHTML = "";

  testimonialsData.forEach((testimonial, index) => {
    const stars = generateStarRating(testimonial.rating);

    const testimonialHTML = `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="testimonial-item">
          <img src="${testimonial.imageUrl}" class="testimonial-img" alt="${testimonial.name}">
          <p class="testimonial-text">${testimonial.testimonial}</p>
          <h5 class="testimonial-name">${testimonial.name}</h5>
          <p class="testimonial-position">${testimonial.position}</p>
          <div class="rating">${stars}</div>
        </div>
      </div>
    `;

    testimonialsContainer.innerHTML += testimonialHTML;
  });
}

// Populate Clinic Information
function populateClinicInfo() {
  // Address
  const addressElement = document.getElementById("clinic-address");
  if (addressElement) {
    addressElement.textContent = clinicData.address;
  }

  // Footer Address
  const footerAddress = document.getElementById("footer-address");
  if (footerAddress) {
    footerAddress.textContent = clinicData.address;
  }

  // Phone
  const phoneElement = document.getElementById("clinic-phone");
  if (phoneElement) {
    phoneElement.innerHTML = clinicData.phone
      .map(
        (phone) =>
          `<a href="tel:${phone}" class="text-decoration-none">${phone}</a>`,
      )
      .join("<br>");
  }

  // Footer Phone
  const footerPhone = document.getElementById("footer-phone");
  if (footerPhone) {
    footerPhone.textContent = clinicData.phone[0];
  }

  // Email
  const emailElement = document.getElementById("clinic-email");
  if (emailElement) {
    emailElement.innerHTML = clinicData.email
      .map(
        (email) =>
          `<a href="mailto:${email}" class="text-decoration-none">${email}</a>`,
      )
      .join("<br>");
  }

  // Footer Email
  const footerEmail = document.getElementById("footer-email");
  if (footerEmail) {
    footerEmail.textContent = clinicData.email[0];
  }

  // Additional contact elements in the merged section
  const clinicPhoneAlt = document.getElementById('clinic-phone-alt');
  if (clinicPhoneAlt) {
    clinicPhoneAlt.innerHTML = `<a href="tel:${clinicData.phone[0]}" class="text-decoration-none">${clinicData.phone[0]}</a>`;
  }
  
  const clinicEmailAlt = document.getElementById('clinic-email-alt');
  if (clinicEmailAlt) {
    clinicEmailAlt.innerHTML = `<a href="mailto:${clinicData.email[0]}" class="text-decoration-none">${clinicData.email[0]}</a>`;
  }

  // Working Hours
  const hoursElement = document.getElementById("clinic-hours");
  if (hoursElement) {
    hoursElement.innerHTML = `
      <li><strong>Monday - Friday:</strong> ${clinicData.workingHours.weekdays}</li>
      <li><strong>Saturday:</strong> ${clinicData.workingHours.saturday}</li>
      <li><strong>Sunday:</strong> ${clinicData.workingHours.sunday}</li>
    `;
  }

  // Console log for debugging
  console.log("Clinic info populated:", {
    address: clinicData.address,
    phone: clinicData.phone,
    email: clinicData.email,
  });
}

// Initialize Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      // Skip if the href is just "#" or empty
      if (targetId === "#" || !targetId) {
        return;
      }

      e.preventDefault();

      // Close mobile menu if it's open
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar && navbar.classList.contains("show")) {
        document.querySelector(".navbar-toggler").click();
      }

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Helper Functions
function getIconClass(iconName) {
  // Map icon names to Font Awesome classes
  const iconMap = {
    walking: "fas fa-walking",
    heartbeat: "fas fa-heartbeat",
    brain: "fas fa-brain",
    child: "fas fa-child",
    wheelchair: "fas fa-wheelchair",
    hands: "fas fa-hands",
  };

  return iconMap[iconName] || "fas fa-circle";
}

function generateStarRating(rating) {
  let stars = "";

  // Full stars
  for (let i = 0; i < Math.floor(rating); i++) {
    stars += '<i class="fas fa-star"></i>';
  }

  // Half star
  if (rating % 1 !== 0) {
    stars += '<i class="fas fa-star-half-alt"></i>';
  }

  // Empty stars
  for (let i = Math.ceil(rating); i < 5; i++) {
    stars += '<i class="far fa-star"></i>';
  }

  return stars;
}

// Handle fixed navbar on scroll and back to top button visibility
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const backToTopButton = document.getElementById("backToTop");

  // Navbar transition
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm", "py-2");
    navbar.classList.remove("py-3");
  } else {
    navbar.classList.remove("shadow-sm", "py-2");
    navbar.classList.add("py-3");
  }

  // Back to top button visibility
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Back to top button functionality
document.getElementById("backToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
