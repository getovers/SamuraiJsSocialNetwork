import { useState } from 'react';
import styles from './Paginator.module.css'

function Paginator({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    //previos solution
    // let currentPageFirst = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    // let currentPageLast = currentPage + 5;
    // let slicedPages = pages.slice(currentPageFirst, currentPageLast);
    
    return (
        <div className={styles.panel}>
            { portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1)} }>Prev</button>}
            {pages
                .filter(p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
                .map((p) => {
                return <div key={p} className={currentPage === p ? styles.selectedPage : undefined} onClick={() => { onPageChange(p) }}>{p}</div>
            })}
            { portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1)} }>Next</button>}
        </div> 
    );
}

export default Paginator;