import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 shrink-0 bg-[#2F3430] p-6 text-white">
      <h2 className="mb-10 text-2xl font-bold">CareTrack</h2>

      <nav className="flex flex-col gap-5">
        <Link href="/">Home</Link>
        <Link href="/follow-ups">Follow-Ups</Link>
        <Link href="/patient">Patients</Link>
        <Link href="/providers">Providers</Link>
      </nav>
    </aside>
  );
}