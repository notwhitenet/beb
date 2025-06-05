// 1(a)
const osInfo = {
  platform: navigator.platform,              
  userAgent: navigator.userAgent,             // повна інформація про браузер
  appVersion: navigator.appVersion,           // версія додатку
  language: navigator.language,               // мова браузера
  vendor: navigator.vendor,                   // виробник браузера
  cookieEnabled: navigator.cookieEnabled,     // чи увімкнені cookies
  hardwareConcurrency: navigator.hardwareConcurrency, // кількість логічних процесорів
  maxTouchPoints: navigator.maxTouchPoints    // сенсор
};

localStorage.setItem('systemInfo', JSON.stringify(osInfo));

// 1(b) у футері сайту
const allData = {};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  try {
    allData[key] = JSON.parse(localStorage.getItem(key));
  } catch {
    allData[key] = localStorage.getItem(key);
  }
}

const footerDiv = document.getElementById('localStorageInfo');
footerDiv.innerHTML = `<pre>${JSON.stringify(allData, null, 2)}</pre>`;

// 2(a, b)
fetch('https://jsonplaceholder.typicode.com/posts/21/comments')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('comments');
        data.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.innerHTML = `
                <h3>${comment.name}</h3>
                <div class="email">${comment.email}</div>
                <p>${comment.body}</p>
            `;
            container.appendChild(div);
        });
    })
    .catch(error => console.error('Помилка завантаження коментарів:', error));


// 3()
setTimeout(() => {
  document.getElementById('feedbackModal').style.display = 'flex';
}, 60000);

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('feedbackModal').style.display = 'none';
});

// 4(a) переключеня теми
document.getElementById('time').addEventListener('click', function () {
    const body = document.body;
    const button = this;

    body.classList.toggle('night');
    all-block.night.toggle('night');

    if (body.classList.contains('night')) {
        button.textContent = '☀️';
    } else {
        button.textContent = '🌕';
    }
});


// 4(b) залежить від часу
const now = new Date();
const hours = now.getHours();
const isNight = hours < 7 || hours >= 21;

document.body.classList.toggle('night', isNight);

const button = document.getElementById('time');
button.textContent = isNight ? '☀️' : '🌕';


