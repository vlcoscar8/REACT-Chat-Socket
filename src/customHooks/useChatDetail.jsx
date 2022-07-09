import { useEffect, useState } from "react";
import { environment } from "../environment/environment";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useChatDetail = (chat) => {
    const [chatDetail, setChatDetail] = useState();
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        fetch(`${environment.API_URL}/chat/detail/${chat.id}`)
            .then((res) => res.json())
            .then((res) => setChatDetail(res));
    }, [users, chat]);

    return chatDetail;
};
