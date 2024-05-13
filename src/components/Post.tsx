import { useState } from "react";
import { axiosClient } from "../lib/httpClient";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export function Post() {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [file, setFile] = useState<File | null | undefined>(null);

  const handelSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Send form data to /user/prefence
      const res = (await axiosClient.post("/post/create", {
        title,
        content,
      })) as AxiosResponse;
      //   console.log(res);
      // Send image file to /user/uploadDp
      if (file) {
        const lastres = (await axiosClient.post(
          `/post/postImg/${res.data.id}`,
          {
            file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )) as AxiosResponse;
        // console.log(lastres);
      }
      navigate("/");
      // Handle success
      console.log("Form submitted successfully");
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Nav></Nav>
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-1/2 h-2/3 py-8 flex items-center flex-col mb-3 justify-center">
          <h1 className=" font-bold text-4xl absolute top-44">Create Post</h1>
          <form onSubmit={handelSumbit} className="mt-8 w-5/6 flex flex-col">
            <input
              type="file"
              placeholder="Select Image"
              accept="image/*" // Specify accepted file types, such as images
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
            <input
              autoFocus
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="title"
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              autoFocus
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="content"
              placeholder="Content"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <button
              type="submit"
              className="text-sm text-center hover:bg-blue-300 bg-blue-600 text-white py-1 rounded font-medium"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
