import React from 'react';

import cl from './Footer.module.css';

// Компонент подвала
const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__block}>
                <h3 className={cl.footer__heading}>Политика сайта</h3>
                <ul className={cl.footer__list}>
                    <li><a href="#">Политика конфиденциальности</a></li>
                    <li><a href="#">Условия использования</a></li>
                </ul>
            </div>
            <div className={cl.footer__block}>
                <h3 className={cl.footer__heading}>Контакты</h3>
                <ul className={cl.footer__list}>
                    <li>Телефон: 8-800-555-35-35</li>
                    <li>Email: XTNsGames@example.com</li>
                </ul>
            </div>
            <div className={cl.footer__bottom}>
                <p>&copy; 2024 Все права защищены</p>
            </div>
        </footer>
    )
}

export default Footer;