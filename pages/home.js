import Head from "next/head";
import Homepage from "../components/Landingpage";

export default function Home() {
  return (
    <div>
      <Homepage
        className='bg-yellow-50 w-auto h-auto text-center'
      />
    </div>
  );
}


