import { Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";

interface Props {
	children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
	return (
		<div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
			<Navbar
				isBordered
				className="w-full"
				classNames={{
					wrapper: "w-full max-w-full",
				}}
			>
				<NavbarContent className="md:hidden">
					<BurguerButton />
				</NavbarContent>
				<NavbarContent className="w-auto">
					<Link className="text-2xl text-white font-bold" href={"/"}>
						MLAB
					</Link>
				</NavbarContent>
				<NavbarContent
					justify="end"
					className="w-fit data-[justify=end]:flex-grow-0"
				>
					{/* <div className="flex items-center gap-2 max-md:hidden">
            <FeedbackIcon />
            <span>Feedback?</span>
          </div> */}

					<NotificationsDropdown />

					{/* <div className="max-md:hidden">
            <SupportIcon />
          </div> */}

					{/* <Link
            href="https://github.com/Siumauricio/nextui-dashboard-template"
            target={"_blank"}
          >
            <GithubIcon />
          </Link> */}
					<NavbarContent>
						<UserDropdown />
					</NavbarContent>
				</NavbarContent>
			</Navbar>
			{children}
		</div>
	);
};
