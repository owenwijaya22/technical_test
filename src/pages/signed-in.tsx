import { useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function SignedIn({ joke }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [revealPunchline, setRevealPunchline] = useState(false);

  return (
    <div>
      <h1>Signed In</h1>

      {/* Your own presentation of the joke here */}
      <h2>Joke of the Day:</h2>
      <p>{joke.setup}</p>

      {revealPunchline && <p>{joke.punchline}</p>}

      <button onClick={() => setRevealPunchline(true)}>Reveal Punchline</button>

      {/* End of your presentation */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
  const data = await res.json();

  // Pass joke data to the page via props
  return { props: { joke: data[0] } };
}
