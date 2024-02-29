import Link from "next/link"; //unline anchor tags, prevents full page reload

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Welcome</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
};

export default HomePage;
