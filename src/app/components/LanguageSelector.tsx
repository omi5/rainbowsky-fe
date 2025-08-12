// components/LanguageSelector.tsx
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  if (mobile) {
    return (
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={currentLanguage}
        className="block w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-700"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
        aria-label="Change language"
      >
        <span>
          {languages.find((lang) => lang.code === currentLanguage)?.name ||
            "English"}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === lang.code
                ? "bg-blue-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            lang={lang.code}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};
