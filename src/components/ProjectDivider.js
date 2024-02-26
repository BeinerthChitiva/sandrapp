export default function ProjectDivider(){
    return(
        <>
            <div className="flex flex-row bg-white min-h-[180px] max-h-[190px]">
                <div className="flex flex-row w-[50%] py-10 px-4">
                    <div className="flex flex-col w-[70%]">
                        <p className="text-[32px]">Helsinki.</p>
                        <p className="text-[16px]">Concurso de arquitectura, latin template text.</p>
                    </div>
                    <div className="w-[30%]">
                        <p className="text-[32px]">{'>'}</p>
                    </div>
                </div>
                <div className="flex flex-row w-[50%] py-10 px-4">
                    <div className="flex flex-col w-[70%]">
                        <p className="text-[32px]">Tierra Bomba.</p>
                        <p className="text-[16px]">Concurso de arquitectura, latin template text.</p>
                    </div>
                    <div className="w-[30%]">
                        <p className="text-[32px]">{'>'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

