import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";

function FooterComp() {
	return (
		<>
			<footer>
				<div className="bg-[#313131] min-w-full min-h-fit  font-serif">
					<div className="flex justify-between px-16  text-white py-16">
						<div className="w-1/2 ">
							<h2 className="text-2xl text-center font-extrabold">About</h2>
							<p className="font-sans italic py-5">
								At FinGuru, we are passionate about empowering individuals to
								take control of their financial lives. Our mission is to provide
								a simple yet powerful platform that helps you track your
								spending, plan your budget, and achieve your financial goals. We
								believe that managing your finances should be easy and
								accessible to everyone, regardless of where you are on your
								financial journey.
							</p>
							<div className="flex justify-center  space-x-2">
								<SocialIcon url="https://www.facebook.com" />
								<SocialIcon url="https://www.twitter.com" />
								<SocialIcon url="https://www.instagram.com" />
								<SocialIcon url="https://www.linkedin.com" />
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

						<div className="w-1/4 mt-0">
							<h2 className="text-2xl font-bold">Discover</h2>
							<div className="mt-6">
								<ul className="list-item cursor-pointer">
									<li><a className="hover:text-amber-800 hover:underline active:text-amber-800" href="/home">Home</a></li>
									<li><a className="hover:text-amber-800 hover:underline active:text-amber-800" href="/about">About</a></li>
									<li><a className="hover:text-amber-800 hover:underline active:text-amber-800" href="/contact">Contact Us</a></li>
									<li><a className="hover:text-amber-800 hover:underline active:text-amber-800" href="/testinomials">Testinomials</a></li>
								</ul>
							</div>
						</div>
					</div>
          <hr className="bg-gray-700" />
					<div className="p-12 text-center py-8">
						
						<div className="text-white">Copyright &copy; 2023 . FinGuru . All Rights Reserved.</div>
            <div className="text-white">Developed by Ayush Mishra</div>
						<div className="space-x-4 text-blue-800 underline cursor-pointer">
							<span>Privacy Policy</span>
              <span className="stroke-yellow-700">|</span>
							<span>Terms & Condition</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default FooterComp;
