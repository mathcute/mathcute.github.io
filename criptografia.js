const encryptionMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const decryptionMap = {};
for (const key in encryptionMap) {
  const value = encryptionMap[key];
  decryptionMap[value] = key;
}

function encrypt(text) {
  return text.split('').map(char => encryptionMap[char] || char).join('');
}

function decrypt(text) {
  const regex = new RegExp(Object.keys(decryptionMap).join('|'), 'g');
  return text.replace(regex, match => decryptionMap[match] || match);
}
