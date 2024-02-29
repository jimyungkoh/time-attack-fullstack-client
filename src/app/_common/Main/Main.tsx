import React from "react";

export default function Main({children}:{children:React.ReactNode}) {
  return (
      <main className="px-5 py-8 h-screen-full">
          {children}
      </main>
  )
}
