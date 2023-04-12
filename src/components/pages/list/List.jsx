import React from 'react'
import shortid from 'shortid'


import c from './list.module.scss'

const MemberBlockForTable = ({ n, fio, position, time, company, nickname, comm_name }) => {
    return (
        <tr>
            <td className={c.number}>{n}</td>
            <td>{fio}</td>
            <td>{position}</td>
            <td>{time}</td>
            <td>{company}</td>
            <td>{nickname}</td>
            <td>{comm_name}</td>
        </tr>
    )
}

const MemberBlockForList = ({ n, fio, position, time, company, nickname, comm_name }) => {
    return (
        <li>
            <p>
                <span>ФИО: </span> <span className={c.li_value}>{fio}</span>
            </p>
            <p>
                <span>Должность: </span> <span className={c.li_value}>{position}</span>
            </p>
            <p>
                <span>Часовой пояс: </span> <span className={c.li_value}>{time}</span>
            </p>
            <p>
                <span>Компания: </span> <span className={c.li_value}>{company}</span>
            </p>
            <p>
                <span>Никнейм: </span> <span className={c.li_value}>{nickname}</span>
            </p>
            <p>
                <span>Версия названия команды: </span> <span className={c.li_value}>{comm_name}</span>
            </p>
        </li>
    )
}

const List = ({ membersData }) => {

    //const [membersData, setMembersData] = React.useState([])

    // React.useEffect(() => {
    //     console.log('рендер list')

    //     fetch('http://localhost:9000/list')
    //         .then(response => response.json())
    //         .then(response => setMembersData(response))
    //         .catch(err => alert(err.message))
    // }, [])

    const membersJSXTable = membersData.map((m, i) => <MemberBlockForTable
        key={shortid.generate()}
        n={i + 1}
        fio={m.fio}
        position={m.position}
        time={m.time}
        company={m.company}
        nickname={m.nickname}
        comm_name={m.comm_name}
    />)

    const membersJSXList = membersData.map((m, i) => <MemberBlockForList
        key={shortid.generate()}
        n={i + 1}
        fio={m.fio}
        position={m.position}
        time={m.time}
        company={m.company}
        nickname={m.nickname}
        comm_name={m.comm_name}
    />)


    return (
        <div className={`list__container ${c.container}`}>
            <h1>Список зарегистрировавшихся участников</h1>
            <div className={c.membersWrapper}>
                {membersData.length
                    ? <>
                        <table className={c.members_table_list}>
                            <tbody>
                                <tr className={c.titlesRow}>
                                    <td>№</td>
                                    <td>ФИО</td>
                                    <td>Должность</td>
                                    <td>Часовой пояс</td>
                                    <td>Компания</td>
                                    <td>Никнейм</td>
                                    <td>Версия названия команды</td>
                                </tr>
                                {membersJSXTable}
                            </tbody>
                        </table>
                        <ol className={c.members_ol_list}>
                            {membersJSXList}
                        </ol>
                    </>

                    : <p className={c.noMembers}>Пока нет зарегистрировавшихся участников</p>
                }
            </div>

        </div>
    )
}

export { List }