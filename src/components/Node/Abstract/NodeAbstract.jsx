import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../../../components/Layout.module.css';

const NodeAbstract = () => {
  // Стан для зберігання відкритих аккордеонів (індекси)
  const [activeAccordions, setActiveAccordions] = useState([]);

  const toggleAccordion = (index) => {
    // Якщо індекс є в масиві, видаляємо його, інакше додаємо
    setActiveAccordions((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className={css.generalbox}>
      <ul className={css.leftbox}>
        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(0)}>
          Основи Node.js
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(0) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Вступ</Link></li>
            <li><Link to="#">Модульна система Node.js</Link></li>
            <li><Link to="#">Робота з файлами</Link></li>
            <li><Link to="#">Створення консольних додатків</Link></li>
          </ul>
        </li>
        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(1)}>
          Express
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(1) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Введення</Link></li>
            <li><Link to="#">Проміжне ПЗ</Link></li>
            <li><Link to="#">Передача даних на сервер</Link></li>
            <li><Link to="#">Роутінг у додатку</Link></li>
            <li><Link to="#">Приклад програм</Link></li>
            <li><Link to="#">Змінні оточення</Link></li>
            <li><Link to="#">Логування</Link></li>
            <li><Link to="#">Що таке REST</Link></li>
            <li><Link to="#">Основні методи HTTP</Link></li>
            <li><Link to="#">CORS</Link></li>
            <li><Link to="#">Формування URL для REST API</Link></li>
            <li><Link to="#">Приклад REST API програми</Link></li>
          </ul>
        </li>

        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(3)}>
          REST API. MongoDB и Mongoose
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(3) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Основи MongoDB</Link></li>
            <li><Link to="#">MongoDB GUI</Link></li>
            <li><Link to="#">Основні команди MongoDB</Link></li>
            <li><Link to="#">Mongoose</Link></li>
            <li><Link to="#">Підключення Mongoose</Link></li>
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(4)}>
          Аутентифікація
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(4) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Аутентифікація за допомогою JSON Web Token (JWT)</Link></li>
          </ul>
        </li>

        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(5)}>
          Робота із зображеннями. Тестування
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(5) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Вступ. Завантаження файлів</Link></li>
            <li><Link to="#">Multer</Link></li>
            <li><Link to="#">Вступ до тестування</Link></li>
            <li><Link to="#">Бібліотеки для тестування</Link></li>
            <li><Link to="#">Jest</Link></li>
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(6)}>
          Пошта. Вебсокети
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(6) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Пакет Nodemailer</Link></li>
            <li><Link to="#">Сервіс SendGrid</Link></li>
            <li><Link to="#">Docker</Link></li>
            <li><Link to="#">WebSockets</Link></li>
            <li><Link to="#">Socket.io</Link></li>
            <li><Link to="#">Створюємо чат</Link></li>
          </ul>
        </li>


        <li className={css.module}>
          <Link to="#" onClick={() => toggleAccordion(7)}>
          Додаткові матеріали
          </Link>
          <ul
            className={css.moduleItems}
            style={{ maxHeight: activeAccordions.includes(7) ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}
          >
            <li><Link to="#">Простий http сервер</Link></li>
            <li><Link to="#">Web сервер на Node.js</Link></li>
            <li><Link to="#">Статичні ресурси</Link></li>
            <li><Link to="#">Шаблонізатори. EJS</Link></li>
            <li><Link to="#">Робота з cookie</Link></li>
            <li><Link to="#">Робота із сесією</Link></li>
            <li><Link to="#">Робота з масивами</Link></li>
            <li><Link to="#">Драйвер MongoDB</Link></li>
            <li><Link to="#">REST API​</Link></li>
            <li><Link to="#">Аутентифікація з логіном та паролем</Link></li>
            <li><Link to="#">Formidable</Link></li>
            <li><Link to="#">Робота з базами SQL</Link></li>
            <li><Link to="#">Реляційні бази даних</Link></li>
            <li><Link to="#">Типи даних</Link></li>
          </ul>
        </li>


        

      </ul>
      <div className={css.rightbox}>
        <Outlet />
      </div>
    </div>
  );
};

export default NodeAbstract;

