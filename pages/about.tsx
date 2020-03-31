import { GetStaticProps } from "next";
import { FunctionComponent } from "react";
import fetch from "isomorphic-unfetch";

export type AboutProps = {
    description: string;
};

const About: FunctionComponent<AboutProps> = ({ description }) => <div>{description}</div>;

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
    console.log("FETCHIGN ABOUT PAGE");
    const res = await fetch("https://nextjs-blog-cms.herokuapp.com/about");
    const data = await res.json();
    const props: AboutProps = {
        description: data.description,
    };
    return { props };
};

export default About;
