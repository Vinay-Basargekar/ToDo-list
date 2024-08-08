import React from "react";
import useSidebarStore from "../utils/useSidebarStore";

const Header = () => {
	const toggleSidebar = useSidebarStore((state) => state.setSidebarOpen);

	return (
		<div className="bg-purple-600 p-4 flex items-center">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="white"
					className=" h-5 w-4 md:h-10 md:w-10 cursor-pointer"
					onClick={toggleSidebar}
				>
					<path
						fillRule="evenodd"
						d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="flex items-center justify-center w-full">
				<div className="flex items-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-12"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
					<h1 className="text-5xl w-full px-2">Todo</h1>
				</div>
			</div>
		</div>
	);
};

export default Header;
