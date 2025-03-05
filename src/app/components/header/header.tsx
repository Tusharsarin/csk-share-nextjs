"use client";
import "./header.css";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetTitle, SheetHeader, SheetContent } from "@/components/ui/sheet";

export const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <div className={`main-navbar w-nav ${isSheetOpen ? "z-0" : "z-[500]"}`}>
      <div className="flex justify-between py-7">
        <div>
          <img
            className="logo-img"
            src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
            alt=""
          />
        </div>
        <div className="links-container">
          <div className="unclickable-links">
            <Link href="#">Unlisted Shares</Link>
            <Link href="#">Our Blogs</Link>
            <Link href="#">Contact Us</Link>
          </div>
          <div className="hamburger-icon" onClick={toggleSheet}>
            {isSheetOpen ? "✖" : "☰"}
          </div>
        </div>
      </div>
      <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
        <SheetContent
          side="top"
          className="w-full h-full overflow-y-auto"
        >
          <SheetHeader>
            <SheetTitle>
              <div className="flex justify-between py-7">
                <div>
                  <img
                    className="logo-img"
                    src="https://cdn.prod.website-files.com/66dab781497d9a528975cd7a/66daf9668236041a506e46d7_Logo.svg"
                    alt=""
                  />
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="#" onClick={toggleSheet}>Unlisted Shares</Link>
            <Link href="#" onClick={toggleSheet}>Our Blogs</Link>
            <Link href="#" onClick={toggleSheet}>Contact Us</Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
