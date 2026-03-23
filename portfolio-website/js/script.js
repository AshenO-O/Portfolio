// ========== Theme: Always Dark ==========
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');

// ========== Mobile Menu Toggle ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ========== Typing Effect ==========
const typedTextElement = document.getElementById('typed-text');
if (typedTextElement) {
    const phrases = ['Computer Science Undergraduate', 'Web Developer', 'Problem Solver', 'Tech Enthusiast'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500);
            return;
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
}

// ========== Projects Data ==========
const projectsData = [
    {
        id: 1,
        title: "ICC ProcuraX",
        description: "Centralized communication and management system for ICC construction company. Implemented document management, smart calendar, notes/tasks features, and UI/UX design using Figma.",
        tags: ["Flutter", "Figma", "Mobile"],
        category: "mobile",
        demo: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Student Record System",
        description: "Student records management system using Python and Tkinter. Features include adding, searching, updating, and deleting student records with SQLite database.",
        tags: ["Python", "Tkinter", "SQLite"],
        category: "python",
        demo: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Atlantis - Life Under Water",
        description: "Responsive marine life web page. Contributed to content page, site map, and home page development with responsive designs.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        category: "web",
        demo: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Rental Agreement System",
        description: "Web platform for landlords and tenants to manage rental agreements, track payments, and maintain digital contracts. Built with React and Spring Boot.",
        tags: ["React", "Spring Boot", "MySQL"],
        category: "react",
        demo: "#",
        github: "#",
        ongoing: true
    }
];

// ========== Load Projects ==========
function loadProjects(containerId, filter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(p => p.category === filter);

    container.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">
                    ${project.tags.map(tag => `<span class="tech-badge">${tag}</span>`).join('')}
                    ${project.ongoing ? '<span class="tech-badge" style="background: #f59e0b;">In Progress</span>' : ''}
                </div>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `).join('');
}

// Load featured projects on homepage
if (document.getElementById('featuredProjects')) {
    loadProjects('featuredProjects', 'all');
}

// Load all projects on projects page with filter functionality
if (document.getElementById('allProjects')) {
    loadProjects('allProjects', 'all');

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            loadProjects('allProjects', filter);
        });
    });
}

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== Navbar Scroll Effect ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'var(--bg-secondary)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'var(--bg-secondary)';
    }
});