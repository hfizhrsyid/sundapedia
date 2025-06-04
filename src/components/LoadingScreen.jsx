const LoadingScreen = (height) => {
    return (
        <div className={`flex flex-col justify-center items-center` + height}>
            <span className="text-[#D3A373] loading loading-dots loading-xl"></span>
        </div>
    )
}

export default LoadingScreen