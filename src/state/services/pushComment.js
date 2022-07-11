export const pushComment = async (body, id) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
                "https://react-chat-socket-oscar.netlify.app/home",
            "Access-Control-Request-Method": "POST",
        },
        body: JSON.stringify(body),
    };

    return async () => {
        try {
            const response = await fetch(
                `${environment.API_URL}/chat/add/comment/${id}`,
                requestOptions
            );

            const data = await response.json();

            return data;
        } catch (error) {
            console.log(error);
        }
    };
};
