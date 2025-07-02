import { InfinitySpin } from "react-loader-spinner"

const LoadingSpin = () => {
    return(
        <div className="spin_container">
            <InfinitySpin 
                width='200'
                color="#535bf2"
            />
        </div>
    )
}

export default LoadingSpin