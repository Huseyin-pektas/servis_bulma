import { Link } from 'react-router-dom'
import logo from './logo.svg'
import { useSelector } from 'react-redux'

export default function Footer() {
    const categoryState = useSelector((state) => state.categoryState)
    console.log('footer kategorisi', categoryState)
    return <div>
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <img className="mb-2" src={logo} alt="" width="24" height="19" />
                    <small className="d-block mb-3 text-muted">&copy; 2017–2023</small>
                    <hr/>
                    <button type="button" class="btn btn-outline-info">Info</button>
                <button type="button" class="btn btn-outline-light">Light</button>
                <button type="button" class="btn btn-outline-dark">Dark</button>
                </div>
               
                <div className="col-6 col-md">
                    <h5>Kategoriler</h5>
                    <ul className="list-unstyled text-small">

                        {categoryState.categories.length === 0 ? (
                            <li>Loading...</li>
                        ) : (
                            categoryState.categories.map((item, index) => {
                                if (index >= 5) { return null }
                                return (
                                    <li className="mb-1"><Link to={"/category" + item.slug}
                                        className="link-secondary text-decoration-none" >{item.name}</Link></li>
                                )
                            })
                        )}

                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Kaynaklar</h5>
                    <ul className="list-unstyled text-small">
                        {categoryState.categories.length === 0 ? (
                            <li>Loading...</li>
                        ) : (
                            categoryState.categories.map((item, index) => {
                                if (index >= 5 && index <= 11) {
                                    return (
                                        <li className="mb-1"><Link to={"/category" + item.slug}
                                            className="link-secondary text-decoration-none" >{item.name}</Link></li>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        )}

                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Hakkımızda</h5>
                    <ul className="list-unstyled text-small">
                        {categoryState.categories.length === 0 ? (
                            <li>Loading...</li>
                        ) : (
                            categoryState.categories.map((item, index) => {
                                if (index >= 11 && index <= 16) {
                                    return (
                                        <li className="mb-1"><Link to={"/category/detail" + item.slug}
                                            className="link-secondary text-decoration-none" >{item.name}</Link></li>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        )}</ul>
                </div>
            </div>
        </footer>
    </div>
}