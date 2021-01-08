import './styles.css';
import {ReactComponent as YouTubeIcon} from './yotube.svg';
import {ReactComponent as LinKedinIcon} from './linkedin.svg';
import {ReactComponent as IstagramIcon} from './instagram.svg';

function Footer(){
    return(
        <footer className="main=footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.yotube.com/c/DevSuperior" target="_new">
                <YouTubeIcon />

                </a>

                <a href="https://linkedin.com/school/devsuperior/" target="_new">
                <LinKedinIcon />
                </a>

                <a href="https://instagram.com/devsuperior.ig/">
                <IstagramIcon />
                </a>

            </div>
        </footer>
    )
}

export default Footer;