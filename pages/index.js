import Head from "next/head";
import { Feed, Header } from "../components";
import Modal from "../components/Modal";
import { favicon, logo } from "../constants";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Instagram Clone" />
        <link rel="icon" href={favicon} />
      </Head>
      {/* HEADER */}
      <Header />
      {/* FEED */}
      <Feed />
      {/* MODAL */}
      <Modal />
    </div>
  );
}
