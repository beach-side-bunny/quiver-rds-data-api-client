import type React from "react";
import { useTranslation } from "react-i18next";

type LoadingOverlayProps = {
  message?: string;
};

export function LoadingOverlay({ message }: LoadingOverlayProps): React.JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md">
      <div className="z-10 flex min-w-[240px] flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-slate-900/55 px-8 py-6 shadow-2xl">
        <div className="relative h-1.5 w-[200px] overflow-hidden rounded-full bg-white/15 shadow-sm">
          <span className="stitch-loading-bar absolute left-0 top-0 h-full w-1/2 rounded-full" />
        </div>
        <p className="stitch-code-md animate-pulse tracking-[0.2em] text-white uppercase">
          {message ?? t("common.loading")}
        </p>
      </div>
    </div>
  );
}
