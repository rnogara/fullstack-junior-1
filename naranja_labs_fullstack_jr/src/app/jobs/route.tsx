import { NextRequest, NextResponse } from 'next/server';
import { IError, IJob } from './interfaces';
import { jobs } from './jobs';

async function fetchJobs(): Promise<Response> {
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

function authChecker(header: string | null): boolean {
    if (!header) return false;
    const token = header.split(' ')[1];
    return token === process.env.API_SECRET;
}

export async function GET(req: NextRequest): Promise<NextResponse<IJob[] | IError>> {
    const header = req.headers.get('Authorization');
    if (!authChecker(header)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const response = await fetchJobs();
    const jobs = await response.json();
    const query = req.nextUrl.searchParams.get('level') || null;
    if (query) {
        const filteredJobs = jobs.filter((job: IJob) => job.level === query);
        return NextResponse.json(filteredJobs);
    }
    return NextResponse.json(jobs);
}