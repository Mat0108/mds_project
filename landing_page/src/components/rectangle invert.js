import { useState } from 'react';
import persona2 from '../images/persona2.jpg';
const Rectangleinvert = () =>{
    const [clic3,setClic3]=useState(false);
    function OnChange3(){
        setClic3(!clic3);
    }
    function OnLeave3(){
        setClic3(false);
    }
    const text = "Son corps idéal : elle voudrait prendre soin de sa peau facilement, et trouver une rutine skin care qui correspond à son type de peau sans passer des mois à contacter un spécialiste."
    return (<div className="relative w-full h-[400px] grid grid-cols-rectangle2 mt-[100px]" onMouseLeave={e=>OnLeave3()}>
        <div className="col-span-1"></div>
        <div className="col-span-1 bg-brown h-full rounded-l-[30px]">

        </div>
        <div className="col-span-1 bg-brown h-full ">
            <h1 className='text-5xl font-bold mt-[30px] text-white'>Confiance en toi à tout moment.</h1>
            <div className='w-[500px] ml-[65px] mt-[30px] text-left text-2xl text-white '>{text}</div>
            <div>
                <button className='bg-red w-[200px] h-[50px] mt-[30px] text-2xl text-white rounded-md' onClick={e=>OnChange3()}>En savoir plus</button>
            </div>            
        </div>
        <div className="col-span-1 bg-brown h-full">
            <img src={persona2}/>
        </div>

        <div className="col-span-1 bg-brown h-full ">

        </div>
        {clic3 && <div className='absolute top-[280px] left-[550px] w-[500px] h-[150px] rounded-xl bg-dark-grey'>
            <h1 className='text-black text-lg mt-[20px]'>S'inscrire a la newsletter</h1>
            <input className='w-[300px] mt-[10px]' placeholder='Votre mail'/>
            <div className='grid grid-col-2'>
                <di className="col-start-2 mt-[15px] ">
                    <button className='bg-brown w-[80px] h-[40px]  text-white rounded-md ' onClick={e=>OnChange3()}>Envoyer</button>
                    <button className='bg-brown w-[80px] h-[40px] ml-[15px] text-white rounded-md ' onClick={e=>OnChange3()}>Annuler</button>
                </di>
            </div>
            </div>}
    </div>)
}
export default Rectangleinvert