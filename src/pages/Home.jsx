import { Link } from "react-router-dom";
import Add from "../components/Add";
import Category from "../components/Category";
import View from "../components/View";
import { useState } from "react";

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <>
            <div>
                <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between">
                    <div className="add_videos">
                        <Add setUploadVideoStatus={setUploadVideoStatus} />
                    </div>
                    <div>
                        <Link to={'/watch'} style={{ textDecoration: "none", color: "white", fontSize: "30px" }}>Watch History</Link>
                    </div>
                </div>
                <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
                    <div className="all-videos col-md-6 mt-5">
                        <h4>All Videos</h4>
                        <View uploadVideoStatus={uploadVideoStatus} />
                    </div>
                    <div>
                        <Category />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;