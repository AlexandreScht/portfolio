export default async function Layout({ children }: { children: string }) {
  return <main className="pt-[4.25rem] w-full min-h-screen relative">{children}</main>;
}
