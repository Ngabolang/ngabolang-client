import Talk from "talkjs";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import { fetchChatTrip, fetchUser } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
export default function GroupChat() {
  const { tripId } = useParams();

  const chatboxEl = useRef();
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  const disptach = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { infoChat } = useSelector((state) => state.trip);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));
    disptach(fetchUser());
    disptach(fetchChatTrip(tripId));
  }, []);

  useEffect(() => {
    if (talkLoaded && user && infoChat) {
      const currentUser = new Talk.User({
        id: user.id,
        name: user.username,
        email: user.email,
        photoUrl: user.photoProfile,
        welcomeMessage: `hello`,
        role: user.role,
      }); //ini akan selalu admin yg nge create

      const session = new Talk.Session({
        appId: "tWD97xPP",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(tripId); //harus punya trip Id masing masing grup nya
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setAttributes({
        custom: {
          category: "group",
        },
      });
      conversation.setParticipant(currentUser);
      console.log(user);
      console.log(infoChat);
      conversation.setAttributes({
        photoUrl: infoChat.imgUrl,
        subject: infoChat.name, //judul grup
      });

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [infoChat]);

  return (
    <>
      <section className="col-md-10">
        <div style={{ height: "100%" }} ref={chatboxEl} />
      </section>
    </>
  );
}
