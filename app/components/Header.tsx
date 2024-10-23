'use client'

import { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => {
  const { name } = useStore();
  const [localName, setLocalName] = useState<string | null>(null);
  const firstLetter = (name || localName) ? (name || localName)?.charAt(0)?.toUpperCase() : '';

  // Используем useEffect для работы с localStorage только на клиенте
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('name');
      setLocalName(storedName);
    }
  }, []); 

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/password-generator">Генератор пароля</Link>
        <Link href="/calculator">Калькулятор</Link>
      </nav>

      <div className={styles.userInfo}>
        <span>{name || localName || 'Ваше имя'}</span>
        {(name || localName) && <span className={styles.initial}>{firstLetter}</span>}
      </div>
    </header>
  );
};

export default Header;
