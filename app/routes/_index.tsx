import type { Route } from "./+types/_index";
import { Welcome } from "../welcome/welcome";
import { useCallback, useEffect } from "react";
import { sdk } from "@farcaster/frame-sdk";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const handleReady = useCallback(async () => {
    await sdk.actions.ready();
  }, []);
  useEffect(() => {
    handleReady();
  }, [handleReady]);

  return <Welcome />;
}
