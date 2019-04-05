import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID c2ac3d13b36787ffbfc4d14cc7d474f3833879e8c1a9f9155daedb45baec31f7'
	}
});
