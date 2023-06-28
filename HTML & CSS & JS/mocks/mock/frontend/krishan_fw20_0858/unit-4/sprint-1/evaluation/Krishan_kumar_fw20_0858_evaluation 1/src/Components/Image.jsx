// Write Code here
function Image(props){
  const {title, src, alt, width, height} = props;

  return [<img src={src} alt={alt} width={width} height={height}/>,
  <h2>{title}</h2>]
    
    
  
}

export default Image;