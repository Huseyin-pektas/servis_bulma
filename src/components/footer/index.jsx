import { Link } from 'react-router-dom'
import logo from './logo.svg'

export default function Footer() {
    return <div> 
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
            <div className="col-12 col-md">
                <img className="mb-2" src={logo} alt="" width="24" height="19" />
                <small className="d-block mb-3 text-muted">&copy; 2017–2023</small>
            </div>
            <div className="col-6 col-md">
                <h5>Özellikler</h5>
                <ul className="list-unstyled text-small">
                    <li className="mb-1"><Link to={"/"} className="link-secondary text-decoration-none" >Cool stuff</Link></li>
                    <li className="mb-1"><Link to={""} className="link-secondary text-decoration-none" >Random feature</Link></li>
                    <li className="mb-1"><Link to={""} className="link-secondary text-decoration-none" >Team feature</Link></li>
                    <li className="mb-1"><Link className="link-secondary text-decoration-none" >Stuff for developers</Link></li>
                    <li className="mb-1"><Link to={''} className="link-secondary text-decoration-none" >Another one</Link></li>
                    <li className="mb-1"><Link to={""} className="link-secondary text-decoration-none" >Last time</Link></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Kaynaklar</h5>
                <ul className="list-unstyled text-small">
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Resource</a></li>
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Resource name</a></li>
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Another resource</a></li>
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Final resource</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Hakkımızda</h5>
                <ul className="list-unstyled text-small">
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Team</a></li>
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Locations</a></li>
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Privacy</a></li>
                    <li className="mb-1"><a className="link-secondary text-decoration-none" >Terms</a></li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
}