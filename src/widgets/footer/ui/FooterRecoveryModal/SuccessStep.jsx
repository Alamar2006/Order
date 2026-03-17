export const SuccessStep = ({ downloadUrl = [] }) => {

  const getFileName = (url, index) => {
    try {
      const parts = url.split("/");

      const docIndex = parts.indexOf("d");
      if (docIndex !== -1 && parts[docIndex + 1]) {
        return `Документ ${index + 1}`;
      }

      const name = parts.pop()?.split("?")[0];

      if (!name || name === "edit" || name === "view") {
        return `Файл ${index + 1}`;
      }

      return decodeURIComponent(name);
    } catch {
      return `Файл ${index + 1}`;
    }
  };

  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-6 text-center w-full">

      <p className="text-sm text-[--text-2] max-w-sm">
        Это и вправду вы! Ниже вы можете скачать свои файлы:
      </p>

      <div className="flex flex-col gap-3 w-full">
        {downloadUrl.map((url, index) => (
          <div
            key={index}
            className="
              flex items-center justify-between
              px-4 py-3
              bg-white
              border border-gray-200
              rounded-xl
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              
              <div className="text-lg">📄</div>

              <span className="text-sm text-gray-700 truncate">
                {getFileName(url, index)}
              </span>

            </div>

            <button
              type="button"
              onClick={() => handleDownload(url)}
              className="
                ml-4
                px-4 py-2
                text-sm
                font-medium
                text-white
                rounded-lg
                bg-blue-600
                hover:bg-blue-700
                active:scale-95
                transition
                cursor-pointer
              "
            >
              Скачать
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};