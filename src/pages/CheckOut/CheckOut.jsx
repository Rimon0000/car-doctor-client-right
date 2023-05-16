import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData()
    const {_id, title, price} = service
    const {user} = useContext(AuthContext)

    const handleBookService = (event) =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const date = form.date.value 
        const email = user?.email
        const order = {
            CustomerName: name,
            email,
            date,
            service: _id,
            price: price
        }
        console.log(order)
    }

    return (
        <div>
            <h2 className="text-center text-3xl">Book Service: {title}</h2>
                      <form onSubmit={handleBookService}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Date</span>
                          </label>
                          <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Due Amount</span>
                          </label>
                          <input type="text" name="password" defaultValue={'$'+ price} className="input input-bordered" />
                        </div>
                        </div>
                        <div className="form-control mt-6">
                          <input className="btn btn-block" type="submit" value="Order Confirm" />
                        </div>
                      </form>
        </div>
    );
};

export default CheckOut;