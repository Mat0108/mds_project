import { useState } from 'react';
import persona1 from '../images/persona1.jpg'

const Rectangle = (titre) =>{
    const [clic,setClic]=useState(false);
    function OnChange(){
        setClic(!clic)
    }
    function OnLeave(){
        setClic(false);
    }
    const text = "Son corps idéal : elle voudrait prendre soin de sa peau facilement, et trouver une rutine skin care qui correspond à son type de peau sans passer des mois à contacter un spécialiste."
    return (<div className="relative w-full h-[400px] grid grid-cols-rectangle  mt-[150px] " onMouseLeave={e=>OnLeave()} >
        <div className="col-span-1 bg-red h-full">

        </div>
        <div className="col-span-1 bg-red h-full">
            <img src={persona1}/>
        </div>
        <div className="col-span-1 bg-red h-full">
            <h2 className='text-3xl font-bold mt-[30px] text-white'>Un esprit sain dans un corps sain</h2>
            <div className='w-[400px] ml-[120px] mt-[30px] text-left text-white '>
                {text}
            </div>
            <div>
                <button className='bg-brown w-[150px] h-[40px] mt-[30px] text-white rounded-md text-xl' onClick={e=>OnChange()}>En savoir plus</button>
            </div>
        </div>
        <div className="col-span-1 bg-red h-full rounded-r-[30px]">

        </div>
        {clic && <div className='absolute top-[230px] left-[600px] w-[500px] h-[150px] rounded-xl bg-dark-grey' >
            <h1 className='text-black text-lg mt-[20px]'>S'inscrire a la newletter</h1>
            <input className='w-[300px] mt-[10px]' placeholder='Votre mail'/>
            <div className='grid grid-col-2'>
                <di className="col-start-2 mt-[15px] ">
                    <button className='bg-red w-[80px] h-[40px]  text-white rounded-md ' onClick={e=>OnChange()}>Envoyer</button>
                    <button className='bg-red w-[80px] h-[40px] ml-[15px] text-white rounded-md ' onClick={e=>OnChange()}>Annuler</button>
                </di>
            </div>
            </div>}
    </div>)
}
export default Rectangle