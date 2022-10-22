import { BsWhatsapp } from 'react-icons/bs'
import './WhatsApp.scss'

export const WhatsApp = () => {
    return (
        <section id="sectionWhatsapp">
            <a href="https://api.whatsapp.com/send?phone=5492616307131" target="_blank" >
                <BsWhatsapp className="whatsapp"/>
            </a>
        </section>
    )
}