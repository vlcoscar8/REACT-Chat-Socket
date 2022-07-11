import { useState } from "react";
import { io } from "socket.io-client";
import { environment } from "../environment/environment";

const socket = io(`${environment.API_URL}`);

export const useSocket = () => {
    const [socketData, setSocketData] = useState();

    socket.on("new message", (data) => {
        setSocketData(data);
    });

    return socketData;
};
