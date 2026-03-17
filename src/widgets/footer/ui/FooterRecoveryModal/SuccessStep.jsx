export const SuccessStep = ({ downloadUrl = [] }) => {

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <p className="text-sm text-[--text-2]">
        Это и вправду вы! Вот ваша ссылка для скачивания:
      </p>

      {downloadUrl.map((url, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-gray-50 rounded w-full"
        >
          <span className="text-sm truncate flex-1">
            {url.split("/").pop()?.split("?")[0] || `Файл ${index + 1}`}
          </span>

          <button
            type="button"
            onClick={() => handleDownload(url)}
            className="ml-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm cursor-pointer"
          >
            Скачать
          </button>
        </div>
      ))}
    </div>
  );
};
  