const dialog = document.querySelector("dialog");
const title = dialog.querySelector("h2");
const copy = dialog.querySelector(".dialog-copy");
const list = dialog.querySelector(".dialog-list");

const panels = {
  services: { title: "Все услуги", items: ["Терапия", "Хирургия", "Ортопедия", "Детский приём"] },
  clinic: { title: "О клинике", text: "Стоматология в Каспийске для взрослых и детей." },
  doctors: { title: "Врачи", text: "Карточки специалистов пока не добавлены в демоверсию." },
  contacts: { title: "Контакты", text: "Номер +7 (928) 555-24-24 приведён в макете. Звонки и WhatsApp в демоверсии не подключены." },
  booking: { title: "Записаться на осмотр", text: "Для демонстрационного сайта онлайн-запись пока не подключена." },
  therapy: { title: "Терапия", text: "Осмотр, диагностика и лечение зубов." },
  surgery: { title: "Хирургия", text: "Консультация стоматолога-хирурга." },
  orthopedics: { title: "Ортопедия", text: "Консультация по восстановлению зубов и протезированию." },
  children: { title: "Детский приём", text: "Осмотр и консультация детского стоматолога." },
};

document.querySelector(".scene").addEventListener("click", event => {
  const trigger = event.target.closest("[data-panel]");
  if (!trigger) return;
  const content = panels[trigger.dataset.panel];
  title.textContent = content.title;
  copy.textContent = content.text ?? "";
  list.replaceChildren(...(content.items ?? []).map(label => {
    const item = document.createElement("li");
    item.textContent = label;
    return item;
  }));
  dialog.showModal();
});

dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    dialog.close();
  }
});
