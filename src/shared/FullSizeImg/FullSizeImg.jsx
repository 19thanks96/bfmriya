import './FullSizeImg.scss'

export const FullSizeImg = ({src, alt}) => (
    <div >
        <img className="full-size-img" src={src} alt={alt}/>
    </div>
)