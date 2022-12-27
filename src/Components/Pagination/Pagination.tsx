import Spinner from "../Spinner/Spinner"

export default ({ count, data, page, limit, loading, onPageChange }: any):any => {
    const visited_page_size = (limit * (page - 1)) + data.length        
    return data.length ? <div className="d-flex justify-content-center mt-4">
        {loading ? <Spinner /> :
            <nav aria-label="...">
                <ul className="pagination">
                    <li className="page-item btn-round" onClick={() => (page !== 1) ? onPageChange(page - 1) : ""}>
                        <button disabled={(page == 1)} className={`btn "btn-outline-primary`}><i className="fas fa-chevron-left"></i><span className="d-none d-md-block ms-2"></span></button>
                    </li>

                    {((page - 2) > 0) ?
                        <li className="page-item" onClick={() => onPageChange(page - 2)}><span className="page-link">{page - 2}</span></li>
                        : <></>}

                    {((page - 1) > 0) ?
                        <li className="page-item" onClick={() => onPageChange(page - 1)}><span className="page-link">{page - 1}</span></li>
                        : <></>}

                    <li className="page-item active" aria-current="page">
                        <span className="page-link">{page}</span>
                    </li>

                    {(visited_page_size < count) ?
                        <li className="page-item" onClick={() => onPageChange(page + 1)}><span className="page-link">{page + 1}</span></li>
                        : <></>}

                    {((visited_page_size + limit) < count) ?
                        <li className="page-item" onClick={() => onPageChange(page + 2)}><span className="page-link">{page + 2}</span></li>
                        : <></>}

                    <li className="page-item" onClick={() => (visited_page_size < count) ? onPageChange(page + 1) : ""}>
                        <button disabled={!(visited_page_size < count)} className={`btn "btn-outline-primary `}><span className="d-none d-md-block me-2"></span><i className="fas fa-chevron-right" ></i></button>
                    </li>
                </ul>
            </nav>}
    </div> : ""
}