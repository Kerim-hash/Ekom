'use client';

import { useState, useEffect } from 'react';
import styles from './Calculator.module.scss';
import Header from '../components/Header';

export default function Home() {
    const [display, setDisplay] = useState('');
    const [prevOperation, setPrevOperation] = useState(''); 

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            if (!isNaN(Number(key)) || key === '.') {
                handleClick(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                handleOperator(key);
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'Backspace') {
                deleteLast();
            } else if (key === 'Escape') {
                clearDisplay();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [display]);

    const handleClick = (value: string) => {
        // Не допускаем два оператора подряд
        if (isOperator(display.slice(-1)) && isOperator(value)) return;
        setDisplay((prev) => prev + value);
    };

    const isOperator = (char: string) => ['+', '-', '*', '/'].includes(char);

    const calculate = () => {
        try {
            const result = eval(display).toString();
            setPrevOperation(display + '='); 
            setDisplay(result);
        } catch {
            setDisplay('Error');
        }
    };

    const handleOperator = (operator: string) => {
        if (display && !isOperator(display.slice(-1))) {
            setPrevOperation(display + operator); 
            setDisplay(display + operator);
        }
    };

    const deleteLast = () => {
        setDisplay(display.slice(0, -1));
    };

    const clearDisplay = () => {
        setDisplay('');
        setPrevOperation(''); // Очищаем предыдущую операцию при сбросе
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.calculator}>
                    <div className={styles.prevOperation}>
                        {prevOperation}
                    </div>
                    <div className={styles.display}>
                        {display || '0'}
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.gray} onClick={clearDisplay}>C</button>
                        <button className={styles.gray} onClick={() => handleOperator('/')}>÷</button>
                        <button className={styles.gray} onClick={() => handleOperator('%')}>%</button>
                        <button className={styles.blue} onClick={() => handleOperator('/')}>÷</button>
                        <button onClick={() => handleClick('7')}>7</button>
                        <button onClick={() => handleClick('8')}>8</button>
                        <button onClick={() => handleClick('9')}>9</button>
                        <button className={styles.blue} onClick={() => handleOperator('*')}>×</button>
                        <button onClick={() => handleClick('4')}>4</button>
                        <button onClick={() => handleClick('5')}>5</button>
                        <button onClick={() => handleClick('6')}>6</button>
                        <button className={styles.blue} onClick={() => handleOperator('+')}>+</button>
                        <button onClick={() => handleClick('1')}>1</button>
                        <button onClick={() => handleClick('2')}>2</button>
                        <button onClick={() => handleClick('3')}>3</button>
                        <button className={styles.blue} onClick={() => handleOperator('-')}>−</button>
                        <button onClick={() => handleClick('.')}>.</button>
                        <button onClick={() => handleClick('0')}>0</button>
                        <button onClick={deleteLast}>&#9003;</button>
                        <button className={styles.blue} onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    );
}
