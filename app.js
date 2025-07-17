// Data for menu items and their render functions
const menuItems = [
  {
    id: 'home',
    label: 'Home',
    tabIndex: 1,
    render: renderHomeSection,
  },
  {
    id: 'about',
    label: 'About Me',
    tabIndex: 2,
    render: renderAboutSection,
  },
  // Placeholder for future sections
  {
    id: 'resume',
    label: 'Resume',
    tabIndex: 3,
    render: () => renderResumeSection('Resume'),
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    tabIndex: 4,
    render: () => renderPortfolioSection('Portfolio'),
  },
  {
    id: 'contact',
    label: 'Contact',
    tabIndex: 5,
    render: () => renderContactSection('Contact'),
  },
];

// Cache DOM references
const app = document.getElementById('app');

// Create nav and append to body
const nav = document.createElement('nav');
const ul = document.createElement('ul');

menuItems.forEach(({ id, label, tabIndex }) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${id}`;
  a.textContent = label;
  a.tabIndex = tabIndex;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
document.body.prepend(nav);

// Render home by default on page load
menuItems[0].render();

// Handle nav clicks via event delegation
nav.addEventListener('click', (event) => {
  if (event.target.tagName !== 'A') return;

  event.preventDefault();

  const targetId = event.target.getAttribute('href').substring(1);

  // Clear current content
  clearAppContent();

  // Find the menu item and render its section
  const menuItem = menuItems.find((item) => item.id === targetId);

  if (menuItem && typeof menuItem.render === 'function') {
    menuItem.render();
  }
});

// Clears the content inside #app container
function clearAppContent() {
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}

// Home section renderer
function renderHomeSection() {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <img src="./photos/download.jpg" alt="Profile Photo" class="profile-image" />
    <h1>Rosa D manzo</h1>
    <h2>UX Designer</h2>
    <p class="summary">
      Designing intuitive and inclusive digital experiences that connect people and products.
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
      I am a dedicated professor at [University Name], specializing in [field]. Over the past 15 years, I have committed myself to advancing research in [specific area] while inspiring students to pursue knowledge passionately.
    </p>
    <p class="values-mission">
      My mission is to foster inclusive learning environments that celebrate cultural heritage and diversity. I believe that education is a powerful tool to bridge communities and empower future generations.
    </p>
    <p class="personal-interests">
      Outside of academia, I enjoy exploring traditional Chinese art, hiking local trails, and sharing stories of my rich Chincao heritage with family and friends.
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
          <strong>Professor of Computer Science</strong>, [University Name] (2010–Present)<br />
          - Lead research in AI and machine learning.<br />
          - Supervised 30+ graduate theses.<br />
          - Developed new interdisciplinary courses.
        </li>
        <li>
          <strong>Research Fellow</strong>, [Research Institute] (2005–2010)<br />
          - Published 15+ papers in top-tier journals.<br />
          - Collaborated on international projects.
        </li>
      </ul>
    </section>

    <section class="resume-subsection education">
      <h3>Education</h3>
      <ul>
        <li><strong>Ph.D. in Computer Science</strong>, [University], 2005</li>
        <li><strong>M.Sc. in Computer Science</strong>, [University], 2001</li>
        <li><strong>B.Sc. in Mathematics</strong>, [University], 1999</li>
      </ul>
    </section>

    <section class="resume-subsection skills">
      <h3>Skills</h3>
      <ul>
        <li>Machine Learning & AI</li>
        <li>Data Analysis & Visualization</li>
        <li>Python, R, Java</li>
        <li>Curriculum Development</li>
        <li>Public Speaking & Academic Writing</li>
      </ul>
    </section>

    <section class="resume-subsection certifications">
      <h3>Certifications & Awards</h3>
      <ul>
        <li>Best Research Paper Award, XYZ Conference, 2022</li>
        <li>Certified Data Scientist, ABC Institute, 2018</li>
        <li>Excellence in Teaching Award, [University], 2015</li>
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
    name: 'Smart Campus App',
    description: `Led the design and development of a mobile app to enhance campus navigation and services. Focused on UX improvements to boost student engagement.`,
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    role: 'Lead UX Designer & Developer',
    image: './photos/photo1.jpg', // optional screenshot
    link: 'https://smartcampus.example.com', // optional live demo
  },
  {
    name: 'AI Research Dashboard',
    description: `Created an interactive dashboard to visualize AI model performance and research metrics, enabling easier collaboration among teams.`,
    tech: ['Python', 'Dash', 'Plotly'],
    role: 'Full Stack Developer & Data Analyst',
    image: './photos/photo2.jpg',
    link: null,
  },
  {
    name: 'Cultural Heritage Website',
    description: `Designed and implemented a site to share and celebrate Chincao heritage through storytelling and multimedia.`,
    tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
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
      <p class="project-tech"><strong>Technologies:</strong> ${project.tech.join(', ')}</p>
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

    <form class="contact-form" action="mailto:your.email@example.com" method="POST" enctype="text/plain">
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
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener">LinkedIn</a>
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




