import Head from "next/head";
import GoogleButton from "react-google-button";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    onAuthStateChanged,
    getRedirectResult,
} from "firebase/auth";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

// Task 0: Initialize Firebase
// Replace the following with your app's Firebase project configuration
// https://firebase.google.com/docs/web/setup

const firebaseConfig = {
    apiKey: "AIzaSyDp0jlslnhybO0QVpKrLR969_J4UHUZaq0",
    authDomain: "interview-test-d4d46.firebaseapp.com",
    projectId: "interview-test-d4d46",
    storageBucket: "interview-test-d4d46.appspot.com",
    messagingSenderId: "847572299676",
    appId: "1:847572299676:web:7bb1e5c0e324ee5fa56259",
    measurementId: "G-YH0XRT6NC3",
};

const app = initializeApp(firebaseConfig);

// Firebase Auth instance
const auth = getAuth(app);

export default function Home() {
    //Next.js router
    const router = useRouter();

    // you might have to wait several seconds for the redirect process as my internet in my home country is pretty slow, and the project is hosted using my own laptop which inevitably uses my home's slow internet speed
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // User signed in, you can get redirect result here if needed.
                const result = await getRedirectResult(auth);
                // You can access additional user information here if needed
                // const additionalUserInfo = result.additionalUserInfo;
                router.push("/signed-in");
            } else {
                // User is signed out.
                // Show sign in screen with button.
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [router, auth]);

    const signIn = () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            login_hint: "user@example.com",
        });
        signInWithRedirect(auth, provider);
    };
    


    return (
        <>
            <Head>
                <title>Sign in to see the public holidays in HK</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className="container">
                <main
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <h1 className="title">
                        Welcome to{" "}
                        <a href="https://checkmatehk.io">CheckMate</a>
                    </h1>
                    <h3>Sign in to see a random programming joke 😳</h3>

                    <GoogleButton
                        label={"Sign in with Google"}
                        type="light"
                        style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontFamily: "Roboto, sans-serif",
                            color: "#444",
                        }}
                        onClick={signIn}
                    />
                </main>
            </div>
        </>
    );
}
