import './globals.css';
import { Poppins } from 'next/font/google';

const font = Poppins({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'The Boss Barberia',
	description:
		'El mejor cuidado para la belleza del caballero. Agenda tu cita y recibe la mejor calidad en cortes de cabello y cuidado de barba',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={font.className}>{children}</body>
		</html>
	);
}
