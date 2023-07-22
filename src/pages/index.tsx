import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Home = () => (
	<>
		<Head>
			<title>Next.js + Tailwind CSS + TypeScript</title>
		</Head>
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className} font-black text-6xl text-center`}
		>
			Template for Next.js + Tailwind CSS + TypeScript
		</main>
	</>
);

export default Home;
