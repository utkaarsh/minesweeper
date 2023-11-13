import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();


    return (
        <main>
            <div>
                <h1 className="text-center m-5 title">
                    Mine Sweeper
                </h1>

        <div className="row">
            <div className="col-6 p-4">
            <div className="card bg-success p-2 text-dark bg-opacity-10">
                            <div className="card-body ">
                                <h5 className="card-title level-title" >Level 1</h5>
                                <p>Difficulty level : Easy</p>
                                <p>Grid size : 10 X 15</p>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <a href="#" className="btn btns" onClick={() => {
                                    navigate('/game');
                                }}>Go to game</a>
                            </div>
                        </div>
            </div>
            <div className="col-6 p-4"> 
            <div className="card bg-success p-2 text-dark bg-opacity-10">
                            <div className="card-body ">
                                <h5 className="card-title level-title" >Level 2</h5>
                                <p>Difficulty level : Hard</p>
                                <p>Grid size : 18 X 25</p>
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                <a href="#" className="btn btns" onClick={() => {
                                    navigate('/game2');
                                }}>Go to game</a>
                            </div>
                        </div>
            </div>
        </div>

<div className="row">
    <div className="col-6 p-4">
    <div className="card bg-success p-2 text-dark bg-opacity-10">
                    <div className="card-body ">
                        <h5 className="card-title level-title" >Timer Level 1 </h5>
                        <p>Difficulty level : Easy</p>
                        <p>Grid size : 10 X 15</p>
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a href="#" className="btn btns" onClick={() => {
                            navigate('/timerGame1');
                        }}>Go to game</a>
                    </div>
                </div>
    </div>
    <div className="col-6 p-4"> 
    <div className="card bg-success p-2 text-dark bg-opacity-10">
                    <div className="card-body ">
                        <h5 className="card-title level-title" >Timer Level 2</h5>
                        <p>Difficulty level : Hard</p>
                        <p>Grid size : 18 X 25</p>
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        <a href="#" className="btn btns" onClick={() => {
                            navigate('/timerGame2');
                        }}>Go to game </a>
                    </div>
                </div>
    </div>
</div>
                

              
            </div>
        </main>
    )
}

export default Dashboard;