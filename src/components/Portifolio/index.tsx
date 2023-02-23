import React from 'react';
import clubPenguim from '../../assets/clubPenguim.png';
import octopus from '../../assets/octopusApp.png';
import calcCalo from '../../assets/calcCaloApp.png';
import './styles.css'

function Portifolio() {
    return (
        <div className='portifolio-container'>
            <div className='project-container'>
                <p className='title'> Club Penguim</p>
                <a href="https://github.com/romeuleite/ProjetoClubPenguin">
                    <img className='project' src={clubPenguim} />
                </a>
            </div>

            <div className='project-container'>
                <p className='title'> Octopus</p>
                <a href="https://github.com/romeuleite/OctopusApp">
                    <img className='project' src={octopus} />
                </a>
            </div>

            <div className='project-container'>
                <p className='title'> Calc Calo</p>
                <a href="https://github.com/romeuleite/CalcCaloApp">
                    <img className='project' src={calcCalo} />
                </a>
            </div>


        </div>
    )
}

export default Portifolio