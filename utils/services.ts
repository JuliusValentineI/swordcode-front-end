import axios from "axios";

// Push articles in database by django => api/v1/PostsRepository/
export async function postArticle(url = "", data = {}) {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return response.data;
  } catch (e) {
    console.error("Error al enviar la solicitud POST:", e);
    throw e;
  }
}

// Get articles in database in django => api/v1/PostsRepository/
export async function getArticle(url = "") {
  try {
    const response = await axios.get(url);
    const data = await response.data.results;

    return data;
  } catch (error) {
    //    console.error('Error al enviar la solicitud GET:', error);
    throw error;
  }
}

export async function getArticleById(url = "") {
  try {
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  } catch (e) {
    throw e;
  }
}
export async function getFile(url = "") {
  console.log(url);
  try {
    const response = await axios.get(url);
    const data = await response.data;

    return data;
  } catch (e) {
    throw e;
  }
}
