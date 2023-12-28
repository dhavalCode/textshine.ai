import Link from "next/link";
import { Sparkles } from "lucide-react";

import { classNames } from "@genius-ai/lib/utils";
import { Button } from "@genius-ai/ui";
import { useProModal } from "@genius-ai/lib/hooks";

import MobileSidebar from "@/components/MobileSidebar";
import { ModeToggle } from "@/components/ModeToggle";
import { AccountMenu } from "@/components/AccountMenu";

const Navbar = ({ isPro }) => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href="/">
          <h1
            className={classNames(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            TextShine.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <AccountMenu />
      </div>
    </div>
  );
};

export default Navbar;
