import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @keyframes dropupAppear {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
