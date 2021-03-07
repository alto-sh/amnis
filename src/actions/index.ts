export const add = (newStream?: "") => {
    return {
        type: "ADD",
        payload: newStream
        
    };
};