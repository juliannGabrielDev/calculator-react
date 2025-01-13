import Button from "@/components/Button";
export const Calculator = () => {
  return (
    <main className="main grid md:grid-cols-2">
      <section className="bg-blue-400">hi</section>
      <section className="bg-purple-400 grid grid-cols-4 gap-3 p-5">
        <Button type="clear"></Button>
      </section>
    </main>
  );
};
