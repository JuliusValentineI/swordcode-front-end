import { getFile } from "@/utils/services";
import { Header } from "@/components/header/index"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function Page() {
	const router = useRouter();
	let [content, setContent] = useState(``);
	let [filename, setFilename] = useState(``);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getFile(
					`${apiURL}/api/v1/showFile/?article=${router.query.slug}`,
				);
				setContent(`${response.content}`);
				setFilename(response.filename);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, [router.query.slug]);

	return (
		<>
			<Header />
			<div className="container">
				{content ? (
					<div>
						<h1>{filename}</h1>
						<ReactMarkdown>{content}</ReactMarkdown>
					</div>
				) : (
					<p>-- No esta disponible --</p>
				)}
			</div>
		</>
	);
}
