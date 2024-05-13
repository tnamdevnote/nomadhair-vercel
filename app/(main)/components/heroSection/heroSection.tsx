import React from "react";
import Image from "next/image";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { barber } from "@/public/illustrations";
import { SplitContainer } from "@/components/templates/container";
import { Button } from "@/components/atoms/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function HeroSection() {
  const { isAuthenticated } = getKindeServerSession();
  const isSignedIn = await isAuthenticated();

  return (
    <section aria-label="Hero" className="flex justify-center">
      <SplitContainer className="h-[80vh] py-12 md:h-auto md:flex-row-reverse md:justify-between md:py-44">
        <SplitContainer.Left className="flex basis-1/2 justify-center">
          <Image src={barber} width={400} alt="barber image" priority />
        </SplitContainer.Left>
        <SplitContainer.Right className="group flex basis-1/2 flex-col gap-10">
          <h1
            className="animate-fade-in text-center text-lg font-medium text-primary-100 motion-reduce:animate-none md:text-left md:text-xl"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Bringing style to your place
          </h1>
          <p
            className="animate-fade-in text-center md:text-left"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div
            className="flex w-full animate-fade-in justify-center md:justify-start"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <Button size="md" className="w-full max-w-xs md:w-auto" asChild>
              {isSignedIn ? (
                <Link href="/my-appointments">Book your next appointment</Link>
              ) : (
                <RegisterLink
                  authUrlParams={{
                    connection_id:
                      process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
                  }}
                >
                  Get started!
                </RegisterLink>
              )}
            </Button>
          </div>
        </SplitContainer.Right>
      </SplitContainer>
    </section>
  );
}

export default HeroSection;
