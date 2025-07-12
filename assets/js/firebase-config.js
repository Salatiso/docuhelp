/**
 * Firebase Configuration for DocuHelp
 * Handles all authentication methods and user management
 */

// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithEmailAndPassword, 
         createUserWithEmailAndPassword,
         signInWithPopup,
         GoogleAuthProvider,
         OAuthProvider,
         signInAnonymously,
         signOut,
         onAuthStateChanged,
         sendPasswordResetEmail,
         updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSUBNwaZCILWdcxFBu8OCKZhxRJEjIcLc",
    authDomain: "docuhelp-d96d9.firebaseapp.com",
    projectId: "docuhelp-d96d9",
    storageBucket: "docuhelp-d96d9.firebasestorage.app",
    messagingSenderId: "411792849295",
    appId: "1:411792849295:web:d6f5a15bbe728a9cc5b3fa",
    measurementId: "G-YRLZ0QT8YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Authentication providers
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

// Configure providers
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

appleProvider.setCustomParameters({
    locale: 'en'
});

/**
 * DocuHelp Authentication Manager
 */
class DocuHelpAuth {
    constructor() {
        this.auth = auth;
        this.db = db;
        this.currentUser = null;
        this.init();
    }

    init() {
        // Listen for authentication state changes
        onAuthStateChanged(this.auth, (user) => {
            this.currentUser = user;
            this.handleAuthStateChange(user);
        });
    }

    /**
     * Handle authentication state changes
     */
    handleAuthStateChange(user) {
        if (user) {
            this.onUserSignedIn(user);
        } else {
            this.onUserSignedOut();
        }
    }

    /**
     * User signed in callback
     */
    async onUserSignedIn(user) {
        console.log('User signed in:', user.uid);
        
        // Create or update user document
        await this.createUserDocument(user);
        
        // Redirect to dashboard if on login page
        if (window.location.pathname.includes('login.html')) {
            window.location.href = 'dashboard/index.html';
        }
        
        // Update UI
        this.updateAuthUI(true);
    }

    /**
     * User signed out callback
     */
    onUserSignedOut() {
        console.log('User signed out');
        this.updateAuthUI(false);
        
        // Redirect to home if on protected page
        if (window.location.pathname.includes('dashboard/')) {
            window.location.href = '../index.html';
        }
    }

    /**
     * Create user document in Firestore
     */
    async createUserDocument(user) {
        if (!user) return;

        const userRef = doc(this.db, 'users', user.uid);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: serverTimestamp(),
                lastLoginAt: serverTimestamp(),
                tier: 'free',
                lifeCVData: {
                    documentsCreated: 0,
                    templatesUsed: [],
                    skillsAcquired: []
                }
            };

            try {
                await setDoc(userRef, userData);
                console.log('User document created');
            } catch (error) {
                console.error('Error creating user document:', error);
            }
        } else {
            // Update last login
            await setDoc(userRef, {
                lastLoginAt: serverTimestamp()
            }, { merge: true });
        }
    }

    /**
     * Email/Password Sign In
     */
    async signInWithEmail(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Email sign in error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Email/Password Sign Up
     */
    async signUpWithEmail(email, password, displayName) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            
            // Update display name
            if (displayName) {
                await updateProfile(userCredential.user, { displayName });
            }
            
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Email sign up error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Google Sign In
     */
    async signInWithGoogle() {
        try {
            const userCredential = await signInWithPopup(this.auth, googleProvider);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Google sign in error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Apple Sign In
     */
    async signInWithApple() {
        try {
            const userCredential = await signInWithPopup(this.auth, appleProvider);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Apple sign in error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Anonymous Sign In
     */
    async signInAnonymously() {
        try {
            const userCredential = await signInAnonymously(this.auth);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Anonymous sign in error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Sign Out
     */
    async signOut() {
        try {
            await signOut(this.auth);
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Reset Password
     */
    async resetPassword(email) {
        try {
            await sendPasswordResetEmail(this.auth, email);
            return { success: true };
        } catch (error) {
            console.error('Password reset error:', error);
            return { success: false, error: this.getErrorMessage(error) };
        }
    }

    /**
     * Get current user
     */
    getCurrentUser() {
        return this.currentUser;
    }

    /**
     * Check if user is signed in
     */
    isSignedIn() {
        return this.currentUser !== null;
    }

    /**
     * Get user data from Firestore
     */
    async getUserData() {
        if (!this.currentUser) return null;

        try {
            const userDoc = await getDoc(doc(this.db, 'users', this.currentUser.uid));
            return userDoc.exists() ? userDoc.data() : null;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return null;
        }
    }

    /**
     * Update auth UI elements
     */
    updateAuthUI(isSignedIn) {
        const signInButton = document.querySelector('a[href="login.html"]');
        const getStartedButton = document.querySelector('a[href="login.html#register"]');
        
        if (isSignedIn) {
            if (signInButton) {
                signInButton.textContent = 'Dashboard';
                signInButton.href = 'dashboard/index.html';
            }
            if (getStartedButton) {
                getStartedButton.textContent = 'Dashboard';
                getStartedButton.href = 'dashboard/index.html';
            }
        } else {
            if (signInButton) {
                signInButton.textContent = 'Sign In';
                signInButton.href = 'login.html';
            }
            if (getStartedButton) {
                getStartedButton.textContent = 'Get Started';
                getStartedButton.href = 'login.html#register';
            }
        }
    }

    /**
     * Get user-friendly error message
     */
    getErrorMessage(error) {
        switch (error.code) {
            case 'auth/user-not-found':
                return 'No account found with this email address.';
            case 'auth/wrong-password':
                return 'Incorrect password.';
            case 'auth/email-already-in-use':
                return 'An account with this email already exists.';
            case 'auth/weak-password':
                return 'Password should be at least 6 characters.';
            case 'auth/invalid-email':
                return 'Please enter a valid email address.';
            case 'auth/too-many-requests':
                return 'Too many attempts. Please try again later.';
            case 'auth/popup-closed-by-user':
                return 'Sign in was cancelled.';
            default:
                return 'An error occurred. Please try again.';
        }
    }
}

// Initialize authentication manager
const docuHelpAuth = new DocuHelpAuth();

// Export for global use
window.docuHelpAuth = docuHelpAuth;

// Export for module use
export { docuHelpAuth, auth, db };
