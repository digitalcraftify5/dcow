import * as React from "react";
import { Spinner } from "@/components/ui/spinner";
import { SITE_CONFIG } from "@/constants/site";

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/90 backdrop-blur-md">
      <div className="flex flex-col items-center space-y-4">
        <Spinner size="lg" />
        <span className="text-sm font-semibold tracking-wider text-zinc-300 uppercase">
          Loading {SITE_CONFIG.name}...
        </span>
      </div>
    </div>
  );
};
