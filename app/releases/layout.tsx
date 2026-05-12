import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Release Notes | BitLyft AIR® Product Updates",
  description:
    "Stay up to date with the latest BitLyft AIR® platform releases, new features, integrations, and improvements to autonomous SOC automation.",
}

export default function ReleasesLayout({ children }: { children: React.ReactNode }) {
  return children
}
