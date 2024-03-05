console.log('bobbyhadz.com');

const container = document.getElementById('container');

if (container.textContent.includes('Melon')) {
  console.log('✅ Melon is contained in element');
} else {
  console.log('⛔️ Melon is NOT contained in element');
}
