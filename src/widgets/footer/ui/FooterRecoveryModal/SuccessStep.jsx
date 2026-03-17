export const SuccessStep = ({ downloadUrl }) => {
    return (
      <div class="flex flex-col items-center gap-5 text-center">
  
        <p class="text-sm text-[--text-2]">
          Это и вправду вы! Вот ваша ссылка для скачивания:
        </p>
        {downloadUrl.map((url, index) => (
      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
        <span className="text-sm truncate flex-1">
          {url.split('/').pop() || `Файл ${index + 1}`}
        </span>
      <a
        href={url}
        download
        className="ml-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
      >
        Скачать
      </a>
    </div>
     ))}
        
      </div>
    );
  };


  