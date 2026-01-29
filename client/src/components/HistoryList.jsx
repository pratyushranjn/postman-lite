import { useEffect, useState } from "react";
import axios from "axios";

export default function HistoryList() {
    const [history, setHistory] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:5000/history?page=${page}`)
            .then(res => {
                setHistory(res.data.history);
                setTotalPages(res.data.totalPages);
            });
    }, [page]);

    return (
        <div className="history-box">
      
            {history.map(h => (
                <div className="history-item" key={h.id}>
                    <span>{h.method}</span>
                    <span>{h.url}</span>
                </div>
            ))}
            <div className="pagination-btn">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
                <span>Page {page} of {totalPages}</span>
                <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>Next</button>
            </div>
        </div>

    );
}
