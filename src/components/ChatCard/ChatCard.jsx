import React from "react";

const ChatCard = (chat) => {
    console.log(chat);
    return <div>{chat.owner}</div>;
};

export default ChatCard;
