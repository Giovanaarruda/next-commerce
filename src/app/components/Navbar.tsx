import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useCartStore } from "@/src/store";

function Navbar() {
  const useStore = useCartStore();

    return (
           <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 backdrop-blur-md">
            <Link href="/"
            className="uppercase font-bold text-md h-12 flex items-center">
            Nome loja
            </Link>
            <div className="flex items-center gap-8">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 border rounded-md border-gray-400">Fazer Login</button>
                  </SignInButton>
                  </SignedOut>
            </div>
          </nav>
    );
}

export default Navbar;