
// actions
export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task
});

export const deleteTask = (index) => ({
    type: "DELETE_TASK",
    payload: index
});

export const editTask = (index, newText, newStatus) => ({
    type: "EDIT_TASK",
    payload: { index, newText, newStatus }
});


export const updateTaskText = (text) => ({
    type: "UPDATE_TASK_TEXT",
    payload: text
});

export const updateTaskStatus = (index, newStatus) => ({
    type: "UPDATE_TASK_STATUS",
    payload: { index, newStatus }
});


export const setEditIndex = (index) => ({
    type: "SET_EDIT_INDEX",
    payload: index
});

export const clearEditIndex = () => ({
    type: "CLEAR_EDIT_INDEX"
});

// state

const initialState = {
    tasks: [],
    taskText: '',
};


// reducer

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]

            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task, taskIndex) => taskIndex !== action.payload)
            };

        // case "EDIT_TASK":
        //     const { index, newText, newStatus } = action.payload;
        //     const updatedTasks = [...state.tasks];
        //     updatedTasks[index] = { ...updatedTasks[index], text: newText, status: newStatus };
        //     return {
        //         ...state,
        //         tasks: updatedTasks
        //     };
        case "EDIT_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                    index === action.payload.index
                        ? { ...task, text: action.payload.newText, status: action.payload.newStatus }
                        : task
                ),
            };
        case "UPDATE_TASK_TEXT":
            return {
                ...state,
                taskText: action.payload
            };
        case "UPDATE_TASK_STATUS":
            const { index, newStatus } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task, taskIndex) =>
                    taskIndex === index ? { ...task, status: newStatus } : task
                )
            };
        case "SET_EDIT_INDEX":
            return {
                ...state,
                editIndex: action.payload
            };
        case "CLEAR_EDIT_INDEX":
            return {
                ...state,
                editIndex: null
            };
        default:
            return state;
    }
}

export default todoReducer;