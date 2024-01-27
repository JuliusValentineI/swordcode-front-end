import { getArticle } from "../utils/services";
import { Header } from "../components/header/index"

import Link from "next/link";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ articlesList = {} }) {
  return (
    <main>
      <div>
				<Header/> 
        <h1> Ultimos articulos actualizados </h1>{" "}
        <Link href={`/`}> ver todos los articulos </Link>{" "}
        <button>Seguir</button>
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
              <div key={article.id}>
                <span>{article.update_at}</span>
                <Link href={`/blog/${article.id}`}> {article.title} </Link>
                <p>{article.description}</p>
              </div>
            ),
          )}
      </div>

      <div>
        <h1> Notas </h1>
        <Link href={`/`}> Ver todas las notas </Link>
        <button> Seguir </button>
        {/* Notas -> Repository */}
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
