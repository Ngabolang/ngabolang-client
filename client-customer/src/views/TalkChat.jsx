import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function TalkChat() {
  const chatboxEl = useRef();
  const { chatId } = useParams();
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  const { user } = useSelector((state) => {
    return state.user;
  });
  console.log(user);
  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const customer = new Talk.User({
        id: localStorage.id,
        name: localStorage.username,
        email: localStorage.email,
        photoUrl: localStorage.photoProfile,
        welcomeMessage: "Hello!",
        role: "customer",
      }); // ini buat customer yg login

      const session = new Talk.Session({
        appId: "tKz5u74h",
        me: customer,
      });

      const conversationId = Talk.oneOnOneId(chatId); //japan nya nanti harus diganti yg sama dengan id grup chat
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setAttributes({
        custom: {
          category: "group",
        },
      });
      conversation.setParticipant(customer);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);
  return (
    <>
      <div className="container-fluid mt-40">
        <div style={{ height: "500px" }} ref={chatboxEl} />
      </div>
    </>
  );
}
