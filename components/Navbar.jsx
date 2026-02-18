import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <div className="p-2 mb-2 shadow-2xl sticky top-0 bg-cyan-600 z-10">
        <div className="flex justify-between items-center mr-3 ml-3">
      <Link href="/">
      <Image src={"/pictures/Shop-Logo.png"} alt="logo" width={100} height={100} className="rounded-3xl"/>
      </Link>
      <Link href="/warenkorb" className="flex">
      <Image src={"/pictures/cart.svg"} alt="warenkorb" width={40} height={40}/>
      <span className="bg-green-500 text-white text-xs rounded-full h-7 w-7 flex items-center justify-center">
        2
        </span>
      </Link>
      </div>
    </div>
  );
}
