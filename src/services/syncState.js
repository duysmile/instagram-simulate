export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        const state = JSON.parse(serializedState);
        for (const module of Object.keys(state)) {
            if (state[module].error) {
                state[module].error = '';
            }
        }
        return {
            ...state,
        };
    } catch (err) {
        return undefined;
    }
}; 
