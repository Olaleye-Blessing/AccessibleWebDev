import { NextPage } from "next"
import { useRouter } from "next/router"

// Components
import Layout from "../../components/Layout/Layout"

// Utils
import { capitalizeRouter } from "../../utils"

const VideoPage: NextPage = () => {
	const router = useRouter()
	const title = capitalizeRouter(router.pathname)
	return (
		<Layout
			pageTitle={title}
			headerTitle={title}
			activeNavLink={router.pathname}>
			<p>Video - coming soon</p>
		</Layout>
	)
}

export default VideoPage

/*
Livestream - short descriptive label "Birdbox webcam"
Recording - ideally transcript linked after video

*/