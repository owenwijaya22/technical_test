import { useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function SignedIn({ joke }) {
  const [revealPunchline, setRevealPunchline] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Signed In</h1>

      {/* Your own presentation of the joke here */}
      <h2 className="joke-title">Joke of the Day:</h2>
      <p className="joke-setup">{joke.setup}</p>

      {revealPunchline && <p className="joke-punchline">{joke.punchline}</p>}

      <button className="reveal-button" onClick={() => setRevealPunchline(true)}>
        Reveal Punchline
      </button>
      
      <style jsx>{`
        .container {
          text-align: center;
        }

        .title {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .joke-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .joke-setup {
          font-size: 18px;
          margin-bottom: 20px;
        }

        .joke-punchline {
          font-size: 20px;
          font-weight: bold;
          margin-top: 20px;
        }

        .reveal-button {
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          border: none;
          cursor: pointer;
          margin-top: 20px;
          transition: background-color 0.3s ease;
        }

        .reveal-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const data = await res.json();

  // Pass joke data to the page via props
  return { props: { joke: data[0] } };
}
