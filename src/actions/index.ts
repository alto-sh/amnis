export const add = (newStream?: any) => {
    return {
        type: "ADD",
        payload: newStream
        
    };
};