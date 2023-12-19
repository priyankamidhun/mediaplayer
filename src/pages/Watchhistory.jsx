import { Link } from "react-router-dom";
import { deleteHistory, getHistory } from "../services/allAPI";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function Watchhistory() {

    const [history, setHistory] = useState([])

    const [deleteHistoryItem, setDeleteHistory] = useState(false)

    const getAllHistory = async () => {
        const response = await getHistory();
        console.log("===History Data===");
        console.log(response);
        setHistory(response.data)
    }

    useEffect(() => {
        getAllHistory();
        setDeleteHistory(false)
    }, [deleteHistoryItem])

    const handleDelete = async (id) => {
        const result = await deleteHistory(id);
        setDeleteHistory(true)
    }

    return (
        <>
            <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between">
                <h4>Watch History</h4>
                <Link style={{ color: "white", textDecoration: "none" }} to={'/home'}><i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link>
            </div>
            <table className="table mt-5 mb-5 container">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Caption</th>
                        <th>URL</th>
                        <th>Timestamp</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.length > 0 ?
                            history.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.caption}</td>
                                    <td>{item.embeddedLink}</td>
                                    <td>{item.timeStamp}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(item.id)}>
                                            <i class="fa-solid fa-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            )) :
                            <p>No Item to Display</p>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Watchhistory;




