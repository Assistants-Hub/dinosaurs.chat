"use client";

import {NavBar} from "@/app/components/NavBar";
import {EraTimeline} from "@/app/components/EraTimeline";
import {useGetDinosaurs} from "@/app/client";
import {useEffect, useState} from "react";
import {Spinner} from "flowbite-react";

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const { dinosaurCollectionLoading,
        dinosaurCollection, dinosaurCollectionEmpty,
        dinosaurCollectionError, dinosaurCollectionValidating } = useGetDinosaurs();

    useEffect(() => {
        if (!dinosaurCollectionLoading) {
            setIsLoading(false);
            console.log(dinosaurCollection);
        }
    }, [dinosaurCollectionLoading]);

  return (

              <div>
                  <NavBar/>
                  <main className="flex min-h-screen flex-col items-center justify-between p-10 pl-24 pr-24">
                      {
                          isLoading ?
                              <div>
                                  <Spinner color='info' aria-label='Loading assistant..' />
                              </div>
                              :
                              <div className={"items-center justify-center"}>
                                  <h1 className="pb-10 self-center">Tap on your favorite dinosaur to chat with!</h1>
                                  <EraTimeline collection={dinosaurCollection}/>
                              </div>
                      }
                  </main>
              </div>
  );
}
