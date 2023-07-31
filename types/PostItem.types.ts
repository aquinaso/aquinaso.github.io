// types/PostItem.types.ts

export type PostFrontmatterType = {
    title: string
    date: string
    categories: string[]
    summary: string
    thumbnail: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
        publicURL: string
    }
}

export type PostListItemType = {
    node: {
        id: string
        fields: {
            slug: string
        }
        frontmatter: PostFrontmatterType
    }
}
