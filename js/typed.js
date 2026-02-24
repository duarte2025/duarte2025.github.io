const aboutStrings = [
  "software engineer",
  "engineering manager",
  "lifelong learner",
  "problem solver",
  "science enthusiast"
];

const options = {
  strings: aboutStrings,
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
  cursorChar: '|'
};

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('text');
  if (element && typeof Typed !== 'undefined') {
    new Typed("#text", options);
  } else {
    console.error('Typed.js não carregou ou elemento #text não encontrado');
    if (element) {
      element.textContent = 'software engineer';
    }
  }
});
