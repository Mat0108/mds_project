import { useState } from 'react';
import persona3 from '../images/persona3.jpg';
const Rectangle2 = () =>{
    const [clic2,setClic2]=useState(false);
    function OnChange2(){
        setClic2(!clic2)
    }
    function OnLeave2(){
        setClic2(false);
    }
    const text = "Son corps idéal : elle voudrait prendre soin de sa peau facilement, et trouver une rutine skin care qui correspond à son type de peau sans passer des mois à contacter un spécialiste."
    return (<div className="relative w-full h-[400px] grid grid-cols-rectangle  mt-[100px]" onMouseLeave={e=>OnLeave2()} >
        <div className="col-span-1 bg-green h-full">

        </div>
        <div className="col-span-1 bg-green h-full">
            <img src={persona3}/>
        </div>
        <div className="col-span-1 bg-green h-full">
            <h1 className='text-5xl font-bold mt-[30px] text-white '>Un esprit sain dans un corps sain</h1>
            <div className='w-[500px] ml-[65px] mt-[20px] text-left text-2xl text-white'>
                {text}
            </div>
            <div>
                <button className='bg-brown w-[200px] h-[50px] mt-[30px] text-white rounded-md text-2xl' onClick={e=>OnChange2()}>En savoir plus</button>
            </div>

        </div>
        <div className="col-span-1 bg-green h-full rounded-r-[30px]">

        </div>
        {clic2 && <div className='absolute top-[250px] left-[600px] w-[500px] h-[150px] rounded-xl bg-dark-grey' >
            <h1 className='text-black text-lg mt-[20px]'>S'inscrire a la newsletter</h1>
            <input className='w-[300px] mt-[10px]' placeholder='Votre mail'/>
            <div className='grid grid-col-2'>
                <di className="col-start-2 mt-[15px] ">
                    <button className='bg-green w-[80px] h-[40px]  text-white rounded-md ' onClick={e=>OnChange2()}>Envoyer</button>
                    <button className='bg-green w-[80px] h-[40px] ml-[15px] text-white rounded-md ' onClick={e=>OnChange2()}>Annuler</button>
                </di>
            </div>
            </div>}
    </div>)
}
export default Rectangle2