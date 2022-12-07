const Success = ({ message }) => {
    if (message === null||message ==='') {
      return null
    }
  
    return (
      <div className="ok">
        {message}
      </div>
    )
  }
  export default Success