

const Hosting = () => {
  return (
    <div className='h-screen mt-24 mx-auto '>
      <div className='container rounded bg-black text-white mx-auto mt-40 justify-center align-center px-10'>
        <h1>Welcome, Dear Host</h1>
        <p>We are thrilled to have you register with us!</p>
        <form action="">
          <div className="form-row">
            <div className="col">
              <input className="form-control" type="text"/>
            </div>
            <div className="col">
              <input className="form-control" type="text"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hosting
