import { FC } from "react";

type Props = {
  title: string;
};

const Button: FC<Props> = ({ title }) => {
  return (
    <div className="h-12 px-12 w-fit rounded-full text-white flex justify-center items-center bg-primary hover:cursor-pointer hover:scale-105 transition-scale duration-200 ease-out anti-aliasing">
      {title}
    </div>
  );
};

export default Button;
