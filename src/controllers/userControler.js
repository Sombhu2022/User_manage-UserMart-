import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../redux/user/userSlice";
import bcrypt from "bcryptjs";

const useAuthActions = () => {
    const dispatch = useDispatch();

    const getUserAndUpdateState = async () => {
        try {
            const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

            if (isAuthenticated) {
                const user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    dispatch(setUser(user));
                    return { message: 'User fetched!', success: true };
                }
            } else {
                return { message: 'User not authenticated, login now!', success: false };
            }
        } catch (error) {
            return { message: 'Something went wrong, please try again!', success: false };
        }
    };

    const registerUser = async ({ name, email, password, address, latitude, longitude }) => {
        if (!name || !email || !password || !address || !latitude || !longitude) {
            return { message: 'All fields are required! Please fill up all fields.', success: false };
        }
        if (password.length < 8) {
            return { message: 'Password must be 8 characters or more!', success: false };
        }

        try {
            // Encrypt the password
            const hashedPassword = bcrypt.hashSync(password, 10);

            const userData = { name, email, password: hashedPassword, address, latitude, longitude };

            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('isAuthenticated', true);

            const res = getUserAndUpdateState();
            return { message: `Welcome ${name}, explore UserMart! Your one-stop solution for all your product needs.`, success: true };
        } catch (error) {
            return { message: 'Something went wrong, please try again!', success: false };
        }
    };

    const loginUser = async ({ email, password }) => {
        if (!email || !password) {
            return { message: 'All fields are required! Please fill up all fields.', success: false };
        }

        try {
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email) {
                // Compare the hashed password with the entered password
                const isPasswordMatch = bcrypt.compareSync(password, user.password);
                if (isPasswordMatch) {
                    localStorage.setItem('isAuthenticated', 'true');
                    const res = getUserAndUpdateState();
                    return { message: `Welcome back ${user.name}, continue your exploring.`, success: true };
                } else {
                    return { message: 'Email or password not matched!', success: false };
                }
            } else {
                return { message: 'Email or password not matched!', success: false };
            }
        } catch (error) {
            return { message: 'Something went wrong, please try again!', success: false };
        }
    };

    const logoutUser = (name) => {
        try {
            localStorage.setItem('isAuthenticated', 'false');
            dispatch(clearUser());
            return { message: `Goodbye, ${name}! You have successfully logged out of UserMart. We look forward to your return.`, success: true };
        } catch (error) {
            return { message: 'Something went wrong, please try again!', success: false };
        }
    };

    return { registerUser, loginUser, logoutUser, getUserAndUpdateState };
};

export default useAuthActions;
