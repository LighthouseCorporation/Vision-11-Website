'use client'
import React, { useState } from 'react';

const ChatPage = () => {
    const [messages, setMessages] = useState<MessageType[]>([] as MessageType[]);

    type MessageType = {
        sender: string,
        text: string
    }

    const handleMessageSend = (messageText: string) => {
        const newMessage = { text: messageText, sender: 'user' };
        setMessages(prevMessages => [...prevMessages, newMessage]);

        // Simulate a response after a short delay
        setTimeout(() => {
            const responseMessage = { text: 'This is a response', sender: 'assistant' };
            setMessages(prevMessages => [...prevMessages, responseMessage]);
        }, 500);
    };

    return (
        <div className="mb-5 elevate container h-[80vh] w-[90vw] mx-auto shadow">
            <div className="flex-grow overflow-y-auto">
                {/* Messages container */}
                <div className="px-4 h-[60vh] w-[60vw] mt-5 mx-auto py-2">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex w-full my-5 py-3 px-4 ${message.sender==="user" && "justify-end"} `}>
                            <h1 className={`max-w-[40vw] text-white dark:text-white px-4 py-2 rounded-lg ${message.sender==="user" && "bg-[#3b3abe]"} ${message.sender === "assistant" &&  "bg-[#242424]"}`}>{message.text}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mx-auto w-[60vw] rounded justify-center items-center">
                {/* Message input */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-[60vw] rounded-md px-4 py-2 focus:outline-none"
                />
                <button
                    className="ml-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    onClick={() => handleMessageSend('Sample message')}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatPage;