import { useRouter } from "next/router";
import { ChangeEvent } from "react";

type Props = {
  languages: { es: string; en: string };
};

function LenguageSelector({ languages }: Props) {
  const router = useRouter();
  const handleChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value,
    });
  };
  return (
    <select
      onChange={handleChangeLang}
      className="md:pr-8 sm:text-sm sm:leading-5 block md:appearance-none bg-transparent border-none pl-3 pr-3 py-2 rounded-md text-base font-medium"
    >
      <option value="es" className="bg-purple-700">
        {languages.es}
      </option>
      <option value="en" className="bg-purple-700">
        {languages.en}
      </option>
    </select>
  );
}

export default LenguageSelector;
