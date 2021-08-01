const apiEndpoints = {
	LOGIN: `${process.env.REACT_APP_API_URL}/api/auth/login`,
	USERS: `${process.env.REACT_APP_API_URL}/api/users/all`,
	POSTS: `${process.env.REACT_APP_API_URL}/api/posts`,
	IMAGE_UPLOAD: `${process.env.REACT_APP_API_URL}/api/upload`,
	REGISTER: `${process.env.REACT_APP_API_URL}/api/auth/register`,
	GET_USER: (id) => `${process.env.REACT_APP_API_URL}/api/users?userId=${id}`,
	LIKE_POST: (id) => `${process.env.REACT_APP_API_URL}/api/posts/${id}/like`,
	DELETE_POST: (id) => `${process.env.REACT_APP_API_URL}/api/posts/${id}`,
	TIMELINE: (id) => `${process.env.REACT_APP_API_URL}/api/posts/timeline/${id}`,
	PROFILE: (username) => `${process.env.REACT_APP_API_URL}/api/posts/profile/${username}`,
	USER_PROFILE: (username) => `${process.env.REACT_APP_API_URL}/api/users?username=${username}`
};

export default apiEndpoints;
