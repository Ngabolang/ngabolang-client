import Talk from "talkjs";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
export default function GroupChat() {
  const { tripId } = useParams();
  // const tripId = "bali";

  const chatboxEl = useRef();
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    talkInit();
  }, [talkLoaded]);

  function talkInit() {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "1",
        name: "Syamsul",
        email: "henrymill@example.com",
        photoUrl: "https://avatars.githubusercontent.com/u/50189632?v=4",
        welcomeMessage: `hello welcome to ${tripId}`,
        role: "admin",
      }); //ini akan selalu admin yg nge create

      const session = new Talk.Session({
        appId: "tKz5u74h",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(tripId); //harus punya trip Id masing masing grup nya
      const conversation = session.getOrCreateConversation(conversationId);
      console.log(conversation);
      conversation.setParticipant(currentUser);
      conversation.setAttributes({
        photoUrl:
          "https://suntourismpune.files.wordpress.com/2022/01/bali-tours-from-pune-g2g.jpg", //foto grup
        subject: `${tripId.split("-").join(" ")}`, //judul grup
      });

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }

  return (
    <>
      <section className="col-md-10">
        <div style={{ height: "100%" }} ref={chatboxEl} />
      </section>
    </>
  );
}
