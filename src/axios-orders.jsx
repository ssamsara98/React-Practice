import Axios from "axios";

const instance = Axios.create({
	// baseURL: "https://react-my-burger.firebaseio.com/",
	baseURL: process.env.REACT_APP_FIREBASE_DB_URL,
});

export default instance;
