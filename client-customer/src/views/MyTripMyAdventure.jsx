import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";
import MyTripCard from "../components/MyTripCard";
import { useDispatch, useSelector } from "react-redux";

function MyTrip() {
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
        id: "2",
        name: "jess",
        email: "jessicawells@example.com",
        photoUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80',
        welcomeMessage: "Hello!",
        role: "default",
      }); // ini buat customer yg login

      const session = new Talk.Session({
        appId: "tfF99kzl",
        me: customer,
      });

      const conversationId = Talk.oneOnOneId("singapore"); //japan nya nanti harus diganti yg sama dengan id grup chat
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(customer);

      const chatbox = session.createPopup();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <div className="mt-20">
      <div className="px-4 py-12 mx-40">
        <button onClick={handlePopup}>GG</button>
        <MyTripCard></MyTripCard>
        <MyTripCard></MyTripCard>
        <MyTripCard></MyTripCard>
        <MyTripCard></MyTripCard>
        <MyTripCard></MyTripCard>
      </div>
    </div>
  );
}

export default MyTrip;
