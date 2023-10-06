export const Slides = ({index}) => {
    if (index==0) {
        return(<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} className="active" aria-current="true" aria-label={`Slide ${index+1}`}></button>)
    }
        return (
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={`${index}`} aria-label={`Slide ${index+1}`}></button>
        )
    
}
