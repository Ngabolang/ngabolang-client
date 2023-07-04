import Talk from "talkjs";
import { useEffect, useState } from "react";
import { fetchUser } from "../stores/actions/actionType";
import { useDispatch, useSelector } from "react-redux";
export default function ChatPageGroup() {
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
      }); //ambil data dari current user

      const session = new Talk.Session({
        appId: "tKz5u74h",
        me: currentUser,
      });

      const inbox = session.createInbox();
      inbox.setFeedFilter({ custom: { category: ["==", "group"] } });
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
