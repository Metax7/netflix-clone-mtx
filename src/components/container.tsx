import { ReactNode } from "react";

export default function Container({ content }: { content: ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl px-7 sm:px-20 xl:px-0">
      {content}
    </div>
  );
}
