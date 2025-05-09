import ClientPage from "./ClientPage"

// Using generateStaticParams for Static Site Generation
export async function generateStaticParams() {
  return []
}

export default async function Home() {
  return <ClientPage />
}
