import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function CustomerService({ admin }) {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const me = new Talk.User({
        id: localStorage.id,
        name: localStorage.username,
        email: localStorage.email,
        photoUrl: localStorage.photoProfile,
        welcomeMessage: "Hello!",
        role: "customer",
      }); // ini buat customer yg login
      const cs = new Talk.User({
        id: admin.id,
        name: admin.username,
        email: admin.email,
        photoUrl: admin.photoProfile,
        welcomeMessage: `hello welcome to Customer Service`,
        role: admin.role,
      }); //ini akan selalu admin yg nge create

      const session = new Talk.Session({
        appId: "tKz5u74h",
        me: me,
      });

      const conversationId = Talk.oneOnOneId(me, cs);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setAttributes({
        custom: {
          category: "personal",
        },
      });
      conversation.setParticipant(me);
      conversation.setParticipant(cs);

      const chatbox = session.createPopup();
      chatbox.select(conversation);
      chatbox.mount({ show: false });

      return () => session.destroy();
    }
  }, [talkLoaded]);
}
