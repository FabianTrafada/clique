import Link from "next/link"
import MobileMenu from "./MobileMenu"
import { Bell, CircleFadingPlus, House, LoaderCircle, LogIn, MessageCircleMore, Search, Users } from "lucide-react"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Input } from "./ui/input"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
        {/* LEFT */}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-primary">Clique</Link>
        </div>
        {/* CENTER */}
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
            {/* LINK */}
            <div className="flex gap-6 text-gray-600">
                <Link href="/" className="flex items-center gap-2">
                    <House width={16} height={16} className="stroke-primary size-4"/>
                    <span>Homepage</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                    <Users width={16} height={16} className="stroke-primary size-4"/>
                    <span>Friends</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                    <CircleFadingPlus width={16} height={16} className="stroke-primary size-4"/>
                    <span>Stories</span>
                </Link>
            </div>
            <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                <input type="text" placeholder="Search..." className="bg-transparent outline-none"/>
                <Search width={14} height={14}/>
            </div>
        </div>
        {/* RIGHT */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
                <LoaderCircle className="animate-spin stroke-primary"/>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className="cursor-pointer text-primary/85">
                        <Users width={24} height={24}/>
                    </div>
                    <div className="cursor-pointer text-primary/85">
                        <MessageCircleMore width={20} height={20}/>
                    </div>
                    <div className="cursor-pointer text-primary/85">
                        <Bell width={20} height={20}/>
                    </div>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <div className="flex items-center gap-2 text-sm">
                        <LogIn width={20} height={20}/>
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu />
        </div>
    </div>
  )
}

export default Navbar