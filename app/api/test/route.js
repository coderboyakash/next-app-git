import { NextResponse } from "next/server"

export const GET = async (request) => {
    const data = {
        name: 'Akash Chowdhury'
    }
    return NextResponse.json(data)
}