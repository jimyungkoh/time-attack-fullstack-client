import api from "@/api";
import ResponsiveGridCards from "@/components/ResponsiveGridCards";

export default async function Home(params: any) {
  const sortTypeCheck = params.searchParams.sort in ["date", "likes", "views"]; 
  const sort = sortTypeCheck ? params.searchParams.sort : "date";
  const deals = await api.deals.findDeals();
  console.log(sort)
  return (
    <article className="flex justify-center">
      <section className="md:px-16 md:w-full lg:w-8/12">
        <h2 className="font-bold text-3xl text-left my-12">전체 판매글</h2>
        <ResponsiveGridCards deals={deals} sort={sort} />
      </section>
    </article>
  );
}
