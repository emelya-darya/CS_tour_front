import React from 'react'

import { BottomPartHeader } from './BottomPartHeader'
import { TopPartHeader } from './TopPartHeader'
import { Registration } from './registration/Registration'



const Header = ({ registerNewMember, membersData, setMembersData }) => {
    const [isFixed, setIsFixed] = React.useState(false)

    const handleScrollandResize = () => {
        if (window.scrollY > 120 || window.innerWidth < 992) setIsFixed(true)
        else setIsFixed(false)
    }

    // React.useEffect(() => {
    //     handleScrollandResize()
    //     document.addEventListener('scroll', handleScrollandResize)
    //     window.addEventListener('resize', handleScrollandResize)

    //     return () => {
    //         document.removeEventListener('scroll', handleScrollandResize)
    //         window.removeEventListener('resize', handleScrollandResize)
    //     }
    // }, [])

    const [isOpenModal, setIsOpenModal] = React.useState(false)

    return (
        <>
            <TopPartHeader setIsOpenModal={setIsOpenModal} />
            <BottomPartHeader isFixed={isFixed} />
            <Registration isFixed={isFixed} registerNewMember={registerNewMember} membersData={membersData} setMembersData={setMembersData} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </>
    )
}

export { Header }