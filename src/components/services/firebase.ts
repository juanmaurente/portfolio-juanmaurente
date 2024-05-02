import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	getDocs,
	Firestore,
} from 'firebase/firestore/lite';
import { Key } from 'react';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

export interface Project {
	id: Key | null | undefined;
	title: string;
	githubRepo: string;
	skills: string[];
	siteLink: string;
	imgLink: string;
}

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of cities from your database
export async function getProjects(db: Firestore) {
	const projectsCollection = collection(db, 'projects');
	const projectSnapshot = await getDocs(projectsCollection);
	const projectsList = projectSnapshot.docs.map((project) => ({
		...(project.data() as Project), // Cast the data to match the Project interface
	}));
	return projectsList;
}
