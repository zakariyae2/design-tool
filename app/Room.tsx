"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap } from "@liveblocks/client";
import Loader from "@/components/Loader";

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{ cursor: null, cursorColor: null, editingText: null }} 
    initialStorage={{
      /**
       * We're using a LiveMap to store the canvas objects
       *
       * LiveMap: https://liveblocks.io/docs/api-reference/liveblocks-client#LiveMap
       */
      canvasObjects: new LiveMap(),
    }}
    >
      <ClientSideSuspense fallback={<Loader />}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}