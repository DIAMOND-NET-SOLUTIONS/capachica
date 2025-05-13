import Logo from '/logo.svg'
import { AlignJustify } from 'lucide-react';
function Header() {
    return (
        <>
            <header>
                <a href="">
                    <img src={Logo} alt="" />
                </a>
                <div>
                    <div>
                        <div>
                            <AlignJustify />
                        </div>
                        <ul>
                            <li><a href="">La Escuela</a></li>
                            <li><a href="">Maestrías</a></li>
                            <li><a href="">Doctorados</a></li>
                            <li><a href="">Inversión</a></li>
                        </ul>
                        <div></div>
                    </div>
                    <div>
                        <ul>
                            <li><a href="">La Escuela</a></li>
                            <li><a href="">Maestrías</a></li>
                            <li><a href="">Doctorados</a></li>
                            <div>
                                <AlignJustify />
                            </div>
                        </ul>
                        <div></div>
                    </div>
                </div>
                <div>

                </div>
            </header>
        </>
    )
}

export default Header