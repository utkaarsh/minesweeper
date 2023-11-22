import React from 'react';
import { useNavigate } from 'react-router-dom';
import infobox from '../assets/box.png'

const Dashboard = () => {
    const navigate = useNavigate();


    return (
        <main>
            <div className=''>
                <h1 className="text-center m-5 title">
                    Mine Sweeper
                </h1>
                <div className='card  p-2 infobox'>
            <h1 className='text-uppercase'>Play Guide</h1>
        <h6>1. The game starts with a grid of unmarked squares.</h6>
        <h6>2. Clicking on a square will reveal whether it contains a mine or not. If it does, the game is over.</h6>
        <h6>3. If it doesn’t, the square will reveal a number indicating how many mines are in the adjacent squares.</h6>
        <h6>4. Using the numbers, you can deduce which squares contain mines and which don’t.</h6>
        <h6>5. Right-clicking on a square will flag it as containing a mine.</h6>
        <h6>6. The game is won when all non-mine squares are revealed.</h6>
    </div>


        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 p-4 d-flex justify-content-center">
            <div className="card bg-success p-2 text-dark bg-opacity-10" role='button' onClick={() => {
                                    navigate('/game');
                                }} >
                            <div className="card-body ">
                                <div className="level-title">
                                <h2 className="card-title text-uppercase" >Level 1</h2>
                                <h6>Grid size : 10 X 15</h6>
                                </div>
                                {/* <p>Difficulty level : Easy</p> */}
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                               
                            </div>
                        </div>
            </div>
            <div className="col-4 p-4 d-flex justify-content-center"> 
            <div className="card bg-success p-2 text-dark bg-opacity-10" role='button' onClick={() => {
                                    navigate('/game2');
                                }}>
                            <div className="card-body ">
                                <div className="level-title">
                                <h2 className="card-title text-uppercase"   >Level 2</h2>
                                <h6>Grid size : 18 X 25</h6>
                                </div>
                               
                                {/* <p>Difficulty level : Hard</p> */}
                                 
                                {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                                
                            </div>
                        </div>
            </div>
        </div>

<div className="row">
<div className="col-4 ">
   </div>
    <div className="col-4 p-4 d-flex justify-content-center">
    <div className="card bg-success p-2 text-dark bg-opacity-10" role='button' onClick={() => {
                                    navigate('/timerGame1');
                                }}>
                    <div className="card-body ">
                        <div className="level-title">
                        <h2 className="card-title text-uppercase"   >Timeout Level 1 </h2>
                        <h6>Grid size : 10 X 15</h6>
                        <h6>Time : 1 min</h6>
                        </div>
                        
                        {/* <p>Difficulty level : Easy</p> */}
                        
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        
                    </div>
                </div>
    </div>
    <div className="col-4 p-4 d-flex justify-content-center"> 
    <div className="card bg-success p-2 text-dark bg-opacity-10" role='button' onClick={() => {
                                    navigate('/timerGame2');
                                }}>
                    <div className="card-body ">
                        <div className="level-title">
                        <h2 className="card-title text-uppercase"   >Timeout Level 2</h2>
                        <h6>Grid size : 18 X 25</h6>
                        <h6>Time : 2 mins</h6>
                        </div>
                        {/* <p>Difficulty level : Hard</p> */}
                        
                        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        
                    </div>
                </div>
    </div>
</div>
                

              
            </div>
        </main>
    )
}

export default Dashboard;