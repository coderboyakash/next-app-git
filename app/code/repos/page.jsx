import axios from "axios"
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa6'

const fetchRepos = async () => {
	const { data } = await axios('https://api.github.com/users/bradtraversy/repos', {
		headers: {
			'Authorization': 'token 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',
			'next': {
				revalidate: 60
			}
		}
	});
	return data
}

const Repos = async () => {
	const repos = await fetchRepos();
	return (
		<div className="repos-container">
			<h2>Repositories</h2>
			<ul className="repo-list">
				{repos.map(repo =>
					<li key={repo.id}>
						<Link href={`/code/repos/${repo.name}`}>
							<h3>{repo.name}</h3>
							<p>{repo.description}</p>
							<div className="repo-details">
								<span>
									<FaStar />{repo.stargazers_count}
								</span>
								<span>
									<FaCodeBranch />{repo.forks_count}
								</span>
								<span>
									<FaEye />{repo.watchers_count}
								</span>
							</div>
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Repos