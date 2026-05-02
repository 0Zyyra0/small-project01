// اسکریپت ساده برای smooth scroll و انیمیشن fade-in بخش‌ها
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll برای لینک‌های نویگیشن
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // انیمیشن fade-in هنگام اسکرول (برای جذابیت سایت موسیقی)
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // افکت موسیقی: تغییر رنگ هدر هنگام اسکرول
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });

    // بهبود برای نویگیشن طولانی: کوچک کردن فونت در موبایل
    if (window.innerWidth <= 768) {
        document.querySelector('.nav-menu').style.fontSize = '0.9rem';
    }
});