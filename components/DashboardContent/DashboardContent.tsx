import React, { FunctionComponent, useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

type Quote = {
    quote: string;
    author: string;
};

type DashboardResponse = {
    postCount?: number;
    commentCount?: number;
    quote?: Quote;
};

export const DashboardContent: FunctionComponent<{}> = () => {
    const [data, setData] = useState<DashboardResponse>();

    useEffect(() => {
        (async () => {
            console.log("FETCHIGN DASHBOARD PAGE");
            const res = await fetch("https://nextjs-blog-cms.herokuapp.com/dashboard");
            const data = await res.json();

            setData(data);
        })();
    }, []);
    return (
        <div>
            <div>Client side rendered content</div>
            {data ? (
                <div>
                    <div>Post count: {data.postCount}</div>
                    <div>Comment count: {data.commentCount}</div>
                    <div>Random quote: {data.quote?.quote}</div>
                    <div>Random quote author : {data.quote?.author}</div>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
};
