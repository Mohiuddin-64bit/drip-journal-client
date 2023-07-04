import axios from "axios";
import Swal from "sweetalert2";

const Body = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;



    // Create an object with the data to be sent
    const data = {
      name: userName,
      email: userEmail,
    };

    // Make the POST request to the server
    axios
      .post("https://drip-journal-server.vercel.app/information", data)
      .then((res) => {
        if(res.data.insertedId){
          Swal.fire(
            'Good job!',
            'Subscription Done',
            'success'
          )
        }
        // Handle the res from the server if needed
        console.log(res.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  };

  return (
    <div>
      <section className="px-5">
        <div className="container mx-auto mt-12 lg:mt-44">
          <div>
            <h1 className=" text-3xl lg:text-6xl font-bold">
              Your brain will thank for <br /> subscribing to our{" "}
              <span className="text-green-500">SASSY</span> newsletter!
            </h1>
            <p className="mt-8 font-bold text-md lg:text-2xl text-gray-500">
              A 5-minute newsletter and stay in touch with{" "}
              <span className="text-black font-bold italic">
                selective News, <br /> High humor MEMES
              </span>
              and <span className="text-black font-bold italic">knowledge</span>{" "}
              to feed you Curiosity.
            </p>

            <form onSubmit={handleForm} id="myForm">
              <div className="flex flex-col gap-3 mt-12">
                <input
                  id="firstName"
                  name="name"
                  type="text"
                  required
                  placeholder="Your First Name"
                  className="input border-2 border-black input-md w-full max-w-xs"
                />
                <div>
                  <input
                    id="emailAddress"
                    type="text"
                    name="email"
                    required
                    placeholder="Your Email Address"
                    className="input border-2 border-black input-md w-full max-w-xs"
                  />
                  <button type="submit" className="btn bg-green-600 mt-3">
                    Join Free!
                  </button>
                </div>
              </div>
            </form>
            <h3 className="font-bold mt-8 text-md uppercase ">
              100% <span className="text-green-500">Free</span>. Every{" "}
              <span className="text-green-500">Friday</span>. Unsubscribe any
              time.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
