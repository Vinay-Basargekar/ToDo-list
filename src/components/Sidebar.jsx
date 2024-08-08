import React, { useState } from "react";
import useSidebarStore from "../utils/useSidebarStore";
import Rename from "../icons/rename";
import useTodoStore from "../utils/useTodoStore";

function Sidebar() {
	const sidebarOpen = useSidebarStore((state) => state.sidebarOpen);
	const [showFinished, setShowFinished] = useState(false);
	const [showCompleted, setShowCompleted] = useState(false);
	const [projectExpanded, setProjectExpanded] = useState(false);
	const {
		folders,
		selectedFolderId,
		setSelectedFolderId,
		renameFolder,
		addFolder,
		deleteFolder,
	} = useTodoStore();

	const handleFinishedChange = () => {
		setShowFinished(!showFinished);
	};

	const handleCompletedChange = () => {
		setShowCompleted(!showCompleted);
	};

	const toggleProject = () => {
		setProjectExpanded(!projectExpanded);
	};

	return (
		<>
			{sidebarOpen && (
				<div className="w-full md:w-3/12 h-[100vh] text-white bg-purple-700 p-4 ">
					<div className="mb-2">
						{/* Project Section */}
						<div className="bg-purple-600 p-2 rounded-t-lg  flex justify-between items-center">
							<span className="text-2xl">Project</span>
							<button className="p-1 rounded" onClick={toggleProject}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={`size-6 transform transition-transform ${
										projectExpanded ? "rotate-180" : "rotate-0"
									}`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m19.5 8.25-7.5 7.5-7.5-7.5"
									/>
								</svg>
							</button>
						</div>

						{/* Smooth Transition for Project Section */}
						<div
							className={`bg-purple-600 overflow-hidden transition-all duration-300 ease-in-out ${
								projectExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
							}`}
						>
							<div className="p-2">
								{folders.map((folder) => (
									<div
										key={folder.id}
										className={`flex justify-between bg-purple-400 p-2 rounded mb-2 ${
											folder.id === selectedFolderId ? "bg-purple-500" : ""
										}`}
									>
										<span
											className="cursor-pointer"
											onClick={() => setSelectedFolderId(folder.id)}
										>
											{folder.name}
										</span>
										<div className="flex space-x-2">
											<button
												onClick={() =>
													renameFolder(
														folder.id,
														prompt("Rename folder", folder.name)
													)
												}
											>
												<Rename />
											</button>
											<button
												onClick={() => deleteFolder(folder.id)}
												className="text-black"
											>
												X
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Finished Checkbox */}
					<div className="bg-purple-600 p-2 mb-2 flex items-center">
						<input
							type="checkbox"
							checked={showFinished}
							onChange={handleFinishedChange}
							className="mr-2"
						/>
						<span className="text-xl">Finished</span>
					</div>

					{/* Completed Checkbox */}
					<div className="bg-purple-600 p-2 rounded-b-lg mb-2 flex items-center">
						<input
							type="checkbox"
							checked={showCompleted}
							onChange={handleCompletedChange}
							className="mr-2"
						/>
						<span className="text-xl">Completed</span>
					</div>
				</div>
			)}
		</>
	);
}

export default Sidebar;
