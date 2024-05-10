import { useState } from "react";
import { axiosClient } from "../lib/httpClient";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export function EditProfile() {
  const navigate = useNavigate();
  const [website, setWebsite] = useState<string>();
  const [bio, setBio] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [accountType, setAccountType] = useState<string>();
  const [file, setFile] = useState<File | null | undefined>(null);

  const handelSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("bio", bio || "");
    formData.append("gender", gender || "");
    formData.append("accountType", accountType || "");
    formData.append("website", website || "");
    console.log(formData);
    if (file) {
      formData.append("file", file);
    }

    try {
      // Send form data to /user/prefence
      const res = (await axiosClient.post("/user/prefence", {
        bio,
        gender,
        accountType,
        website,
      })) as AxiosResponse;
      //   console.log(res);
      // Send image file to /user/uploadDp
      if (file) {
        const lastres = (await axiosClient.post(
          "/user/uploadDp",
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
      <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
        <div className="bg-white border border-gray-300 w-1/2 h-2/3 py-8 flex items-center flex-col mb-3 justify-center">
          <h1 className=" font-bold text-4xl absolute top-44">Edit Profile</h1>
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
              id="bio"
              placeholder="Bio"
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <input
              autoFocus
              className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
              id="website"
              placeholder="Website"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <div className="relative mb-2">
              <select
                className="text-xs w-full rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="gender"
                defaultValue="MALE"
                value={gender}
                onChange={(e) => setGender(e.target.value)} // Handle value change
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">Other</option>
              </select>
            </div>

            <div className="relative mb-2">
              <select
                className="text-xs w-full rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
                id="accountType"
                defaultValue="PUBLIC"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="" disabled selected hidden>
                  Select Account Type
                </option>
                <option value="PRIVATE">Private</option>
                <option value="PUBLIC">Public</option>
              </select>
            </div>

            <button
              type="submit"
              className="text-sm text-center hover:bg-blue-300 bg-blue-600 text-white py-1 rounded font-medium"
            >
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
