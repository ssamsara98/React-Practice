import Axios from "axios";

const instance = Axios.create({
	// baseURL: "https://react-my-burger.firebaseio.com/",
	baseURL: "https://glassy-sky-277312.firebaseio.com/",
});

export default instance;
