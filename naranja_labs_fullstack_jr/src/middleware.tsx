import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, _res: NextResponse, _next: Function) {
    const header = req.headers.get('Authorization');
    if (!header) return false;
    const token = header.split(' ')[1];
    console.log(token, process.env.API_SECRET)
    if (token !== process.env.API_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        '/jobs',
        '/job/:path*',
    ]
}