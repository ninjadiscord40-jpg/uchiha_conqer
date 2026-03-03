const targetDate = new Date("March 10, 2026 23:59:59").getTime();

const timer = setInterval(function() {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " يوم " + hours + " ساعة "
    + minutes + " دقيقة " + seconds + " ثانية ";

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "انتهى الوقت!";
  }

}, 1000);
