import Talk from "talkjs";
import { useEffect, useState } from "react";
export default function ChatPage() {
  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "1",
        name: "Syamsul",
        email: "henrymill@example.com",
        photoUrl: "https://avatars.githubusercontent.com/u/50189632?v=4",
        welcomeMessage: `hello`,
        role: "admin",
      }); //ambil data dari current user

      const session = new Talk.Session({
        appId: "tfF99kzl",
        me: currentUser,
      });

      const inbox = session.createInbox();
      inbox.mount(document.getElementById("inbox-container"));

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <>
      <section className="col-md-10">
        <div style={{ height: "100%" }} id="inbox-container" />
      </section>
    </>
  );
}
