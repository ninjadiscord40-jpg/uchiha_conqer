// حدد تاريخ ووقت الافتتاح هنا
const targetDate = new Date("March 10, 2026 12:00:00").getTime();

const timer = setInterval(function() {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " يوم - " +
    hours + " ساعة - " +
    minutes + " دقيقة - " +
    seconds + " ثانية ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "تم فتح السيرفر!";

    const btn = document.getElementById("gameButton");
    btn.disabled = false;
    btn.innerHTML = "الدخول إلى اللعبة";
    btn.style.backgroundColor = "#00ffcc";
    btn.style.cursor = "pointer";
  }

}, 1000);
