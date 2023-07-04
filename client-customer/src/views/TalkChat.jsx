import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function TalkChat() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  function handlePopup(e) {
    e.preventDefault();
    chatboxEl.show();
  }

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const customer = new Talk.User({
        id: "10",
        name: "wira",
        email: "asdasada@example.com",
        photoUrl:
          "https://images-ext-1.discordapp.net/external/6kzkXrkqpqUoUcLBdDb-zi7Al0shicYtIcYuKP9lxN4/https/i.imgur.com/bnavNFF.jpg?width=386&height=390",
        welcomeMessage: "Hello!",
        role: "default",
      }); // ini buat customer yg login

      const session = new Talk.Session({
        appId: "tKz5u74h",
        me: customer,
      });

      const conversationId = Talk.oneOnOneId("trip-to-malaysia"); //japan nya nanti harus diganti yg sama dengan id grup chat
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