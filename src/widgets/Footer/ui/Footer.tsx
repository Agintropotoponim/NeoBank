import { NavLink } from 'react-router-dom'
import { CONTENT_FOOTER_LINKS } from '../../../shared/consts/contentFooterLinks'
import { HorizontalRule } from '../../../shared/ui/HorizontalRule'
import { emailAdress, phoneNumber } from '../const/contactData'
import { logo } from '../const/logo'
import classes from './Footer.module.scss'

export const Footer: React.FC = () => {

    const footerLinksContent = CONTENT_FOOTER_LINKS.map((item) => (
        <li key={item.title}>
            <NavLink
                to={item.link}
                end
                className={classes['footer-container__link-item']}>
                {item.title}
            </NavLink>
        </li>
    ))

    return (
        <footer className={classes['footer']}>
            <div className={classes['footer-container']}>
                <section className={classes['footer-container__upper-section']}>
                    <img src={logo} alt="logo" className={classes['footer-container__logo']} />
                    <p className={classes['footer-container__contact-data']}>
                        <span className={classes['footer-container__contact-data-phone']}>
                            {phoneNumber}
                        </span>
                        <span className={classes['footer-container__contact-data-email']}>
                            {emailAdress}
                        </span>
                    </p>
                </section>
                <section >
                    <ol className={classes['footer-container__links']}>
                        {footerLinksContent}
                    </ol>
                </section>
                <HorizontalRule />
                <section className={classes['footer-container__cookies']}>
                    We use cookies to personalize our services and improve the user experience of our website.
                    Cookies are small files containing information about previous visits to a website.
                    If you do not want to use cookies, please change your browser settings
                </section>
            </div>
        </footer >
    )
}