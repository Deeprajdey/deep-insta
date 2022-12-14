import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  HeartIcon,
  Bars3Icon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  HomeIcon,
  logo,
  UserIcon,
} from "../constants";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto items-center">
        <div
          onClick={() => router.push("/")}
          className="relative hidden lg:inline-grid w-24 cursor-pointer"
        >
          <Image
            src={logo}
            width="100"
            height="100"
            alt="img"
            className="w-[5rem] h-auto"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src={logo}
            width="100"
            height="100"
            alt="img"
            className="w-[5rem] h-auto"
          />
        </div>
        <div className="max-w-xs">
          <div
            className="relative
                mt-1 p-3 rounded-md "
          >
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
              <MagnifyingGlassIcon className="h-5 w-5 text-grey-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm  rounded-md px-5 py-3 focus:shadow-lg focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          {/* <Bars3Icon className="h-6 md:hidden cursor-pointer" /> */}
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                  5
                </div>
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={session.user?.image}
                alt=""
              />
            </>
          ) : (
            <button onClick={signIn}>
              <UserIcon className="h-8 w-8 text-red-400 bg-orange-200 rounded-full box-content p-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
