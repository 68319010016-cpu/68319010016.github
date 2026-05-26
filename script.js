// 1. ระบบสลับโหมด Dark / Light Mode
const themeToggle = document.getElementById('themeToggle');
const toggleIcon = themeToggle.querySelector('i');
const toggleText = themeToggle.querySelector('span');

themeToggle.addEventListener('click', () => {
  // ตรวจสอบสถานะ theme ปัจจุบันจากแอตทริบิวต์ data-theme ของ <html>
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleIcon.className = 'fas fa-moon';
    toggleText.innerText = 'โหมดมืด';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleIcon.className = 'fas fa-sun';
    toggleText.innerText = 'โหมดสว่าง';
  }
});

// 2. ระบบ Scroll Reveal (แอนิเมชันเนื้อหาค่อยๆ เลื่อนขึ้นเมื่อ Scroll มาเจอ)
function revealElements() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 100; // ระยะความสูงพิกเซลที่ยอมให้เห็นก่อนเริ่มแสดงผล

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// ตรวจจับ Event การตรวจเลื่อนหน้าจอ และการโหลดหน้าเว็บเสร็จสิ้น
window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);