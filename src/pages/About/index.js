import './About.css';
import ReactMarkdown from "react-markdown";
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <Container>
            <div className="markdown-container">
                <ReactMarkdown>
                    {t("textAboutPage")}
                </ReactMarkdown>
            </div>
        </Container>
    )
}