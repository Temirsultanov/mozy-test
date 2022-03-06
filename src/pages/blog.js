import * as React from "react"
import Layout from "/src/components/layout.js"
import { graphql } from "gatsby"


const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(file => <li key={file.name}>{file.name}</li> )
                }
            </ul>
        </Layout>
    )
};

export const q = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`;

export default BlogPage


