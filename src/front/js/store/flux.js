const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            isAuthenticated: false,
            user: null,
            error: null
        },
        actions: {
            // register: async (username, password) => {
            //     try {
            //         const response = await fetch('https://verbose-system-wrv597vr56gqf97r9-3001.app.github.dev/register', {
            //             method: 'POST',
            //             headers: { 'Content-Type': 'application/json' },
            //             body: JSON.stringify({ username, password })
            //         });

            //         if (response.ok) {
            //             setStore({ ...getStore(), error: null });
            //             return { success: true };
            //         } else {
            //             const error = await response.json();
            //             setStore({ ...getStore(), error: error.message });
            //             return { success: false, message: error.message };
            //         }
            //     } catch (error) {
            //         setStore({ ...getStore(), error: error.message });
            //         return { success: false, message: error.message };
            //     }
            // },

            // login: async (username, password) => {
            //     try {
            //         const response = await fetch('https://verbose-system-wrv597vr56gqf97r9-3001.app.github.dev/login', {
            //             method: 'POST',
            //             headers: { 'Content-Type': 'application/json' },
            //             body: JSON.stringify({ username, password })
            //         });

            //         if (response.ok) {
            //             const data = await response.json();
            //             setStore({ ...getStore(), isAuthenticated: true, user: username, error: null });
            //             return { success: true };
            //         } else {
            //             const error = await response.json();
            //             setStore({ ...getStore(), error: error.message });
            //             return { success: false, message: error.message };
            //         }
            //     } catch (error) {
            //         setStore({ ...getStore(), error: error.message });
            //         return { success: false, message: error.message };
            //     }
            // },

            // logout: () => {
            //     setStore({ ...getStore(), isAuthenticated: false, user: null });
            // }
        }
    };
};

export default getState;
