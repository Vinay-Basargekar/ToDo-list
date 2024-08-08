import create from "zustand";

const useTodoStore = create((set) => ({
	folders: [
		{ id: 1, name: "Folder 1", todos: [] },
		{ id: 2, name: "Folder 2", todos: [] },
		{ id: 3, name: "Folder 3", todos: [] },
	],
	selectedFolderId: 1, // Default selected folder

	setSelectedFolderId: (id) => set({ selectedFolderId: id }),

	renameFolder: (id, newName) =>
		set((state) => ({
			folders: state.folders.map((folder) =>
				folder.id === id ? { ...folder, name: newName } : folder
			),
		})),

	addFolder: () =>
		set((state) => ({
			folders: [
				...state.folders,
				{ id: Date.now(), name: `New Folder`, todos: [] },
			],
		})),

	deleteFolder: (id) =>
		set((state) => ({
			folders: state.folders.filter((folder) => folder.id !== id),
			selectedFolderId:
				state.selectedFolderId === id
					? state.folders[0]?.id || null
					: state.selectedFolderId,
		})),

	addTodo: (folderId, todo) =>
		set((state) => ({
			folders: state.folders.map((folder) =>
				folder.id === folderId
					? { ...folder, todos: [...folder.todos, todo] }
					: folder
			),
		})),

	removeTodo: (folderId, index) =>
		set((state) => ({
			folders: state.folders.map((folder) =>
				folder.id === folderId
					? {
							...folder,
							todos: folder.todos.filter((_, i) => i !== index),
					  }
					: folder
			),
		})),
}));

export default useTodoStore;
