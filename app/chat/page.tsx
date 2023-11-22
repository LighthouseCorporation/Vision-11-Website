import ChatPage from "@/components/Chat";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fast Helpful AI Chat | Vision 11",
    description: "Chat with Vision 11 AI",
    // other metadata
};

const Chat = () => {
    return (
        <section className="relative z-10 overflow-hidden pt-28">
                <ChatPage/>
        </section>
    )
}

export default Chat;