import DarkOverlay from "./DarkOverlay";
import Login from "./Login";
import Navbar from "./Navbar";

function Header() {
	return (
		<>
			<div className="relative w-full">
				<div
					className=" relative opacity-90 bg-dark h-screen w-screen flex justify-between bg-cover bg-center"
					style={{
						backgroundImage: "url('/assets/images/ruppees.jpg')",
					}}
				>
					<DarkOverlay />
					<div>
						<Navbar />
					</div>

					<div className="flex flex-col gap-6 mx-auto md:flex-row justify-center items-center">
						<div>
							<img
								src="/assets/images/bglogo.jpg"
								alt=""
								className="h-[220px] w-[320px] md:h-[560px] md:w-[860px]"
							/>
						</div>
						<div className="z-40 mx-auto">
						<Login />
						</div>
							
						
					</div>

					{/* <div className="flex flex-col mt-14 space-y-4 p-4">
						<div className="h-52 w-52">
							<img src="/assets/images/coins.jpg" alt="Coins" />
						</div>
						<div className="h-52 w-52">
							<img src="/assets/images/coins.jpg" alt="Coins" />
						</div>
						<div className="h-52 w-52">
							<img src="/assets/images/coins.jpg" alt="Coins" />
						</div>
					</div> */}
				</div>
			</div>
		</>
	);
}

export default Header;
