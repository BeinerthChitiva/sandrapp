import { useNavigate } from "react-router-dom/dist"

export default function ProjectDivider(){
    const navigate = useNavigate()

    function handleHelsinki(){
        navigate("/projects/helsinki/urbanismo")
    }

    function handleTierraBomba(){
        navigate("/projects/tierrabomba")
    }

    return(
        <>
            <div className="flex flex-row bg-white min-h-[170px] max-h-[180px]">
                <div onClick={handleHelsinki} className="flex flex-row w-[50%] py-10 px-4 border-r-[1px] border-b-[1px] border-gray-200 hover:cursor-pointer hover-animate-div">
                    <div className="flex flex-col w-[70%] ml-8">
                        <p className="text-[32px]">Helsinki.</p>
                        <p className="text-[16px]">Concurso de arquitectura.</p>
                    </div>
                    <div className="w-[30%]">
                        <p className="text-[32px]">{'>'}</p>
                    </div>
                </div>
                <div onClick={handleTierraBomba} className="flex flex-row w-[50%] py-10 px-4 border-b-[1px] border-gray-200 hover:cursor-pointer hover-animate-div">
                    <div className="flex flex-col w-[70%] ml-8">
                        <p className="text-[32px]">Tierra Bomba.</p>
                        <p className="text-[16px]">Concurso de arquitectura.</p>
                    </div>
                    <div className="w-[30%]">
                        <p className="text-[32px]">{'>'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

