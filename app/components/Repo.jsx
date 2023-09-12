import axios from 'axios';
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa6';

const fetchRepo = async (name) => {
    const { data } = await axios(`https://api.github.com/repos/bradtraversy/${name}`, {
		headers: {
			'Authorization': 'token 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',
			'next': {
				revalidate: 60
			}
		}
    });
    return data
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name);
    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar />
                    <span>
                        {repo.stargazers_count}
                    </span>
                </div>
                <div className="card-stat">
                    <FaCodeBranch />
                    <span>
                        {repo.forks_count}
                    </span>
                </div>
                <div className="card-stat">
                    <FaEye />
                    <span>
                        {repo.watchers_count}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Repo