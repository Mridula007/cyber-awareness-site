document.addEventListener('DOMContentLoaded', () => {
  const newsDiv = document.getElementById('latestNews');
  if (newsDiv) {
    newsDiv.innerHTML = `
      <ul>
        <li>🔐 Govt warns about new phishing scam targeting bank customers.</li>
        <li>🛡️ WhatsApp vulnerability patched—update immediately.</li>
        <li>💾 Ransomware gang hits hospitals in Tamil Nadu.</li>
      </ul>
    `;
  }
});
