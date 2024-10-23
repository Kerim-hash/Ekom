import React from 'react';
import styles from '../styles/modal.module.scss';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    // Закрытие модального окна при нажатии на задний фон
    //   const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if ((e.target as HTMLElement).classList.contains(styles.modalBackground)) {
    //       onClose();
    //     }
    //   };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};
