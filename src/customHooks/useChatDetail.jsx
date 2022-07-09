import { useEffect, useState } from "react";
import { environment } from "../environment/environment";

export const useChatDetail = (chat) => {
    const [chatDetail, setChatDetail] = useState();

    useEffect(() => {
        fetch(`${environment.API_URL}/chat/detail/${chat.id}`)
            .then((res) => res.json())
            .then((res) => setChatDetail(res));
    }, [chat]);

    return chatDetail;
};
