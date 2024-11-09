import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './CropDetailsManagement.scss'

import BackToHome from '../../components/backToHome/BackToHome'
import CropForm from '../../components/cropComponent/CropComponent'
import IrrigationForm from '../../components/irrigationComponent/IrrigationComponent'

const CropDetailsPage = () => {
  return (
    <div className='cropManagement-container'>
        <div className="left">
            <Sidebar/>
        </div>
        <div className="right">
            <div className="top">
                <BackToHome/>
            </div>
            <div className="bottom">
                <CropForm/>
                <IrrigationForm/>
            </div>
        </div>
    </div>
  )
}

export default CropDetailsPage