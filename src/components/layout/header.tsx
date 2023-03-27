import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav className="mx-auto container mb-10">
            <ul className="flex items-center">
                <li className="logo">
                    <Link to={"/"}>
                        <div>
                            <span>gn</span>
                            <span>Studio</span>
                        </div>
                        <h1>News</h1>
                    </Link>
                </li>
                <li>
                    <h1>wybór kafelki/lista</h1>
                </li>
                <li>
                    <h1>
                        Popup z opisem co sprawiło mi najwięcekj problemów wykorzystaj do
                        tego Portal
                    </h1>
                </li>
            </ul>
            <hr />
        </nav>
    );
}
