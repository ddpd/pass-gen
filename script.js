const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const copyEl = document.getElementById('copy');
const passwordEl = document.querySelector('.password-display');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>/?';

function getRandomChar(list) {
  const buffer = new Uint32Array(1);
  window.crypto.getRandomValues(buffer);
  return list[buffer[0] % list.length];
}

function generatePassword() {
  let password = '';
  const characterList = [];
  if (uppercaseEl.checked) characterList.push(...uppercaseLetters);
  if (lowercaseEl.checked) characterList.push(...lowercaseLetters);
  if (numbersEl.checked) characterList.push(...numbers);
  if (symbolsEl.checked) characterList.push(...symbols);

  for (let i = 0; i < lengthEl.value; i++) {
    password += getRandomChar(characterList);
  }

  return password;
}

function updatePassword() {
  const password = generatePassword();
  passwordEl.innerText = password;
}

let timeout;
function scheduleUpdate() {
  clearTimeout(timeout);
  timeout = setTimeout(updatePassword, 300);
}

generateEl.addEventListener('click', updatePassword);
lengthEl.addEventListener('input', scheduleUpdate);
uppercaseEl.addEventListener('change', scheduleUpdate);
lowercaseEl.addEventListener('change', scheduleUpdate);
numbersEl.addEventListener('change', scheduleUpdate);
symbolsEl.addEventListener('change', scheduleUpdate);

copyEl.addEventListener('click', async () => {
  const password = passwordEl.innerText;
  if (password) {
    try {
      await navigator.clipboard.writeText(password);
      const originalText = copyEl.innerText;
      copyEl.innerText = '✔️ ' + originalText;
      setTimeout(() => {
        copyEl.innerText = originalText;
      }, 2000);
    } catch {
      alert(copyEl.innerText + ' FAILED');
    }
  }
});

updatePassword();
