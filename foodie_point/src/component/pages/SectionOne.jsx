import React from 'react'
import {useNavigate} from 'react-router-dom'


export const SectionOne = () => {
    const navigate=useNavigate()
    return (
        <div id="sectionOne" >
            <div id="section_one_main">
                <h1>Heathy</h1>
                <h1>Inside, Fresh</h1>
                <h1><span >Outside</span></h1>
                <p>We deliever healthy food that are ready to eat Just choose you own menu you like</p>
                <button onClick={()=>navigate('/restaurant')} class="btn btn-success btn-lg" >Order now</button>

            </div>
        </div>
    )
}
