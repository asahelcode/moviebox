import HeroImage from "../../assets/images/Poster.svg";
import { Button } from "../../components";
import ImdbIcon from "../../assets/images/imdb.svg";
import TomatoIcon from "../../assets/images/berry.svg";
import PlayIcon from "../../assets/images/Play.svg";

const Hero = () => {
  return (
    <div className="relative flex h-max ">
      <div className="items-center justify-center flex-1">
        <img src={HeroImage} alt="hero image" className="flex object-cover" />
      </div>

      <div className="absolute space-y-5 text-white bottom-32 left-28">
        <div className="text-5xl font-bold tracking-wider font-dmsans">
          <span>John Wick 3: </span>
          <br />
          <span>Parabellum</span>
        </div>

        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <img src={ImdbIcon} alt="" />
            <span className="text-xs">86.0 / 100</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={TomatoIcon} alt="" />
            <span className="text-xs">97%</span>
          </div>
        </div>

        <div className="text-sm font-dmsans">
          <span>John Wick is on the run after killing a member</span>
          <br />
          <span>of the international assassins' guild, and with</span>
          <br />
          <span>a $14 million price tag on his head, he is the</span>
          <br />
          <span>target of hit men and women everywhere.</span>
        </div>
        <Button Icon={PlayIcon} label={"WATCH TRAILER"} />
      </div>
    </div>
  );
};

export default Hero;
