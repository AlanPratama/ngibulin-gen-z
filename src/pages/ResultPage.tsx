import html2canvas from "html2canvas";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { imageWrapper } from "../../public/index";
import { Loading } from "./components/Loading";

export const ResultPage = () => {
  const [randomImage, setRandomImage] = useState(
    Math.floor(Math.random() * 26)
  );
  const [loadedImage, setLoadedImage] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const description = searchParams.get("description") || "";
  const media = searchParams.get("media") || "Folksit";

  useEffect(() => {
    if (!description) navigate("/", { replace: true });
  }, []);

  const goHome = () => navigate("/");
  const downloadImage = () => {
    const downloadSection = document.getElementById("download-section");

    if (downloadSection) {
      const fileName = description.split(" ").slice(0, 5).join("-");
      html2canvas(downloadSection).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = `ngibulin-gen-z-${fileName}.png`;
        link.click();
      });
    }
  };

  const generateRandomImage = () => {
    setRandomImage(Math.floor(Math.random() * 26));
  };

  const changeLoadedImage = () => {
    setLoadedImage(true);
  };

  return (
    <>
      {!loadedImage && (
        <Loading/>
      )}
      <div
        className={`${
          !loadedImage ? "hidden" : "flex"
        } flex-col justify-center items-center gap-8 min-h-screen`}
      >
        <div>
          <div className="grid place-items-center">
            <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
              Ngibulin Gen Z
            </p>
          </div>

          <div
            id="download-section"
            className="relative shadow w-[340px] h-[340px] md:w-[500px] md:h-[500px] grid place-items-center"
          >
            <img
              src={imageWrapper.randomImages[randomImage]}
              alt={description}
              onLoad={changeLoadedImage}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 w-full p-2">
              <div className="bg-white p-2">
                <p className="text-base md:text-lg text-justify">
                  {description}
                </p>
                <p className="font-impact text-end text-xl md:text-2xl text-black uppercase">
                  {media}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3 p-2">
          <button
            type="button"
            onClick={generateRandomImage}
            className="w-full items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-neutral-950 focus:shadow-outline focus:outline-none"
          >
            Ganti Image
          </button>
          <button
            type="button"
            onClick={downloadImage}
            className="w-full items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-neutral-950 focus:shadow-outline focus:outline-none"
          >
            Download
          </button>
          <button
            type="button"
            onClick={goHome}
            className="w-full items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary hover:bg-neutral-950 focus:shadow-outline focus:outline-none"
          >
            Kembali
          </button>
        </div>
      </div>
    </>
  );
};
