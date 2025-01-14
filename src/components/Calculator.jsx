import Button from "../components/Button";
import {
  Clear,
  Percentage,
  Divide,
  XIcon,
  Minus,
  Plus,
  Equal,
  Backspace,
  Point,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  Number8,
  Number9,
  Number0,
} from "../assets/icons";

const Calculator = () => {
  const style="h-1/2";

  return (
    <main className="main grid md:grid-cols-2">
      <section className="">hi</section>
      <section className="grid grid-cols-4 gap-3 px-8 py-5">
        <Button className="bg-green-200"><img src={Clear} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Percentage} alt="Percentage" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Divide} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={XIcon} alt="Clear" className={style} /></Button>
        <Button><img src={Number1} alt="Clear" className={style} /></Button>
        <Button><img src={Number2} alt="Clear" className={style} /></Button>
        <Button><img src={Number3} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Minus} alt="Clear" className={style} /></Button>
        <Button><img src={Number4} alt="Clear" className={style} /></Button>
        <Button><img src={Number5} alt="Clear" className={style} /></Button>
        <Button><img src={Number6} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Plus} alt="Clear" className={style} /></Button>
        <Button><img src={Number7} alt="Clear" className={style} /></Button>
        <Button><img src={Number8} alt="Clear" className={style} /></Button>
        <Button><img src={Number9} alt="Clear" className={style} /></Button>
        <Button className="row-span-2 h-full bg-orange-400"><img src={Equal} alt="Clear" className="w-1/2" /></Button>
        <Button><img src={Number0} alt="Clear" className={style} /></Button>
        <Button><img src={Point} alt="Clear" /></Button>
        <Button><img src={Backspace} alt="Clear" className={style} /></Button>
      </section>
    </main>
  );
};

export default Calculator;
