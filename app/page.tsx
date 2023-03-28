import { socials } from "@/common/socials";
import Button from "@/components/button";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-[80vh] flex justify-center bg-primary-light-bg">
      <div className="side-margins flex flex-row justify-between items-center">
        <div>
          <h1 className="text-[3.5rem] font-semibold leading-[4rem]">
            Hi there! 👋
          </h1>
          <h1 className="mt-6 text-[2.5rem] font-semibold leading-[3rem]">
            My name is <span className="gradient-text">Andriy</span> and
            <br /> I&apos;m a{" "}
            <span className="gradient-text">Frontend Developer</span>.
          </h1>
          <div className="mt-24 flex flex-row items-center gap-6">
            {socials.map((social) => (
              <a key={social.name} href={social.url}>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-[30px] hover:cursor-pointer"
                />
              </a>
            ))}
            <Button title="Contact" />
          </div>
          <div className="mt-12"></div>
        </div>
        <img
          src="/portfolio-profile.jpg"
          alt="Profile picture"
          className="w-full max-w-[400px] rounded-t-[50px] rounded-br-[50px]"
        />
      </div>
    </div>
  );
}
