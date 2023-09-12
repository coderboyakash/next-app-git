import axios from 'axios'
import Link from 'next/link'
import React from 'react'

const fetchRepoContents = async (name) => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const { data } = await axios(`https://api.github.com/repos/bradtraversy/${name}/contents`, {
        headers: {
            'Authorization': 'token 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',
            'next': {
                revalidate: 60
            }
        }
    })
    return data;
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents.filter((content) => content.type === 'dir')
    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dirs.map((dir) =>
                    <li key={dir.path}>
                        <Link href={`/code/repose/${name}/${dir.path}`}>
                            {dir.path}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default RepoDirs