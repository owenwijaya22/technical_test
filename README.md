## Getting Started

First, run the development server to see the interface:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Tasks
Detailed instructions for each task are in the comments of the corresponding file.

### Task 0: Initialize Firebase
pages/index.tsx
- [ ] Create a Firebase project on Firebase Console
- [ ] Enable Google Sign in
- [ ] Add Firebase to the project
- [ ] Initialize Firebase
> Documentation: https://firebase.google.com/docs/auth/web/start

### Task 1: Implement Google Sign in with Firebase
pages/index.tsx
- [ ] Implement Google Sign in with Google button
- [ ] Redirect to the Signed In page to show random programming jokes
> Documentation: https://firebase.google.com/docs/auth/web/google-signin

### Task 2: Fetch programming jokes from the API
pages/signed-in.tsx
- [ ] Fetch programming jokes from the API using getServerSideProps
> Learn more about Nextjs Data Fetching: https://nextjs.org/docs/basic-features/data-fetching
- [ ] Pass the joke to the page on the client side
> API URL: https://official-joke-api.appspot.com/jokes/programming/random

### Task 3: Display the programming joke
pages/signed-in.tsx
- [ ] Display the programming joke in your own way :)

### (Optional) Task 4: Find a critical design flaw in the website
No need to send me the problem and fix, just let me know what you find in the interview

## Note
- Feel free to explore the codebase and make changes to the UI
- You can use any UI library you want
- It is completely fine if you cannot complete all the tasks as one of the objectives in this test is to let you know the usual developer experience in CheckMate
- If you have any questions, please feel free to ask me :) Just drop me an [email](mailto://hermanho@checkmatehk.io)