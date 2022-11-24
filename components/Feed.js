import { useSession } from "next-auth/react";

import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
      // className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto`}
    >
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;