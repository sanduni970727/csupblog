import MyCard from './MyCard';
import useFetch from './useFetch';


function Home() {

	const name="Shonali";
	const { data: posts } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);
	console.log(posts);

	return (
		<div className="posts-list">
			<div className="posts-container">
				{posts ? (
					posts.map((post) => <MyCard border="light " data={post} key={post.id} />)
				) : (
					<p>Loading page...</p> 
				)}
			</div>
		</div>
	);
}

export default Home;
