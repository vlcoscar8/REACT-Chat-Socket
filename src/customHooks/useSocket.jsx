import { useState } from "react";
import { io } from "socket.io-client";
import { environment } from "../environment/environment";

const socket = io(`${environment.API_URL}`);

export const useSocket = () => {
    const [socketReady, setSocketReady] = useState();

    socket.on("new message", (body) => {
        setSocketReady(body);
    });

    return socketReady;
};
