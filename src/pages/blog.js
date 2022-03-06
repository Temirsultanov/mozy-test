import * as React from "react"
import Layout from "/src/components/layout.js"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const postStyle = {
    marginBottom: 50,
}
const postBodyStyle = {
    padding: 20,
    border: "1px solid black"

}

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article style={postStyle} key={node.key}>
                        <h3>{node.frontmatter.title}</h3>
                        <p>Posted: {node.frontmatter.date}</p>
                        <div style={postBodyStyle}><MDXRenderer>{ node.body }</MDXRenderer></div>
                    </article>
                ))
            }
        </Layout>
    )
};

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                title
                date(formatString: "MMMM, D, YYYY")
            }
            id
            body
        }
        }
    }
`;

export default BlogPage


