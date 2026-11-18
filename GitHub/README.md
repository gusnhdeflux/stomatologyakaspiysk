# Стоматология в Каспийске

Статический демонстрационный сайт. В папке `public` лежит готовая версия сайта. Сборка и установка зависимостей не нужны.

## GitHub и автоматическая публикация

1. Создайте репозиторий на GitHub. Загрузите в его корень папку `public` и этот `README.md` с сохранением структуры вложенных файлов.
2. В [панели Cloudflare](https://dash.cloudflare.com/) откройте **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Выберите репозиторий и задайте параметры.

| Поле | Значение |
| --- | --- |
| Production branch | `main` или фактическая основная ветка репозитория |
| Framework preset | None |
| Build command | `exit 0` |
| Build output directory | `public` |
| Root directory | Оставить пустым |
| Environment variables | Оставить пустым |

4. Нажмите **Save and Deploy**. Адрес сайта появится в панели Cloudflare после публикации.

[Документация Cloudflare для статических сайтов](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)

## Загрузка ZIP напрямую

Для отдельного проекта без автообновления из GitHub выберите **Workers & Pages → Create application → Pages → Drag and drop your files** и загрузите соседний архив `cloudflare-pages.zip`. В архиве `index.html` находится в корне. Для перехода с Direct Upload на Git-интеграцию Cloudflare требует новый проект Pages.

[Документация Cloudflare по прямой загрузке](https://developers.cloudflare.com/pages/get-started/direct-upload/)

## Особенности демо

- Кнопка записи открывает демонстрационное окно. Отправка заявок не подключена.
- Сайт использует Helvetica Neue, если шрифт установлен у посетителя. Запасные шрифты — Helvetica и Arial.
