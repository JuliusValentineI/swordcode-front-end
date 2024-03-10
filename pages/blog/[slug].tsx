import { getArticle, getArticleById, getFile } from "@/utils/services";
import { Header } from "@/components/header/index"
import { Footer } from "@/components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import formatDate from "@/utils/formatDate";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
	const router = useRouter();
	let [content, setContent] = useState(``);
	let [filename, setFilename] = useState(``);
  let [date, setDate] = useState(``)

	useEffect(() => {
		const fetchData = async () => {
			try {
        const response_article = await getArticleById(
          `${apiURL}/api/v1/dataArticle/?article=${router.query.slug}`
        )
				const response = await getFile(
					`${apiURL}/api/v1/showFile/?article=${router.query.slug}`,
				);
				setContent(`${response.content}`);
				setFilename(response.filename);
        setDate(response_article.update_at)
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [router.query.slug]);

	return (
		<div className="font-serif w-100">
			<Header />
			<div className="w-full p-8 bg-white rounded shadow-sm mb-8">
				{content ? (
					<div className="">
						<h1 className="text-xl font-bold">{filename}</h1>
            <span className="text-gray-500 text-sm mb-4"> Ultima actualizacion: {formatDate(date)} </span>
						<div className="prose"> <ReactMarkdown>{content}</ReactMarkdown> </div>
					</div>
				) : (
					<p>-- No esta disponible --</p>
				)}
			</div>
      <Footer />
		</div>
	);
}
