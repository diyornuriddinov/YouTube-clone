import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './_components'


const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: '#000' }}>
			<Navbar />
			<Routes>
				<Route path='' exact element={<Feed />} />
				<Route path='/video/:id' exact element={<VideoDetail />} />
				<Route path='/channel/:id' exact element={<ChannelDetail />} />
				<Route path='/video/:searchTerm' exact element={<SearchFeed />} />
			</Routes>
		</Box>
	</BrowserRouter>
)
export default App
