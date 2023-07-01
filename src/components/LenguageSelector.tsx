import { useRouter } from "next/router";
import { ChangeEvent } from "react";

type Props = {
  languages: { [key: string]: string };
  locale: string;
};

function LenguageSelector({ languages, locale }: Props) {
  const router = useRouter();
  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <select
      value={locale}
      onChange={handleChangeLang}
      className="sm:leading-5 block md:appearance-none bg-transparent border-none pl-3 pr-6 py-2 rounded-md text-lg font-bold"
    >
      {Object.keys(languages).map((key, index) => (
        <option key={index} value={key} className="bg-purple-500">
          {languages[key]}
        </option>
      ))}
    </select>
  );
}

export default LenguageSelector;
