import Link from 'next/link'
import Repo from '../../../../app/components/Repo'
import React, { Suspense } from 'react'
import RepoDirs from '../../../../app/components/RepoDirs'

const RepoPage = ({ params: { name } }) => {
    return (
        <div className='card'>
            <Link href={`/code/repos`} className='btn btn-back'>
                Back to Repositories
            </Link>
            <Suspense fallback={<div>loading repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage