export const SuccessStep = ({ downloadUrl = [] }) => {

  const handleDownload = async (url, index) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Ошибка загрузки файла");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;

      const fileName =
        url.split("/").pop()?.split("?")[0] || `file-${index + 1}`;

      link.download = fileName;

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download error:", error);
      alert("Не удалось скачать файл");
    }
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
            onClick={() => handleDownload(url, index)}
            className="ml-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Скачать
          </button>
        </div>
      ))}
    </div>
  );
};
  