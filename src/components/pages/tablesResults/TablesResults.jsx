import tourn_table from '../../../assets/img/tourn_table.webp'

import c from './tablesResults.module.scss'



const TablesResults = () => {
    return <div className={`tablesResults__container ${c.container}`}>
        <div className={c.results}>
            <h1>Результаты турнира</h1>
            <p>Результаты пока недоступны</p>
        </div>
        <div className={c.table}>
            <h2>Общий вид турнирной таблицы</h2>
            <div className={c.imgWr}>
                <img src={tourn_table} alt='Турнирная таблица' />
            </div>
        </div>
    </div>
}

export { TablesResults }