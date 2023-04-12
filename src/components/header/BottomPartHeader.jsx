import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './header.module.scss'

const BottomPartHeader = ({ isFixed }) => {

    return (
        <header className={c.header2} style={{ position: isFixed ? 'fixed' : 'relative' }}>
            <div className={`header__container`}>
                <ul className={c.inner_ul}>
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? c.active : ''}>Правила</NavLink>
                    </li>
                    <li>
                        <NavLink to='list' className={({ isActive }) => isActive ? c.active : ''}>Список участников</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='pamyatka' className={({ isActive }) => isActive ? c.active : ''}>Памятка</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='sostavy-komand' className={({ isActive }) => isActive ? c.active : ''}>Составы команд</NavLink>
                    </li>
                    <li>
                        <NavLink to='results' className={({ isActive }) => isActive ? c.active : ''}>Таблицы / результаты</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export { BottomPartHeader }