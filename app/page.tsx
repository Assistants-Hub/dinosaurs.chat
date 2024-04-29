"use client";

import {NavBar} from "@/app/components/NavBar";
import {EraTimeline} from "@/app/components/EraTimeline";

export default function Home() {
  return (
      <div>
          <NavBar/>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Tap on your favorite dinosaur to chat with!</h1>
            <EraTimeline/>
          </main>
      </div>
  );
}
