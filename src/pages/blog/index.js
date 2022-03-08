import * as React from "react"
import Layout from "/src/components/layout.js"
import { Link, graphql } from "gatsby"

const postStyle = {
    marginBottom: 50,
}

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map(node => (
                    <article style={postStyle} key={node.key}>
                        <h3>
                            <Link to={`/blog/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h3>
                        <p>Posted: {node.frontmatter.date}</p>
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
                slug
            }
        }
    }
`;

export default BlogPage


