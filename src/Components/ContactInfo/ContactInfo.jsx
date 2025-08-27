import './ContactInfo.css'
import LoganHikingPicture from '../../assets/Images/Logan-picture-bell-canyon.jpg'

const ContactInfo = () => {

    return (
        <div className="contact_info_container">
            <div className="contact_text_container">
                <h2 className="contact_text_one">Hire Me.</h2>
                <p className="description">I look forward to working with you! <br />
                    <a className="contact_link" href="tel:+8018858699">Phone: 801.885.8699</a> <br />
                    <a className="contact_link" href="mailto:loganbanning2@gmail.com">Email: loganbanning2@gmail.com</a>
                </p>
            </div>
            <img className="hiking_picture" src={LoganHikingPicture} alt="hiking picture of me" />
        </div>
    )
}

export default ContactInfo;