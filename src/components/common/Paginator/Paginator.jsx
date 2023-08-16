import styles from './Paginator.module.css'

function Paginator(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    
    let currentPage = props.currentPage;
    let currentPageFirst = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    let currentPageLast = currentPage + 5;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    return (
        <div className={styles.panel}>
            {slicedPages.map((p) => {
                return <div key={p} className={currentPage === p ? styles.selectedPage : undefined} onClick={() => { props.onPageChange(p) }}>{p}</div>
            })}
        </div> 
    );
}

export default Paginator;