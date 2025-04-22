// 테마 토글 버튼과 body 요소 가져오기
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 로컬스토리지에서 저장된 테마 불러오기
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  toggleBtn.textContent = '🌙 다크모드';
} else {
  toggleBtn.textContent = '☀️ 라이트모드';
}

// 클릭 시 테마 토글
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  toggleBtn.textContent = isLight ? '🌙 다크모드' : '☀️ 라이트모드';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// 스크롤 active 처리
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// 헤더 고정
const nav = document.getElementById("main-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

