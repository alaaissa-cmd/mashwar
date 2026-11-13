// ✏️ غيّري الرقم لرقمك: بدون + وبدون أصفار (مثال سعودي: 9665XXXXXXXX)
const MY_NUMBER = "963936428941";

const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const placeInput = document.getElementById("place");
const placeMsg = document.getElementById("placeMsg");
const sendBtn = document.getElementById("sendBtn");
const result = document.getElementById("result");

// لا تسمح باختيار تاريخ قديم
dateInput.min = new Date().toISOString().split("T")[0];

// أول ما تحاول تختار المكان تطلع الرسالة
function blockPlace() {
  placeInput.value = "";
  placeInput.blur();
  placeMsg.textContent = "ما خصك أنا بحدد 😎";
  placeMsg.style.animation = "none";
  void placeMsg.offsetWidth; // إعادة تشغيل الأنيميشن
  placeMsg.style.animation = "pop 0.3s";
}

placeInput.addEventListener("focus", blockPlace);
placeInput.addEventListener("input", blockPlace);

// إرسال الإجابات لك عبر واتساب
sendBtn.addEventListener("click", () => {
  const date = dateInput.value;
  const time = timeInput.value;

  if (!date || !time) {
    result.style.color = "#e03131";
    result.textContent = "حددي اليوم والوقت أول 😅";
    return;
  }

  const msg =
    `موعد المشوار 🚗\n` +
    `📅 اليوم: ${date}\n` +
    `⏰ الوقت: ${time}\n` +
    `📍 المكان: عليّ أنا 😎`;

  result.style.color = "#2b8a3e";
  result.textContent = "تم! جاري إرسال ردك 💌";

  window.open(`https://wa.me/${MY_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
});