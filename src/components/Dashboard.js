import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();


    return (
        <main>
            <div>
                <h1 className="text-primary text-center m-5">
                    Dashboard Page for our Game
                </h1>

        <div className="row">
            <div className="col-6 p-4">
            <div className="card bg-success p-2 text-dark bg-opacity-10">
                            <div className="card-body ">
                                <h5 className="card-title" >Game Grid 10X15 </h5>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <a href="#" className="btn btn-success" onClick={() => {
                                    navigate('/game');
                                }}>Go somewhere 1</a>
                            </div>
                        </div>
            </div>
            <div className="col-6 p-4"> 
            <div className="card bg-success p-2 text-dark bg-opacity-10">
                            <div className="card-body ">
                                <h5 className="card-title" >Game Grid 18X25</h5>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <a href="#" className="btn btn-success" onClick={() => {
                                    navigate('/game2');
                                }}>Go to game 2</a>
                            </div>
                        </div>
            </div>
        </div>
                

              
            </div>
        </main>
    )
}

export default Dashboard;