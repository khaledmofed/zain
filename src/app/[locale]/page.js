import Home1 from "./home1/page";
import { fetchHome } from "@/lib/api";
import HomeApiDebug from "@/components/utilities/HomeApiDebug";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const homeData = await fetchHome(locale);

  return (
    <>
      <HomeApiDebug data={homeData} locale={locale} />
      <Home1 params={params} homeData={homeData} />
    </>
  );
}
