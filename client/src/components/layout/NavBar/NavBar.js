import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [langBtn, setLangBtn] = useState(true);

  const handleChangeLanguage = lng => {
    i18n.changeLanguage(lng);
    setLangBtn(!langBtn);
  };

  return (
    <div className={styles.navbar}>
      <input className ={styles.input} id="toggle" type="checkbox"/>
      <label className={styles.menuButton} htmlFor="toggle">
        <i className="fa fa-bars"></i>
      </label>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/'><li><span>{t('navBar.about')}</span></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/resume'><li><span>{t('navBar.resume')}</span></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/projects'><li><span>{t('navBar.proj')}</span></li></NavLink>
          <NavLink className={({ isActive }) => isActive ? styles.linkActive : ''} to='/contact'><li><span>{t('navBar.contact')}</span></li></NavLink>
          {!langBtn ? (
          <li onClick={() => {
                  handleChangeLanguage('en');
                }} >
            <span>{t('navBar.language.english')}</span></li>
          ) : (
          <li onClick={() => {
                  handleChangeLanguage('pl');
                }} >
            <span>{t('navBar.language.polish')}</span></li>
          )}
          <li><label  htmlFor="toggle"><span>{t('navBar.close')}</span></label></li>
         </ul>
      </div>
    </div>
  );
};

export default NavBar;