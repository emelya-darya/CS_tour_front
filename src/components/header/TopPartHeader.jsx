import logo from '../../assets/img/logo.webp'
import bgHeader1 from '../../assets/img/headerBg.webp'
import headerLettImg from '../../assets/img/headerLett.png'
// import bgHeader2 from '../../assets/img/headerBg2.jpg'
// import bgHeader3 from '../../assets/img/headerBg3.jpg'
import c from './header.module.scss'

const TopPartHeader = ({ setIsOpenModal }) => {
    return (
        <header className={c.header1} style={{
            backgroundImage: `url('${bgHeader1}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: '60% auto'
        }}>
            <div className={`header__container ${c.inner}`}>
                <div className={c.top_row}>
                    <div className={c.left}>
                        <div className={c.imgWr}>
                            <img src={logo} alt='ЭКМ Холдинг' />
                        </div>
                    </div>

                    <div className={c.right} >
                        <img src={headerLettImg} alt='Корпоративный турнир ООО ЭКМ Холдинг'/>
                        {/* <p className={c.CS_lettering}>
                            Counter-Strike<sup>тм</sup>
                        </p>
                        <p className={c.supLettering}>Корпоративный турнир ООО «ЭКМ ХОЛДИНГ» </p> */}
                    </div>
                </div>

                <div className={c.bottom_row}>
                    <a href='https://all-cs.ru/ ' target='_blank' className={c.borderBtnWrap}>
                        <div className={c.btn_inner}>
                            <span>Скачать ИГРУ </span>
                        </div>
                    </a>
                    <div className={`${c.borderBtnWrap} ${c.borderBtnWrap_middle}`} onClick={() => { setIsOpenModal(true) }}>
                        <div className={`${c.btn_inner} ${c.btn_inner_middle}`}>
                            <span>Зарегистрироватся </span>
                        </div>
                    </div>
                    <a href='https://discord.com/download' target='_blank' className={c.borderBtnWrap}>
                        <div className={c.btn_inner}>
                            <span>Скачать Discord </span>
                        </div>
                    </a>
                </div>

                {/* 
                <ul className={c.points}>
                    <li>
                        Кабельно-<br/>
                        проводниковая<br/> продукция&nbsp;
                        <span className={c.gradText}>
                            Инсил<sup>®</sup>, КуПе<sup>®</sup>
                        </span>
                    </li>
                    <li>
                        Кабеленесущие<br/> системы&nbsp;<br/>
                        <span className={c.gradText}>
                            СКИНЕР<sup>®</sup>
                        </span>
                    </li>
                    <li>
                        Огнестойкие<br/> кабельные<br/> линии&nbsp;
                        <span className={c.gradText}>
                            СКИНЕР<sup>®</sup>
                        </span>
                    </li>
                    <li>
                        Светотехническое<br/> оборудование&nbsp;<br/>
                        <span className={c.gradText}>
                            ЭСКИЗ
                        </span>
                    </li>
                    <li>
                        Системы<br/> промышленного<br/> электрообогрева
                    </li>
                </ul> */}
            </div>
        </header >
    )
}

export { TopPartHeader }