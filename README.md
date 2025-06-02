# Multi step form — многошаговая форма с сохранением и отправкой данных

[💻 Демо](https://multi-step-form-five-omega.vercel.app)  
![](form-capture.gif)

## 🛠️ Стек

- **React** — компоненты, управление состоянием, маршрутизация шагов
- **SCSS** — модульная стилизация, адаптивность
- **JSON Server** — фейковый backend для отправки данных

## 📄 Описание проекта

Форма регистрации/покупки в 4 шага с сохранением данных и UX-навигацией:

1. **Personal Info** — ввод имени, email, телефона
2. **Select Plan** — выбор тарифа
3. **Add-ons** — доп. опции
4. **Summary & Confirmation** — финальный просмотр и подтверждение

Форма валидирует ввод, блокирует переходы при ошибках и отправляет итоговые данные на фейковый сервер (JSON Server), имитируя backend.

## 🚀 Как запустить

```bash
npm install
npm start      # запускает dev-сервер на http://localhost:3000
npm run build  # сборка проекта для продакшена

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

