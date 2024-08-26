import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
function Contact() {
	return (
		<>
			<div className="flex justify-around w-full min-h-screen p-8 mt-24">
				<div className="py-44 w-1/2">
					<div>
						<h2 className="text-2xl font-bold">How do you reach us ?? </h2>
						<p>
							If you have any complaints, concerns, or inquiries, please do not
							hesitate to reach out to us. We are here to help and ensure that
							your experience is satisfactory.
						</p>
					</div>
					<div className="my-16 space-y-3">
						<div className="flex space-x-2 text-orange-600">
							<div>
								<FaMapMarkerAlt size={22} />
							</div>
							<div>Gorakhpur, Uttar Pradesh</div>
						</div>
						<div className="flex space-x-2 text-orange-600">
							<div>
								<FaPhoneAlt size={22} />
							</div>
							<div>+917362900710</div>
						</div>
						<div className="flex space-x-2 text-orange-600">
							<div>
								<FaEnvelope size={22} />
							</div>
							<div>developer20080@gmail.com</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center w-1/2 py-24">
					<div>
						<h2 className="font-bold text-center text-3xl">Contact us</h2>
						<div className="text-xl my-20 flex flex-col  font-bold">
							<form action="">
								<div className="space-y-8 w-full">
									
									<input className="w-full h-12 p-6 border-amber-900 focus:outline-none border-2 rounded-full" type="text" name="name" id="name" placeholder="Your Name" />
							
								
									
									<input className="w-full p-6 h-12 border-amber-900 focus:outline-none  border-2 rounded-full"  type="email" name="name" id="name" placeholder="Your Email" />
								
								
									
									<input className="w-full p-6 h-12 focus:outline-none border-2 border-amber-900 rounded-full" placeholder="Your Contact No" type="phone" name="name" id="name" />

                                    <textarea className="w-full p-6 focus:outline-none border-2 border-amber-900 rounded-lg" name="message" id="message"  rows="5" placeholder="Write your concerns"></textarea>
                                    <div className="text-center">
                                    <button className=" border text-white hover:bg-green-600 bg-green-900 p-4 rounded-lg" type="submit">Submit</button>
                                    </div>

								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
