// Home section renderer
function renderHomeSection() {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <img src="./photos/rosa.jpeg" alt="Profile Photo" class="profile-image" />
    <h1>Rosa D manzo</h1>
    <h2>PHD</h2>
    <p class="summary">
      Transforming health education and research to serve underrepresented communities — one student, one project, and one partnership at a time.
    </p>
    <a href="#portfolio" class="cta-button" id="view-work-btn">View My Work</a>
  `;

  app.appendChild(container);

  // Add event listener for the CTA button
  const viewWorkBtn = document.getElementById('view-work-btn');
  if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', (event) => {
      event.preventDefault();

      // Clear current content
      clearAppContent();

      // Find and invoke the portfolio renderer
      const portfolioItem = menuItems.find((item) => item.id === 'portfolio');
      if (portfolioItem && typeof portfolioItem.render === 'function') {
        portfolioItem.render();
      }
    });
  }
}

// About section renderer
function renderAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about-section container';

  section.innerHTML = `
    <h2>About Me</h2>
    <p class="professional-journey">
    I am an Assistant Teaching Professor of Medical Education at the University of California, Merced, with over 15 years of experience in higher education, interdisciplinary research, and program leadership. My work focuses on advancing equity in health and education through community-based participatory research, curriculum design, and mentorship.  </p>
    <p class="values-mission">
        My mission is to expand access to culturally responsive education and healthcare by building inclusive programs that center the voices and experiences of underserved communities. I collaborate with students, educators, and community leaders to drive meaningful systems change in California’s Central Valley and beyond.
    </p>
    <p class="personal-interests">
      Outside of my academic work, I’m passionate about fostering pathways for first-generation students, strengthening community partnerships, and honoring my cultural roots through storytelling, local engagement, and family traditions.
    </p>

    <!-- Optional images gallery -->
    <div class="about-images">
      <h3>Snapshots of Life</h3>
      <div class="image-gallery">
        <figure>
          <img src="./photos/photo1.jpg" alt="Professor at conference" />
          <figcaption>Presenting at an academic conference</figcaption>
        </figure>
        <figure>
          <img src="./photos/photo2.jpg" alt="Hiking local trails" />
          <figcaption>Enjoying a hike on a local trail</figcaption>
        </figure>
        <figure>
          <img src="./photos/photo3.jpg" alt="Traditional Chinese art" />
          <figcaption>Sharing traditional Chinese art with family</figcaption>
        </figure>
      </div>
    </div>
  `;

  app.appendChild(section);
  section.scrollIntoView({ behavior: 'smooth' });
}



// Resume
function renderResumeSection() {
  const section = document.createElement('section');
  section.id = 'resume';
  section.className = 'resume-section container';

  section.innerHTML = `
    <h2>Resume / CV</h2>

    <section class="resume-subsection work-experience">
      <h3>Work Experience</h3>
      <ul>
        <li>
          <strong>Assistant Teaching Professor of Medical Education</strong>, University of California, Merced (2024–Present)<br />
          - Lead curriculum development and instruction for medical and pre-health students.<br />
          - Facilitate interdisciplinary research initiatives.<br />
          - Promote equity-focused, community-engaged pedagogy.
        </li>
        <li>
          <strong>Project Scientist</strong>, University of California, Merced (2017–2024)<br />
          - Secured ~$800,000 in research funding.<br />
          - Mentored students in public health and medical research.<br />
          - Built research collaborations with regional healthcare providers.
        </li>
        <li>
          <strong>Associate Director of Medical Education</strong>, UC Merced (2018–2021)<br />
          - Led San Joaquin Valley PRIME curriculum deployment.<br />
          - Developed health career pipelines for high school and undergrad students.<br />
          - Established new courses and partnerships with regional hospitals.
        </li>
        <li>
          <strong>Postdoctoral Fellow</strong>, UC Davis (2014–2017)<br />
          - Led community-based interventions (e.g., Niños Sanos, Familia Sana; DESPIERTA).<br />
          - Published and presented research nationally and internationally.
        </li>
      </ul>
    </section>

    <section class="resume-subsection education">
      <h3>Education</h3>
      <ul>
        <li><strong>Ph.D. in Education</strong>, University of California, Davis</li>
        <li><strong>B.A. in [Your Undergraduate Field]</strong>, University of California, Los Angeles</li>
      </ul>
    </section>

    <section class="resume-subsection skills">
      <h3>Skills</h3>
      <ul>
        <li>Community-Based Participatory Research (CBPR)</li>
        <li>Curriculum Development & Evaluation</li>
        <li>Program Leadership & Grant Management</li>
        <li>Mentorship & Student Development</li>
        <li>Qualitative & Quantitative Research Methods</li>
      </ul>
    </section>

    <section class="resume-subsection certifications">
      <h3>Certifications & Awards</h3>
      <ul>
        <li>Jimmy and Rosalynn Carter Partnership Foundation CASE Grant Recipient</li>
        <li>Excellence in Program Development, UC Merced</li>
        <li>Faculty Leadership in Community Health Education, UC Davis</li>
      </ul>
    </section>

    <a href="resume.pdf" download class="download-cv-button" aria-label="Download Resume PDF">Download Resume (PDF)</a>
  `;

  app.appendChild(section);
  section.scrollIntoView({ behavior: 'smooth' });
}


// Projects

const projects = [
  {
    name: 'San Joaquin Valley PRIME Curriculum Deployment',
    description: `Implemented and oversaw the San Joaquin Valley PRIME curriculum, a medical education track designed to train physicians committed to serving underserved rural communities. Integrated community-based learning, leadership seminars, and clinical engagement.`,
    tech: ['UCSF', 'UCSF-Fresno'],
    role: 'Curriculum Co-Lead / Collaborator',
    image: './photos/photo1.jpg', // optional screenshot
    link: 'https://smartcampus.example.com', // optional live demo
  },
  {
    name: 'Promotoras de Salud Research Training',
    description: `Designed and implemented a curriculum to train promotoras (community health workers) as research collaborators. Empowered local leaders with research skills to better advocate for and represent community health needs.`,
    tech: ['Camarena Health'],
    role: 'Program Developer / Principal Investigator',
    image: './photos/photo2.jpg',
    link: 'https://smartcampus.example.com', 
  },
  {
    name: 'Health Career Pipeline Program',
    description: `Developed outreach programs connecting rural high school students with health professions education. Designed enrichment and mentorship components to foster long-term career engagement in health sciences.`,
    tech: ['UC Merced', 'Local High Schools'],
    role: 'Project Manager & Frontend Developer',
    image: './photos/photo3.jpg',
    link: 'https://chincaoculture.org',
  },
  
];


function renderPortfolioSection() {
  const section = document.createElement('section');
  section.id = 'portfolio';
  section.className = 'portfolio-section container';

  // Create header
  const header = document.createElement('h2');
  header.textContent = 'Portfolio / Projects';
  section.appendChild(header);

  // Create project cards container
  const projectsContainer = document.createElement('div');
  projectsContainer.className = 'projects-container';

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
      <h3>${project.name}</h3>
      <p class="project-role"><strong>Role:</strong> ${project.role}</p>
      <p class="project-description">${project.description}</p>
      <p class="project-tech"><strong>Partners:</strong> ${project.tech.join(', ')}</p>
      ${project.image ? `<img src="${project.image}" alt="${project.name} screenshot" class="project-image" />` : ''}
      ${project.link ? `<p><a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a></p>` : ''}
    `;

    projectsContainer.appendChild(card);
  });

  section.appendChild(projectsContainer);

  app.appendChild(section);
  section.scrollIntoView({ behavior: 'smooth' });
}


function renderContactSection() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'contact-section container';

  section.innerHTML = `
    <h2>Contact</h2>
    <p class="contact-intro">
      I'd love to connect! Whether you have a question, want to collaborate, or just want to say hello — feel free to reach out.
    </p>

    <form class="contact-form" action="mailto:em514405@example.com" method="POST" enctype="text/plain">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Send</button>
    </form>

    <div class="contact-info">
      <p><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p><strong>Phone:</strong> (123) 456-7890</p>
    </div>

    <div class="social-links">
      <a href="https://www.linkedin.com/in/rosamanzo/" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener">GitHub</a>
      <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener">Twitter</a>
    </div>
  `;

  app.appendChild(section);
  section.scrollIntoView({ behavior: 'smooth' });
}



// Placeholder renderer for future sections
function renderPlaceholder(name) {
  const section = document.createElement('section');
  section.className = 'container';
  section.innerHTML = `<h2>${name}</h2><p>Content coming soon...</p>`;
  app.appendChild(section);
  section.scrollIntoView({ behavior: 'smooth' });
}






function clearAppContent() {
  app.innerHTML = '';
}

// Menu items config
const menuItems = [
  { id: 'home', label: 'Home', tabIndex: 1, render: renderHomeSection },
  { id: 'about', label: 'About Me', tabIndex: 2, render: renderAboutSection },
  { id: 'resume', label: 'Resume', tabIndex: 3, render: renderResumeSection },
  { id: 'portfolio', label: 'Portfolio', tabIndex: 4, render: renderPortfolioSection },
  { id: 'contact', label: 'Contact', tabIndex: 5, render: renderContactSection }
];

// Cache app container
const app = document.getElementById('app');

// Create nav
const nav = document.createElement('nav');
nav.id = 'navbar';

const navToggle = document.createElement('button');
navToggle.id = 'navToggle';
navToggle.setAttribute('aria-label', 'Toggle navigation');
navToggle.setAttribute('aria-expanded', 'false');
navToggle.textContent = '☰';

const ul = document.createElement('ul');
ul.id = 'navMenu';

menuItems.forEach(({ id, label, tabIndex }) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${id}`;
  a.textContent = label;
  a.tabIndex = tabIndex;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(navToggle);
nav.appendChild(ul);
document.body.prepend(nav);

// Toggle nav menu visibility on mobile
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  ul.classList.toggle('show');
});

// Collapse menu on nav link click (mobile only)
ul.addEventListener('click', () => {
  if (window.innerWidth <= 600) {
    ul.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Render content sections on nav click
nav.addEventListener('click', (event) => {
  if (event.target.tagName !== 'A') return;

  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);

  clearAppContent();

  const menuItem = menuItems.find((item) => item.id === targetId);
  if (menuItem && typeof menuItem.render === 'function') {
    menuItem.render();
  }
});
renderHomeSection()