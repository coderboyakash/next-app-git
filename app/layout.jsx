import './globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({
	subsets: ['latin'], 
	weight: ['400', '700'] 
})

export const metadata = {
		title: 'Working!!!',
		description: 'Working!!!',
	}

export default function RootLayout({ children }) {
	return(
		<html lang = "en" >
			<body className={popins.className}>
				<main className='container'>
					{children}
				</main>
			</body>
		</html >
	)
}
