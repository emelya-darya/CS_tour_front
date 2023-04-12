import logo from '../../assets/img/ekm_logo.svg'

import c from './footer.module.scss'


const now = new Date()
const month = String(now.getMonth() + 1)

const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className='footer__container'>
                <div className={c.inner}>
                    <span>
                        ООО «ЭКМ ХОЛДИНГ», корпоративный турнир по CS
                        {/* {`${now.getDate()}.${month.length == 1 ? '0' + month : month}.${now.getFullYear()}`} */}
                    </span>
                    <div className={c.imgWrapper}>
                        <img src={logo} alt='ЭКМ Холдинг' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }