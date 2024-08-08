import React, { useState } from "react";
import useTodoStore from "../utils/useTodoStore";

const TodoCard = () => {
	const { folders, selectedFolderId, addTodo, removeTodo } = useTodoStore();
	const [isAdding, setIsAdding] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const selectedFolder = folders.find(
		(folder) => folder.id === selectedFolderId
	);

	const handleSave = () => {
		if (title && content) {
			addTodo(selectedFolderId, { title, content });
			setTitle("");
			setContent("");
			setIsAdding(false);
		}
	};

	return (
		<div className="bg-purple-200 min-h-screen p-4">
			<div className="flex flex-wrap gap-4">
				<div className="w-52 h-52 bg-purple-400 rounded-lg shadow-md flex items-center justify-center">
					{!isAdding && (
						<button
							className="text-black p-4"
							onClick={() => setIsAdding(true)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-10 h-10"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
						</button>
					)}
					{isAdding && (
						<div className="w-full h-full bg-purple-500 rounded-lg shadow-lg p-4">
							<input
								type="text"
								placeholder="Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="w-full mb-2 p-2 border-2 border-purple-300 rounded-lg bg-purple-500 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
							<textarea
								placeholder="Content"
								value={content}
								onChange={(e) => setContent(e.target.value)}
								className="w-full p-2 border-2 border-purple-300 rounded-lg bg-purple-500 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
							></textarea>
							<button
								className="bg-purple-500 border-2 border-purple-300 text-white mt-2 p-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
								onClick={handleSave}
							>
								Save
							</button>
						</div>
					)}
				</div>
				{selectedFolder &&
					selectedFolder.todos.map((todo, index) => (
						<div
							key={index}
							className="w-52 h-52 bg-purple-400 p-4 rounded-lg shadow-md flex flex-col overflow-y-auto"
						>
							<div className="flex justify-between">
								<h3 className="font-bold">{todo.title}</h3>
								<button onClick={() => removeTodo(selectedFolderId, index)}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<p className="flex-grow">{todo.content}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default TodoCard;
