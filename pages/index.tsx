import { getArticle } from "../utils/services";
import { Header } from "../components/header/index";
import { Footer } from "../components/footer/index";
import Link from "next/link";
import formatDate from "@/utils/formatDate";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ articlesList = {} }) {
  return (
    <main>
      <div className=" font-serif">
        <Header />
        {/*Top Bar left*/}
        <div className="grid grid-cols-5 gap-3 p-8">
          <div className="container col-span-3 px-4">
            <h1 className="text-xl font-bold"> Ultimos articulos actualizados</h1>{" "}
            <Link className="" href={`/`}> <span className="text-gray-700">ver todos los articulos</span> </Link>{" "}
            {/*<button>Seguir</button> */}
            {/* Array items articles show screem*/}
            {Array.isArray(articlesList) &&
              articlesList.map(
                (article: {
                  id: number;
                  title: string;
                  description: string;
                  post_type: string;
                  published_at: string;
                  update_at: string;
                  is_active: boolean;
                }) => (
                  <div className="article" key={article.id}>
                    <span className="date text-gray-700">
                      {formatDate(article.update_at)}
                    </span>
                    <Link href={`/blog/${article.id}`}>
                      <h2 className="title text-stone-950">{article.title}</h2>{" "}
                    </Link>
                    <p className="description text-gray-700">{article.description}</p>
                  </div>
                ),
              )}
          </div>

          {/* Top bar in left -- Notes Articles  */}
          <div className="container col-span-2 px-4">
            <h1 className="text-xl font-bold"> Notas </h1>
            <Link href={`/`}> <span className="text-gray-700"> Ver todas las notas </span> </Link>
            {/* <button> Seguir </button> */}
            {/* Notas -> Repository */}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const articlesList = await getArticle(`${apiURL}/api/v1/articles/`);

  return {
    props: {
      articlesList,
    },
  };
}
