import Talk from "talkjs";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
export default function GroupChat() {
  const { tripId } = useParams();
  const chatboxEl = useRef();
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "1",
        name: "Syamsul",
        email: "henrymill@example.com",
        photoUrl: "henry.jpeg",
        welcomeMessage: `hello welcome to trip ${tripId}`,
        role: "admin",
      }); //ini akan selalu admin yg nge create

      const session = new Talk.Session({
        appId: "tfF99kzl",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(tripId); //harus punya trip Id masing masing grup nya
      const conversation = session.getOrCreateConversation(conversationId);
      console.log(conversation);
      conversation.setParticipant(currentUser);
      conversation.setAttributes({
        photoUrl:
          "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20230106161700", //foto grup
        subject: `Trip to ${tripId}`, //judul grup
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
        <div style={{ height: "100%", width: "100%" }} ref={chatboxEl} />
      </section>
    </>
  );
}
