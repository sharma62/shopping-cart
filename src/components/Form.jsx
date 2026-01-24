export default function Form() {
    return (
        <>
            <form action="" method="post" >
                <div class="mb-3">
                    <label for="fullname" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fname" placeholder="Full name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="number" class="form-label">Mob</label>
                    <input type="number" class="form-control" id="mob" placeholder="xxxxxx4585" />
                </div>
                <div class="mb-3">
                    <label for="feedback" class="form-label">Introduction</label>
                    <textarea class="form-control" id="feedback" rows="3"></textarea>
                </div>
                <button className="btn btn-primary ">submit</button>
            </form>
        </>
    )
}