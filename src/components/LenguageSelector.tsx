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
    <select onChange={handleChangeLang} className="bg-transparent">
      <option value="es" className="bg-red-500">{languages.es}</option>
      <option value="en" className="bg-red-500">{languages.en}</option>
    </select>
  );
}

export default LenguageSelector;
