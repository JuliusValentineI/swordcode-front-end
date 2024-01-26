import { useEffect, useState } from "react";
//import '../assets/css/main.scss'
import { getArticle, getFile } from "../utils/services";
import ReactMarkdown from "react-markdown"

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ repositoryList = {} }) {
	const markdown = `
### TITLE
	`

	async function searchFile(id) {
		let response = await getFile(`${apiURL}/api/v1/showFile/?article=${id}`)
		console.log(response)
	}

  return (
    <>
      <div> Welcome my app </div>
			{ repositoryList.map ((i) => 
				<div key={i.id}>
					<span> {i.title} </span>
					<button onClick={()=>searchFile(i.id)}> Search Article in databases = File </button>
				</div>
				)
			}
			<ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
}

export async function getStaticProps() {
  const repositoryList = await getArticle(
    `${apiURL}/api/v1/articles/`,
  );

  return {
    props: {
      repositoryList
    },
  };
}
