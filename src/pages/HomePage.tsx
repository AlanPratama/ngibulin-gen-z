import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description) setErrMsg("Masukkan deskripsi dulu!");
    else if(description.split('').length > 300) setErrMsg("Maksimal 300 karakter!");
    else navigate(`/result?description=${description}&media=${media}`)
  };

  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col items-center justify-center pb-3 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0"
    >
      <div className="flex flex-col items-center max-w-2xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
            Ngibulin Gen Z
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Generator</span>
            </span>{" "}
            Ngibulin {" "}
            <span className="text-red-500">Gen Z</span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sekarang ngibulin Gen Z tidak perlu banyak effort, cukup berikan hal simpel tanpa kredibilitas yang pasti!
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-stretch gap-4 w-full mb-4"
        >
          <div>
            <div className="flex justify-between items-center mb-0.5">
              <p className="text-red-500 font-bold capitalize text-start">{errMsg}</p>
            <p className="text-sm text-neutral-600 text-end">{description.split('').length}/300</p>
            </div>
            <input
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Masukkin deskripsi singkat (Ingat! Singkat saja, tidak perlu mendetail)"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-primary focus:outline-none focus:shadow-outline"
              maxLength={300}
            />
          </div>
          <input
            onChange={(e) => setMedia(e.target.value)}
            placeholder="Masukkin homeless media (Contoh: Folksit, Imphen, dll)"
            type="text"
            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-primary focus:outline-none focus:shadow-outline"
            maxLength={20}
          />
          <button
            type="submit"
            className="w-full items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-neutral-950 focus:shadow-outline focus:outline-none"
          >
            Generate
          </button>
        </form>
        <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
          Note: tolong gunakan ini dengan bijak!
        </p>
      </div>
    </div>
  );
};
