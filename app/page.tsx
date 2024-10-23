'use client';

import { useState, useEffect } from 'react';
import { useStore } from './store/useStore';
import styles from './styles/Home.module.scss';
import Link from 'next/link';
import { Modal } from './components/Modal';

const Home = () => {
  const [name, setName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setName: setGlobalName } = useStore();

  // Сохранение имени в localStorage и Zustand
  const handleSaveName = () => {
    if (name) {
      localStorage.setItem('name', name);
      setGlobalName(name);
    }
  };

  // Загрузка имени из localStorage при загрузке страницы
  useEffect(() => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
      setName(savedName);
      setGlobalName(savedName);
    }
  }, [setGlobalName]);

  // Условие для активации/деактивации кнопок
  const isNameFilled = !!name;

  return (
    <div className={styles.container}>
      <button className="primary-button" onClick={() => setIsModalVisible(true)}>
        Открыть модальное окно
      </button>

      <Modal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <h3>Начать</h3>
        <label>Напишите ваше имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
        />

        <div className={styles.buttons}>
          <Link
            href={isNameFilled ? "/calculator" : "#"}
            className={isNameFilled ? 'primary-button' : 'primary-button disabled'}
            onClick={(e) => {
              if (!isNameFilled) e.preventDefault();
              handleSaveName();
            }}
          >
            Открыть калькулятор
          </Link>

          <Link
            href={isNameFilled ? "/password-generator" : "#"}
            className={isNameFilled ? 'primary-button' : 'primary-button disabled'}
            onClick={(e) => {
              if (!isNameFilled) e.preventDefault();
              handleSaveName();
            }}
          >
            Открыть генератор
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
