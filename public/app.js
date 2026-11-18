const hero = document.querySelector(".hero");
const track = document.querySelector(".service-track");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const panel = document.querySelector(".panel");
const allServices = [...document.querySelectorAll(".highlights li")].map(item => item.textContent);

const panels = {
  therapy: { title: "Терапия", services: ["Анестезия", "Снятие острой боли", "Лечение кариеса"] },
  surgery: { title: "Хирургия", copy: "Подход к хирургическому лечению определяет врач после осмотра." },
  orthopedics: { title: "Ортопедия", copy: "Варианты восстановления зубов врач подбирает после осмотра." },
  services: { title: "Перечень услуг", services: allServices },
  booking: { title: "Запись на осмотр", copy: "Это демонстрационная страница. Онлайн-запись здесь пока недоступна." },
};

hero.addEventListener("click", event => {
  const trigger = event.target.closest("[data-panel]");
  if (!trigger) return;

  const content = panels[trigger.dataset.panel];
  panel.querySelector("h2").textContent = content.title;
  panel.querySelector(".panel-copy").textContent = content.copy ?? "";
  panel.querySelector(".panel-list").replaceChildren(...(content.services ?? []).map(service => {
    const item = document.createElement("li");
    item.textContent = service;
    return item;
  }));
  panel.showModal();
  updateMotion();
});

const slotCount = track.children.length - 1;
const hold = 2900;
const step = 4050;
const loop = step * slotCount;
const keyframes = [];
for (let index = 0; index < slotCount; index++) {
  const transform = `translate3d(0, ${(index - slotCount) * 100 / track.children.length}%, 0)`;
  keyframes.push({ transform, offset: index * step / loop });
  keyframes.push({
    transform,
    offset: (index * step + hold) / loop,
    easing: "cubic-bezier(.45, 0, .4, 1)",
  });
}
keyframes.push({ transform: `translate3d(0, 0, 0)`, offset: 1 });

const ticker = track.animate(keyframes, { duration: loop, iterations: Infinity });

function updateMotion() {
  const shouldPause = reducedMotion.matches || document.hidden || panel.open;
  hero.toggleAttribute("data-paused", shouldPause);

  if (reducedMotion.matches) {
    ticker.pause();
    ticker.currentTime = 0;
  } else if (shouldPause) {
    ticker.pause();
  } else {
    ticker.play();
  }
}

panel.addEventListener("close", updateMotion);
reducedMotion.addEventListener("change", updateMotion);
document.addEventListener("visibilitychange", updateMotion);
updateMotion();
