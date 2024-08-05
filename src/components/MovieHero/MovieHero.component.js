import React,{useEffect} from "react";

//import Razorpay from "razorpay";

const MovieHero = () =>{

  const handleClick = () => {
    const options = {
      key: 'rzp_test_5kqIHN8DepvZ7L', // Your Razorpay API key
      amount: 50000, // amount in the smallest currency unit (e.g., 1000 paisa = ₹10)
      currency: 'INR',
      name: 'BookMyShow Clone',
      description: 'Purchase Tickets for your Selected Movie',
      image: 'https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png',
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      theme: {
        color: '#c4242d'
      }
    };

    const razorpay = new window.Razorpay(options);

    

    razorpay.open();
  };

    /*const RazorpayComponent = () => {
  useEffect(() => {
    const options = {
      key: 'YOUR_RAZORPAY_API_KEY', // Your Razorpay API key
      amount: 10000, // amount in the smallest currency unit (e.g., 1000 paisa = ₹10)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Purchase Description',
      image: 'https://your-company-logo.png',
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Your Name',
        email: 'your.email@example.com',
        contact: '1234567890'
      },
      notes: {
        address: 'Your Address'
      },
      theme: {
        color: '#F37254'
      }
    };

    const razorpay = new Razorpay(options);

    razorpay.on('payment.failed', function (response) {
      alert(response.error.description);
    });

    return () => {
      razorpay.close();
    };
  }, []);
}

  const handleClick = () => {
    razorpay.open();
  };
*/
    return(
        <>
            <div className="md:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kung-fu-panda-4-et00379741-1706177646.jpg"
                 alt = "poster"
                />
            </div>
            <div className="hidden md:block lg:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kung-fu-panda-4-et00379741-1706177646.jpg"
                 alt = "poster"
                />
            </div>
            <div className="relative hidden lg:block" style={{height: "450px"}}>
                <div className="absolute z-10 h-full w-full"   style = {{backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}} />
                <div className="absolute z-20 h-96 top-8 left-48 flex items-center gap-4">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kung-fu-panda-4-et00379741-1706177646.jpg" 
                        alt= "mobile poster"
                        className="h-full w-full rounded-xl"
                    
                    />
                    <button className="w-40 rounded-xl p-3 bg-red-500 hover:bg-red-600 text-white" onClick={handleClick}>Book Tickets</button>
                </div>
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kung-fu-panda-4-et00379741-1706177646.jpg"
                 alt = "poster" className="w-full h-full"  
                />
                
            </div>
        </>
    )

}

export default MovieHero;