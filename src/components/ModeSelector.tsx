import { useTheme } from "next-themes";
type Props = {
  mode: { [key: string]: string };
};

const ModeSelector = ({ mode }: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="sm:leading-5 block md:appearance-none bg-transparent border-none pl-3 pr-6 py-2 rounded-md text-lg font-bold"
    >
      {Object.keys(mode).map((key, index) => (
        <option key={index} className="bg-purple-500" value={key}>
          {mode[key]}
        </option>
      ))}
    </select>
  );
};

export default ModeSelector;
