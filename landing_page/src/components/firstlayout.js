import Routine from '../images/Routine.png'
import skincare from '../images/skincare.png'
import logo from '../images/logo.png'
const Firstlayout = () =>{
    return (
    <>
    
    <div className='w-full h-[70px] bg-gray'>
        <div className='absolute left-[45%] flex h-[70px]'><img src={logo} /><h4 className='text-3xl  p-2 font-bold'>NewSkin</h4></div>

    </div>
    <div className="w-full h-[500px] grid grid-cols-2">
        <div className="col-start-1 h-1/2 align-middle">
            <img src={skincare}/>
        </div>
        <div className="col-start-2 h-1/2">
            <img src={Routine}/>
        </div>
        <div className="absolute left-[490px] top-[280px] w-[520px] h-[70px] bg-black rotate-[-85deg]">
            
        </div>

        <div className='absolute left-[730px] top-[50px] bg-gray w-20 h-5'></div>
        <div className='absolute left-[690px] top-[570px] bg-white w-20 h-5'></div>
    </div></>)
}
export default Firstlayout;