import React from 'react'

import './index.css'

function Explanation() {

    const explanationClickButton = () =>{
        console.log('Navbardaki buton ile yeni bir prje oluştur')
    }
    return (
        <>
            <div className='navbar' >
                Navbar
            </div>
            <hr className='navbarHr' />
            <div className='explanation' >
                <h2>Yeni Çalışma Seti Oluştur</h2>
                <button onClick={explanationClickButton} className='explanationBarButton' >Oluştur</button>
            </div>
            <div className='pictureTicket' >
                <h2> Bir görseli ekle ve etiketle </h2>
                <p className='addTicket' >İstediğiniz herahngi bir resmi sürükleyip bırakın veya `etiket`</p>
            </div>
        </>
    )
}

export default Explanation

