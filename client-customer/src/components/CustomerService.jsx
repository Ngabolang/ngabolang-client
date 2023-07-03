import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function CustomerService() {
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

      const conversationId = Talk.oneOnOneId("bali"); //japan nya nanti harus diganti yg sama dengan id grup chat
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(customer);

      const chatbox = session.createPopup();
      chatbox.select(conversation);
      chatbox.mount({ show: false });

      return () => session.destroy();
    }
  }, [talkLoaded]);
}
