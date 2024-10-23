'use client'

import { useState } from 'react';
import Header from '../components/Header'; 
import styles from './PasswordGenerator.module.scss'; 

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [useUppercase, setUseUppercase] = useState(false);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(false);
    const [avoidDuplicates, setAvoidDuplicates] = useState(false);
    const [passwords, setPasswords] = useState<string[]>([]);

    const generatePassword = () => {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '%*?@#$~';
        let characters = '';

        if (useUppercase) characters += upper;
        if (useLowercase) characters += lower;
        if (useNumbers) characters += numbers;
        if (useSymbols) characters += symbols;

        if (characters.length === 0) return;

        let password = '';
        const usedCharacters: Set<string> = new Set();

        while (password.length < length) {
            const character = characters.charAt(Math.floor(Math.random() * characters.length));
            if (avoidDuplicates && usedCharacters.has(character)) continue;
            usedCharacters.add(character);
            password += character;
        }

        setPasswords((prev) => [...prev, password]);
    };

    const copyToClipboard = (password: string) => {
        navigator.clipboard.writeText(password);
        alert('Пароль скопирован: ' + password);
    };

    const isAnyOptionSelected = useUppercase || useLowercase || useNumbers || useSymbols;

    const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        // Limit value to be between 1 and 20
        if (value >= 1 && value <= 20) {
            setLength(value);
        } else if (value < 1) {
            setLength(1);
        } else if (value > 20) {
            setLength(20);
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.form}>
                        <h1>Генератор паролей</h1>
                        <label>
                            Длина пароля:
                            <input
                                type="number"
                                value={length}
                                onChange={handleLengthChange}
                                min={1}
                                max={20}
                                onBlur={(e) => {
                                    const value = Number(e.target.value);
                                    if (value < 1) setLength(1);
                                    if (value > 20) setLength(20);
                                }}
                            />
                        </label>
                        <div className={styles.checkboxes}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useUppercase}
                                    onChange={(e) => setUseUppercase(e.target.checked)}
                                />
                                Использовать прописные буквы
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useLowercase}
                                    onChange={(e) => setUseLowercase(e.target.checked)}
                                />
                                Использовать строчные буквы
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useNumbers}
                                    onChange={(e) => setUseNumbers(e.target.checked)}
                                />
                                Использовать цифры
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useSymbols}
                                    onChange={(e) => setUseSymbols(e.target.checked)}
                                />
                                Использовать символы (% * ? @ # $ ~)
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={avoidDuplicates}
                                    onChange={(e) => setAvoidDuplicates(e.target.checked)}
                                />
                                Избегать повторения символов
                            </label>
                        </div>
                        <button 
                            className='primary-button' 
                            onClick={generatePassword}
                            disabled={!isAnyOptionSelected} 
                        >
                            Сгенерировать пароль
                        </button>
                    </div>

                    <div className={styles.passwordList}>
                        {passwords.map((password, index) => (
                            <div key={index} className={styles.passwordItem}>
                                <span className={styles.password}>{password}</span>
                                <button className={styles.copyButton} onClick={() => copyToClipboard(password)}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9219 0.390015C23.1406 0.390015 24.1719 1.42126 24.1719 2.64001V16.14C24.1719 17.4056 23.1406 18.39 21.9219 18.39H8.42188C7.15625 18.39 6.17188 17.4056 6.17188 16.14V2.64001C6.17188 1.42126 7.15625 0.390015 8.42188 0.390015H21.9219ZM8.42188 19.89H18.1719V22.14C18.1719 23.4056 17.1406 24.39 15.9219 24.39H2.42188C1.15625 24.39 0.171875 23.4056 0.171875 22.14V8.64001C0.171875 7.42126 1.15625 6.39001 2.42188 6.39001H4.67188V16.14C4.67188 18.2494 6.3125 19.89 8.42188 19.89Z" fill="#3B75A2" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PasswordGenerator;
