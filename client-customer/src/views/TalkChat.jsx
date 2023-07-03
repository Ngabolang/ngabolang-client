import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function TalkChat() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
        const me = new Talk.User({
        id: "11",
        name: "jati",
        email: "asdasada@example.com",
        photoUrl: 'https://i.imgur.com/NMNA14J.jpeg',
        welcomeMessage: "Hello!",
        role: "default",
      }); // ini buat customer yg login
      const admin = new Talk.User({
        id: "1",
        name: "Syamsul",
        email: "henrymill@example.com",
        photoUrl: "https://avatars.githubusercontent.com/u/50189632?v=4",
        welcomeMessage: `hello welcome to Customer Service`,
        role: "admin",
      }); //ini akan selalu admin yg nge create

      const session = new Talk.Session({
        appId: "tKz5u74h",
        me: me,
      });

      const conversationId = Talk.oneOnOneId(me, "cs00");
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(me);
      conversation.setParticipant(admin);

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