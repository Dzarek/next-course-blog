import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/portfolioImg.png"
          alt="An image showing Dzarek"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Dzarek</h1>
      <p>I blog about web development, bla bla bla</p>
    </section>
  );
};

export default Hero;
