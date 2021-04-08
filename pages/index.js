import Head from "next/head";
import Homepage from "../components/Landingpage";

export default function Home() {
  return (
    <div>
      <Homepage
        className='w-auto h-auto text-center bg-yellow-50'
      />
    </div>
  );
}


