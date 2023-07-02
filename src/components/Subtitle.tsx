import React from "react";
type Props = {
  children: string;
};
const Subtitle = ({ children }: Props) => {
  const first = children
    .substring(0, Math.floor(children.length / 2))
    .toUpperCase();
  const second = children
    .substring(Math.floor(children.length / 2))
    .toUpperCase();

  return (
    <h2 className="basis-3/5 text-4xl font-bold xl:text-5xl">
      <span className="text-blue-500">{first}</span>
      {second}
    </h2>
  );
};

export default Subtitle;
