import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as GithubLogo } from '../../assets/github-logo.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin-logo.svg';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={3}>
                        <div className={styles.logoColumn}>
                            <a href='https://github.com/94rodrigo' target="_blank" rel="noopener noreferrer" ><GithubLogo className={styles.footerLogo} /></a>
                            <a href='https://www.linkedin.com/in/rodrigo-de-abreu-costa-a97572b5' target="_blank" rel="noopener noreferrer" ><LinkedinLogo className={styles.footerLogo} /></a>
                        </div>
                    </Col>

                    <Col sm={6} className={styles.creditColumn}>
                        {t("developedBy")} Rodrigo Costa, 2024
                    </Col>

                    <Col sm={3}>

                    </Col>
                </Row>

            </Container>
        </footer>
    );
}