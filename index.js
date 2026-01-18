AOS.init({
    duration: 800,
    once: false
});



const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

let open = false;

menuBtn.addEventListener("click", () => {
    open = !open;
    mobileMenu.classList.toggle("hidden");

    // Change icon
    menuIcon.innerHTML = open
        ? `<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>`
        : `<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>`;
});


function callNow() {
    window.location.href = "tel:+1-855-775-4304";
}

const carousel = document.getElementById("carousel");
if (carousel) {
    let index = 0;
const totalSlides = carousel.children.length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto Slide (optional)
setInterval(nextSlide, 5000);


}

const stepData = [
    {
        title: "Free Consultation",
        text: "We begin with a free consultation to understand your technical requirements.",
        list: [
            "Understand customer requirements",
            "Initial problem assessment",
            "Expert recommendations"
        ],
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Evaluation & Scheduling",
        text: "Our experts evaluate your systems and schedule service at your convenience.",
        list: [
            "Detailed diagnostics",
            "Service scheduling",
            "Cost estimation"
        ],
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Execution",
        text: "Certified technicians execute the plan with precision and care.",
        list: [
            "Onsite / Remote assistance",
            "System repair & optimization",
            "Final diagnostics report"
        ],
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Continued Guidance",
        text: "We provide continuous guidance and after-service support.",
        list: [
            "Follow-up consulting",
            "Performance monitoring",
            "Customer support"
        ],
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    }
];

function showStep(index) {
    const contentArea = document.getElementById("stepContentArea");
    const image = document.getElementById("stepImage");
    const buttons = document.querySelectorAll(".step-btn");

    // Update active button
    buttons.forEach((btn, i) => {
        btn.classList.toggle("step-active", i === index - 1);
        btn.classList.toggle("bg-blue-600", i === index - 1);
        btn.classList.toggle("text-white", i === index - 1);
        btn.classList.toggle("shadow-lg", i === index - 1);
    });

    // Update content
    const data = stepData[index - 1];

    contentArea.innerHTML = `
    <div class="step-content slide-animate">
      <h3 class="text-2xl font-semibold mb-3">${data.title}</h3>
      <p class="text-gray-600 mb-4">${data.text}</p>
      <ul class="list-disc ml-6 text-gray-600 space-y-2">
        ${data.list.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </div>
  `;

    // Update image
    image.src = data.img;
}

function toggleFAQ(id) {
  const faq = document.getElementById("faq" + id);
  const icon = document.getElementById("icon" + id);

  faq.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}

function toggleAcc(id) {
  const allContents = document.querySelectorAll('[id^="acc"]');
  const allIcons = document.querySelectorAll('[id^="icon"]');

  // Close all first
  allContents.forEach(c => c.classList.add("hidden"));
  allIcons.forEach(i => i.classList.remove("rotate-180"));

  // Open selected
  const content = document.getElementById("acc" + id);
  const icon = document.getElementById("icon" + id);

  content.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
}