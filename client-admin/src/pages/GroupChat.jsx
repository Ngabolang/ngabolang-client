import Talk from "talkjs";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import { fetchUser } from "../stores/actions/actionType";
import { useDispatch, useSelector } from "react-redux";
export default function GroupChat() {
  // const { tripId } = useParams();
  const tripId = "trip-to-malaysia";

  const chatboxEl = useRef();
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);
  const disptach = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));
    disptach(fetchUser());
    if (talkLoaded && user) {
      const currentUser = new Talk.User({
        id: user.id,
        name: user.username,
        email: user.email,
        photoUrl: user.photoProfile,
        welcomeMessage: `hello`,
        role: user.role,
      }); //ini akan selalu admin yg nge create

      const session = new Talk.Session({
        appId: "tKz5u74h",
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
      conversation.setAttributes({
        photoUrl:
          "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2023/02/10/urban-high-klcc-malaysia-sky_112-20230210101040.jpg", //foto grup
        subject: `${tripId.split("-").join(" ")}`, //judul grup
      });

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <>
      <section className="col-md-10">
        <div style={{ height: "100%" }} ref={chatboxEl} />
      </section>
    </>
  );
}
