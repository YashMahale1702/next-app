import '../styles/globals.css';
// import { motion } from 'framer-motion';

// const item = {
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//     hidden: { opacity: 0, y: 50, transition: { duration: 1 } }
// };

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

// function MyApp({ Component, pageProps }) {
// 	return (
// 		<motion.div initial="hidden" animate="visible" variants={item}>
// 			<Component {...pageProps} />
// 		</motion.div>
// 	);
// }

export default MyApp;
