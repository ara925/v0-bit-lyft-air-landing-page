import { FreeTrialStickyBar } from "@/components/free-trial-sticky-bar"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pb-16">{children}</div>
      <FreeTrialStickyBar />
    </>
  )
}
