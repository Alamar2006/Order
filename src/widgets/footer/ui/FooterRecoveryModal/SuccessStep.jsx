export const SuccessStep = ({ downloadUrl }) => {
    return (
      <div class="flex flex-col items-center gap-5 text-center">
  
        <p class="text-sm text-[--text-2]">
          Это и вправду вы! Вот ваша ссылка для скачивания:
        </p>
  
        <a
          href={downloadUrl}
          class="px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg"
        >
          Скачать файл
        </a>
      </div>
    );
  };