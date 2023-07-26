const Movies = ({name, year, rating, image, alt, height = 333, width = 223}) => {
        return <div className='Movies'>
        <h1>{name}</h1>
        <h3>Year:{year}</h3>
        <h4>Rating:{rating}</h4>
        <img src={image} alt={name} style={{ height: height, width: width}}
        
         />
        
        </div>
}

export default Movies