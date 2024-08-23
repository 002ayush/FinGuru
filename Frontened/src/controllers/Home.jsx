import DarkOverlay from "./DarkOverlay";
import Login from "./Login";
import Navbar from "./Navbar";

function Home() {
	return (
		<>
			<div className="relative min-h-screen w-full">
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
					
				

					

					<div className="flex gap-6 mx-auto md:flex justify-center items-center">
						<div>
						<img src="/assets/images/bglogo.jpg" alt="" height={860} width={860} />
						</div>
						
							<Login/>
						
						
						
					
						
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

export default Home;
