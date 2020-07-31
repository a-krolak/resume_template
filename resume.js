const data = {
  name: 'Alexandra Krolak',
  mainEmoji: {
    character: '⭐️',
    ariaLabel: 'star',
  },
  phoneNumber: '416.671.4712',
  email: 'akrolak21@gmail.com',
  githubHandle: 'a-krolak',
  linkedInHandle: 'alexandra-krolak',
  workExperiences: [
    {
      emoji: '☕️',
      ariaLabel: 'coffee-cup',
      jobTitle: 'Sr. Manager, Loyalty Analytics & CRM',
      institution: 'Restaurant Brands International',
      dates: '2020 - Present',
      details: ['Tech bootcamp: HTML, CSS, JavaScript'],
    },
    {
      emoji: '📑',
      ariaLabel: 'paper-stack',
      jobTitle: 'Account Coordinator',
      institution: 'DAC Group',
      dates: '2017-2018',
      details: [
        'Identified gaps in client’s digital marketing strategies and coordinated the development and implementation of integrated digital campaigns through strategic content audits, comprehensive search & display campaigns, and website builds; resulted in increased engagement, leads, and conversions year over year',
      ],
    },
    {
      emoji: '📑',
      ariaLabel: 'paper-stack',
      jobTitle: 'Business Process Coordinator',
      institution: 'DAC Group',
      dates: '2016-2017',
      details: [
        'Coordinated the on-boarding and integration of three international offices DAC acquired over a six-month period focusing on change management and workflow optimization, resulting in smooth transition of teams and successful adaptation of business processes',
      ],
    },
    {
      emoji: '📑',
      ariaLabel: 'paper-stack',
      jobTitle: 'Operations Support Analyst',
      institution: 'DAC Group',
      dates: '2016-2016',
      details: [
        'Collaborated with senior operations analysts to successfully manage the back-end digital marketing programs for various enterprise level directional clients, leveraging this information to optimize localized digital advertising campaigns',
      ],
    },
  ],
  educationalExperiences: [
    {
      emoji: '🌿',
      ariaLabel: 'ivy-leaf',
      university: 'Ivey Business School',
      degree: 'Master of Business Administration with distinction',
      dates: '2019 - 2020',
      details: [
        'Deans Honour List',
        'Academics: 3.9/4.0 GPA',
        'Lean In Canada Scholarship recipiant',
      ],
    },
    {
      emoji: '🦄',
      ariaLabel: 'purple-unicorn',
      university: 'Western University',
      degree: 'Honours Bachelor of Arts with Distinction',
      dates: '2019 - 2020',
      details: [
        'Completed year-long academic exchange at the University of East Anglia in Norwich, England',
        'Academics: 3.8/4.0 GPA',
        'Western Scholarship of Excellence recipiant',
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;

function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${
    workExperience.emoji
  }</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${educationalExperience.ariaLabel}">${
  educationalExperience.emoji
}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.degree}</span>
    </h3>
    <ul>
      ${educationalExperience.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
    </ul>
  </div>`;

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperiences.map(
  renderEducationalExperience
);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;
