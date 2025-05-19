export default async function Layout({ children }: { children: string }) {
  return <main className="pt-[4.25rem] pb-4 sm:pb-5 w-full min-h-screen relative">{children}</main>;
}
