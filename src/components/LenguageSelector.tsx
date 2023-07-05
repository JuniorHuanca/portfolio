// import { useRouter } from "next/router";
// import { ChangeEvent } from "react";

// type Props = {
//   languages: { [key: string]: string };
//   locale: string;
// };

// function LenguageSelector({ languages, locale }: Props) {
//   const router = useRouter();
//   const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
//     router.push(router.pathname, router.pathname, {
//       locale: e.target.value,
//     });
//   };
//   return (
//     <select
//       value={locale}
//       onChange={handleChangeLang}
//       className="sm:leading-5 block md:appearance-none bg-transparent border-none pl-3 pr-6 py-2 rounded-md text-lg font-bold"
//     >
//       {Object.keys(languages).map((key, index) => (
//         <option key={index} value={key} className="bg-purple-500">
//           {languages[key]}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default LenguageSelector;

import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { TbLanguage } from "react-icons/tb";
type Props = {
  languages: { [key: string]: string };
  locale: string;
};

function LenguageSelector({ languages, locale }: Props) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();
  const handleChangeLang = (e: MouseEvent<HTMLButtonElement>) => {
    setDropdown(false);
    router.push(router.pathname, router.pathname, {
      locale: e.currentTarget.name,
    });
  };
  return (
    <div>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="px-3 py-2 transition duration-500 hover:text-blue-500 dark:hover:text-blue-500 text-lg font-bold text-center inline-flex items-center"
        type="button"
      >
        <TbLanguage className="mr-2 text-2xl"></TbLanguage>
        <span>{languages[locale]}</span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`${
          dropdown ? "block" : "hidden"
        } z-10 absolute rounded-lg w-36 bg-blue-950 dark:bg-purple-800`}
      >
        <ul className="py-2 text-sm text-gray-200">
          {Object.keys(languages).map((key, index) => (
            <li key={index}>
              <button
                onClick={handleChangeLang}
                name={key}
                type="button"
                className={`${
                  key === locale ? "text-indigo-600 bg-blue-900" : "text-white"
                } block px-4 py-2 hover:bg-blue-900 w-full text-start`}
              >
                {languages[key]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LenguageSelector;
