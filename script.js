// Открытие и закрытие бокового меню
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Темная/светлая тема
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
});

// Чат поддержка
const chatCircle = document.querySelector('.chat-circle');
const chatBox = document.querySelector('.chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

chatCircle.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

sendBtn.addEventListener('click', () => {
    let userMessage = chatInput.value;
    if (userMessage.trim() !== '') {
        let botResponse = `Вы сказали: ${userMessage}`;
        alert(botResponse); // В будущем можно заменить на реальный чат-бот
        chatInput.value = '';
    }
});

// Анимация падающих капель
function createDrop() {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    document.body.appendChild(drop);
    drop.style.left = Math.random() * window.innerWidth + 'px';
    drop.style.animationDuration = Math.random() * 2 + 1 + 's';
    setTimeout(() => drop.remove(), 2000);
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(createDrop, i * 100);
    }
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
    });
});


});
