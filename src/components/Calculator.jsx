import { useState } from "react";
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
  Dot,
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
  const [inputValue, setInputValue] = useState("0");

  const style="h-1/2";

  const clear = () => {
    setInputValue("0");
  }

  const appendInputValue = (e) => {
    const {value} = e.target;
    setInputValue((prev) => (prev === "0" ? value : `${prev}${value}`));
  }

  const deleteLastChar = () => {
    setInputValue((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  }

  return (
    <main className="main grid md:grid-cols-2">
      <section className="px-8 py-5">
        <label htmlFor="output" className="font-bold">Result:</label>
        <input type="text" value={inputValue} id="output" readOnly className="bg-gray-100 text-6xl w-full h-32 p-5 rounded-3xl" />
      </section>
      <section className="grid grid-cols-4 gap-3 px-8 py-5">
        <Button onClick={clear} className="bg-green-200"><img src={Clear} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Percentage} alt="Percentage" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Divide} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={XIcon} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="1"><img src={Number1} alt="1" className={style} /></Button>
        <Button onClick={appendInputValue} value="2"><img src={Number2} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="3"><img src={Number3} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Minus} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="4"><img src={Number4} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="5"><img src={Number5} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="6"><img src={Number6} alt="Clear" className={style} /></Button>
        <Button className="bg-lime-200"><img src={Plus} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="7"><img src={Number7} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="8"><img src={Number8} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="9"><img src={Number9} alt="Clear" className={style} /></Button>
        <Button className="row-span-2 h-full bg-orange-400"><img src={Equal} alt="Clear" className="w-1/2" /></Button>
        <Button onClick={appendInputValue} value="0"><img src={Number0} alt="Clear" className={style} /></Button>
        <Button onClick={appendInputValue} value="."><img src={Dot} alt="Clear" /></Button>
        <Button onClick={deleteLastChar}><img src={Backspace} alt="Clear" className={style} /></Button>
      </section>
    </main>
  );
};

export default Calculator;
