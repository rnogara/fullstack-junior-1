import { NextRequest, NextResponse } from 'next/server';
import { IJob } from './interfaces';
import { jobs } from './jobs';

async function fetchJobs() {
    try {
        return new Response(JSON.stringify(jobs), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export async function GET(req: NextRequest): Promise<NextResponse<IJob[]>> {
    const response = await fetchJobs();
    const jobs = await response.json();
    const query = req.nextUrl.searchParams.get('level') || null;
    if (query) {
        const filteredJobs = jobs.filter((job: IJob) => job.level === query);
        return NextResponse.json(filteredJobs);
    }
    return NextResponse.json(jobs);
}