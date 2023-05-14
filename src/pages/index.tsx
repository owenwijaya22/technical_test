import Head from "next/head";
import GoogleButton from "react-google-button";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
} from "firebase/auth";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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

// GoogleAuthProvider instance
// Specify additional OAuth 2.0 scopes that you want to request from the authentication provider.

export default function Home() {
    //Next.js router
    const router = useRouter();

    // Task 1: Implement Google Sign in with Firebase
    // https://firebase.google.com/docs/auth/web/google-signin 
    // async is used to simplify "catching" the result process and make sure that no resources are wasted
    const signIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
        provider.setCustomParameters({
            login_hint: "user@example.com",
        });
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        // Firebase Auth instance
        const auth = getAuth(app);
        signInWithRedirect(auth, provider);
        // Wait for the user to return from the redirect
        // Wait for the user to return from the redirect

        try {
            const result = await getRedirectResult(auth);

            // User successfully signed in.
            // You can retrieve the Google user's info with result.user
            // then use the Next.js router to redirect the user

            // provide another fail-safe boolean mechanism to make sure that result is not Null 
            if (result && result.user) {
                router.push("/signed-in");
            }
        } catch (error) {
            // Handle Errors here.
            console.error(error);
        }

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

                    {/* Button for user to sign in with Google */}
                    {/* Task 1: Implement Google Sign in with Firebase */}
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
