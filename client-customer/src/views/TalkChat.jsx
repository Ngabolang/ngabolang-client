import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function TalkChat() {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const customer = new Talk.User({
        id: "2",
        name: "jess",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      }); // ini buat customer yg login

      const session = new Talk.Session({
        appId: "tfF99kzl",
        me: customer,
      });

      const conversationId = Talk.oneOnOneId("japan"); //japan nya nanti harus diganti yg sama dengan id grup chat
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(customer);

      const popup = session.createPopup()();
      popup.select(conversation);
      popup.mount(chatboxEl.current);

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