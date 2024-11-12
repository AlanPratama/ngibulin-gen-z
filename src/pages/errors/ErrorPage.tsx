import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            Oppps.. Terjadi Kesalahan
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">
            Page tidak ditemukan, silahkan kembali ke
            halaman utama.
          </p>
          <button onClick={goHome} className="inline-flex text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
            Kembali
          </button>
        </div>
      </div>
    </section>
  );
};
