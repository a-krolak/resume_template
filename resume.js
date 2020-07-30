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
