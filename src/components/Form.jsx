export default function Form() {
    return (
        <>
            <form action="" method="post" >
                <div className="mb-3">
                    <label htmlFor="fullname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fname" placeholder="Full name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3 d-flex gap-4">
                    <div className="mb-3 col-md-4">
                        <label htmlFor="number" className="form-label">Mob</label>
                        <input type="number" className="form-control" id="mob" placeholder="xxxxxx4585" />
                    </div>
                    <div className="mb-3 col-md-3">
                        <label htmlFor="city" className="form-label">city</label>
                          <select name="city" id="" className="form-control">
                            <option  value="patna">patna</option>
                            <option value="Darbahanga">Darbahanga</option>
                            <option value="Danapur">Danapur</option>
                          </select>
                    </div>
                      <div className="mb-3 col-md-4">
                        <label htmlFor="adhhar" className="form-label">Addhar No</label>
                        <input type="number" className="form-control" id="addhar" placeholder="xxxxxx4585" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Introduction</label>
                    <textarea className="form-control" id="feedback" rows="3"></textarea>
                </div>
                <button className="btn btn-primary ">submit</button>
            </form>
        </>
    )
}